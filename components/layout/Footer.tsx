import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin } from 'lucide-react';
import { contactInfo, socialLinks } from '@/content/navigation';

const Footer = () => (
  <footer className="bg-topbar text-topbar-foreground">
    <div className="container-main py-12 md:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary-foreground">Service de Cardiologie</h3>
          <p className="text-sm leading-relaxed opacity-70">
            Consultations, examens et prise en charge cardiologique à la Clinique Sainte Clotilde,
            avec un parcours patient clair et structuré.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href={socialLinks.facebook} className="opacity-60 transition-opacity hover:opacity-100" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            <a href={socialLinks.youtube} className="opacity-60 transition-opacity hover:opacity-100" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            <a href={socialLinks.linkedin} className="opacity-60 transition-opacity hover:opacity-100" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="opacity-70 transition-opacity hover:opacity-100">Accueil</Link></li>
            <li><Link href="/specialites" className="opacity-70 transition-opacity hover:opacity-100">Spécialités</Link></li>
            <li><Link href="/examens" className="opacity-70 transition-opacity hover:opacity-100">Examens</Link></li>
            <li><Link href="/parcours-patient" className="opacity-70 transition-opacity hover:opacity-100">Parcours patient</Link></li>
            <li><Link href="/contact" className="opacity-70 transition-opacity hover:opacity-100">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Parcours patient</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/consultation" className="opacity-70 transition-opacity hover:opacity-100">Consultation</Link></li>
            <li><Link href="/hospitalisation" className="opacity-70 transition-opacity hover:opacity-100">Hospitalisation</Link></li>
            <li><Link href="/preparer-ma-visite" className="opacity-70 transition-opacity hover:opacity-100">Préparer ma visite</Link></li>
            <li><Link href="/acces" className="opacity-70 transition-opacity hover:opacity-100">Accès</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
              <span className="opacity-70">{contactInfo.address}<br />{contactInfo.city}</span>
            </li>
            <li>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100">
                <Phone className="h-4 w-4 shrink-0" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100">
                <Mail className="h-4 w-4 shrink-0" />
                Envoyer un Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-muted/10">
      <div className="container-main py-4 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Service de Cardiologie — Clinique Sainte Clotilde. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
