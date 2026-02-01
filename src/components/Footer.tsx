import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <span className="text-foreground font-serif text-xl font-bold">RS</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-gold">
                  Royal Shine
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-background/70">
                  Jewellers
                </p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              Crafting timeless elegance since 1995. Your trusted destination for premium gold, diamond, and silver jewellery.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/80 hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-background/80 hover:text-gold transition-colors text-sm">
                  Jewellery Collection
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-gold transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Collections</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/collection" className="text-background/80 hover:text-gold transition-colors text-sm">
                  Gold Jewellery
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-background/80 hover:text-gold transition-colors text-sm">
                  Diamond Jewellery
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-background/80 hover:text-gold transition-colors text-sm">
                  Silver Jewellery
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-background/80 hover:text-gold transition-colors text-sm">
                  Bridal Sets
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-background/80 hover:text-gold transition-colors text-sm">
                  Daily Wear
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-background/80 text-sm">
                  123 Jewellery Lane, Diamond District,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="text-background/80 hover:text-gold transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:info@royalshinejewellers.com" className="text-background/80 hover:text-gold transition-colors text-sm">
                  info@royalshinejewellers.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-background/80 text-sm">
                  Mon - Sat: 10:00 AM - 8:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} Royal Shine Jewellers. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              BIS Hallmarked Gold | IGI Certified Diamonds
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
