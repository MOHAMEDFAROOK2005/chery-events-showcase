import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl">
            <span className="text-gradient-gold">Chery</span> Events
          </h3>
          <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
            Crafting unforgettable luxury experiences. From intimate celebrations to grand
            weddings — we design events that linger in memory.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full gold-border flex items-center justify-center hover:bg-gradient-gold hover:text-primary-foreground transition-all">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full gold-border flex items-center justify-center hover:bg-gradient-gold hover:text-primary-foreground transition-all">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Explore</h4>
          <ul className="space-y-2.5 text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Reach Us</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-primary" /> +91 98765 43210</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-primary" /> hello@cheryevents.com</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-primary" /> Madurai, Tamil Nadu</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground tracking-wider uppercase">
        © {new Date().getFullYear()} Chery Events · Crafted with elegance
      </div>
    </footer>
  );
}
