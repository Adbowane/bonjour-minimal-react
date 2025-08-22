import { Link } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Re-Plantes</h3>
                <p className="text-xs text-muted-foreground">Bordeaux</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              La première recyclerie de plantes et fleurs sur Bordeaux. 
              Une seconde vie pour vos végétaux à prix doux.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Événements</Link></li>
              <li><Link to="/adopt" className="text-muted-foreground hover:text-primary transition-colors">Adopter/Donner</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Conseils</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Nos Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Adoption de plantes</li>
              <li>Don de végétaux</li>
              <li>Ateliers créatifs</li>
              <li>Rempotage</li>
              <li>Bouquets séchés</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bordeaux, Nouvelle-Aquitaine</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@re-plantes.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>06 XX XX XX XX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partenaires */}
        <div className="mt-8 pt-8 border-t">
          <h4 className="font-semibold text-center mb-4">Nos Partenaires</h4>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="h-12 w-24 bg-muted rounded flex items-center justify-center">
              <span className="text-xs">Bordeaux Métropole</span>
            </div>
            <div className="h-12 w-24 bg-muted rounded flex items-center justify-center">
              <span className="text-xs">Nouvelle-Aquitaine</span>
            </div>
            <div className="h-12 w-24 bg-muted rounded flex items-center justify-center">
              <span className="text-xs">France 3</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Re-Plantes. Tous droits réservés. 
            <span className="mx-2">•</span>
            Créé avec 💚 pour l'environnement
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;