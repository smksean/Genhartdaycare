import { Link } from "react-router-dom";
import { MapPin, Phone, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img src={logo} alt="Genhart Daycare" className="h-20 w-auto" />
            <p className="text-muted-foreground italic">
              "A Home Away from Home for Little Hearts."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/program" className="text-muted-foreground hover:text-primary transition-colors">Our Program</Link></li>
              <li><Link to="/safety" className="text-muted-foreground hover:text-primary transition-colors">Safety & Care</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                <span>No. 7, Irumekha Street, Benin City, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-brand-green flex-shrink-0" />
                <a href="tel:08034535648" className="hover:text-primary transition-colors">
                  08034535648
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Friday: 7:00 AM - 6:00 PM</li>
              <li>Saturday: 8:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Genhart Daycare Centre. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-brand-red fill-brand-red" /> for little hearts
          </p>
        </div>
      </div>
    </footer>
  );
};
