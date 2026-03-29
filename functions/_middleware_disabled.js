export async function onRequest(context) {
  const host = context.request.headers.get("host") || "";

  // Protéger uniquement la preview staging
  if (host !== "staging.cardiologie-sainteclotilde.pages.dev") {
    return context.next();
  }

  const authHeader = context.request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return unauthorized();
  }

  const base64Credentials = authHeader.slice("Basic ".length).trim();

  let decoded = "";
  try {
    decoded = atob(base64Credentials);
  } catch {
    return unauthorized();
  }

  const separatorIndex = decoded.indexOf(":");
  if (separatorIndex === -1) {
    return unauthorized();
  }

  const username = decoded.slice(0, separatorIndex);
  const password = decoded.slice(separatorIndex + 1);

  // Mets ces variables dans Cloudflare Pages > Settings > Environment variables
  const expectedUser = "test";
  const expectedPass = "test";

  if (username !== expectedUser || password !== expectedPass) {
    return unauthorized();
  }

  const response = await context.next();

  // Optionnel mais utile sur staging
  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  return response;
}

function unauthorized() {
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Staging Review"',
      "Cache-Control": "no-store",
    },
  });
}
