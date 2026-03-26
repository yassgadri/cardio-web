import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-main section-padding text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-body mb-6">Oops! Page not found</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium"
      >
        Return to Home
      </Link>
    </div>
  );
}
