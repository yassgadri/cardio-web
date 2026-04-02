import Link from "next/link";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
import { SiFacebook as Facebook, SiYoutube as Youtube } from "react-icons/si";
import { LuLinkedin as Linkedin } from "react-icons/lu";
import { contactInfo, socialLinks } from "@/content/navigation";

const Footer = () => (
  <footer className="bg-topbar text-topbar-foreground">
    <div className="container-main py-12 md:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary-foreground">
            Service de Cardiologie
          </h3>
          <p className="text-sm leading-relaxed opacity-70">
            Consultations, examens et prise en charge cardiologique à la Clinique Sainte Clotilde,
            avec un parcours patient clair et structuré.
          </p>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            Cardiologie Sainte-Clotilde – Saint-Denis, La Réunion.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={socialLinks.facebook}
              className="opacity-60 transition-opacity hover:opacity-100"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={socialLinks.youtube}
              className="opacity-60 transition-opacity hover:opacity-100"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              className="opacity-60 transition-opacity hover:opacity-100"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="opacity-70 transition-opacity hover:opacity-100">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/specialites" className="opacity-70 transition-opacity hover:opacity-100">
                Spécialités
              </Link>
            </li>
            <li>
              <Link href="/medecins" className="opacity-70 transition-opacity hover:opacity-100">
                Médecins
              </Link>
            </li>
            <li>
              <Link
                href="/parcours-patient"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                Parcours patient
              </Link>
            </li>
            <li>
              <Link
                href="/qui-sommes-nous"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                Le service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Parcours patient
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/consultation"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                Consultation
              </Link>
            </li>
            <li>
              <Link
                href="/hospitalisation"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                Hospitalisation
              </Link>
            </li>
            <li>
              <Link
                href="/preparer-ma-visite"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                Préparer ma visite
              </Link>
            </li>
            <li>
              <Link href="/contact" className="opacity-70 transition-opacity hover:opacity-100">
                Accès
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
              <span className="opacity-70">
                Clinique Sainte-Clotilde
                <br />
                {contactInfo.address}
                <br />
                {contactInfo.city}
              </span>
            </li>
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
                aria-label={`Téléphone : ${contactInfo.phone}`}
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>
                  <span className="sr-only">Téléphone : </span>
                  {contactInfo.phone}
                </span>
              </a>
            </li>

            <li className="flex items-start gap-2 opacity-70">
              <Printer className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                <span className="font-medium">Fax :</span> {contactInfo.fax}
                <br />
                <span className="text-xs opacity-80">
                  Transmission de documents médicaux uniquement
                </span>
              </span>
            </li>

            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-muted/10">
      <div className="container-main flex flex-col items-center justify-between gap-2 py-4 text-center text-xs opacity-50 md:flex-row md:text-left">
        <div>
          © {new Date().getFullYear()} Service de Cardiologie — Clinique Sainte Clotilde. Tous
          droits réservés.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/mentions-legales" className="transition-opacity hover:opacity-100">
            Mentions légales
          </Link>
          <Link href="/politique-confidentialite" className="transition-opacity hover:opacity-100">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
