import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin } from "lucide-react";
import { contactInfo, socialLinks } from "@/content/navigation";

const Footer = () => (
  <footer className="bg-topbar text-topbar-foreground">
    <div className="container-main py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-primary-foreground mb-4">SELARL de Cardiologie</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Service de cardiologie de la Clinique Sainte Clotilde. Plus de 30 années d'expérience en cardiologie interventionnelle.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href={socialLinks.facebook} className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            <a href={socialLinks.youtube} className="opacity-60 hover:opacity-100 transition-opacity" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            <a href={socialLinks.linkedin} className="opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Accueil</Link></li>
            <li><Link to="/qui-sommes-nous" className="opacity-70 hover:opacity-100 transition-opacity">Qui sommes-nous ?</Link></li>
            <li><Link to="/medecins-professionnels" className="opacity-70 hover:opacity-100 transition-opacity">Médecins & Professionnels</Link></li>
            <li><Link to="/contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">Spécialités</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/cardiopathies-ischemiques" className="opacity-70 hover:opacity-100 transition-opacity">Cardiopathies ischémiques</Link></li>
            <li><Link to="/cardiopathies-rythmiques" className="opacity-70 hover:opacity-100 transition-opacity">Cardiopathies rythmiques</Link></li>
            <li><Link to="/cardiopathies-valvulaires" className="opacity-70 hover:opacity-100 transition-opacity">Cardiopathies valvulaires</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
              <span className="opacity-70">{contactInfo.address}<br />{contactInfo.city}</span>
            </li>
            <li>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4 shrink-0" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
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
        © {new Date().getFullYear()} SELARL de Cardiologie — Clinique Sainte Clotilde. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
