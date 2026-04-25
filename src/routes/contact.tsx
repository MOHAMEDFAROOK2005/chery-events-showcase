import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Chery Events | Book Your Luxury Event" },
      { name: "description", content: "Get in touch with Chery Events. Call, WhatsApp or send an enquiry to plan your luxury wedding, birthday or special celebration." },
      { property: "og:title", content: "Contact — Chery Events" },
      { property: "og:description", content: "Reach out to plan your dream event with our team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="pt-40 pb-16 px-6 lg:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
          Let's plan your <em className="text-gradient-gold not-italic">moment</em>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-muted-foreground text-lg">
          Reach out for a personalised consultation. We typically respond within a few hours.
        </p>
        <div className="mt-6 h-px w-24 bg-gradient-gold mx-auto" />
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-5">
            <div className="p-8 bg-card gold-border rounded-2xl flex items-start gap-5 hover-lift">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <Phone className="text-primary-foreground" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">Call Us</p>
                <a href="tel:+919876543210" className="font-display text-2xl text-foreground hover:text-primary block mt-1">
                  +91 98765 43210
                </a>
                <p className="text-sm text-muted-foreground mt-1">Mon — Sun, 9 AM to 9 PM</p>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hi%20Chery%20Events%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 bg-card gold-border rounded-2xl hover-lift"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary">WhatsApp</p>
                  <p className="font-display text-2xl text-foreground mt-1">Chat instantly</p>
                  <p className="text-sm text-muted-foreground mt-1">Quick replies, anytime</p>
                </div>
              </div>
            </a>

            <div className="p-8 bg-card gold-border rounded-2xl flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <Mail className="text-primary-foreground" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">Email</p>
                <a href="mailto:hello@cheryevents.com" className="font-display text-2xl text-foreground hover:text-primary block mt-1">
                  hello@cheryevents.com
                </a>
              </div>
            </div>

            <div className="p-8 bg-card gold-border rounded-2xl flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <MapPin className="text-primary-foreground" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">Visit</p>
                <p className="font-display text-2xl text-foreground mt-1">Madurai, Tamil Nadu</p>
                <a
                  href="https://maps.app.goo.gl/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground mt-1 hover:text-primary inline-block"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="p-8 md:p-10 bg-card gold-border rounded-2xl"
          >
            <h2 className="font-display text-3xl">Send an enquiry</h2>
            <p className="text-muted-foreground text-sm mt-1">Tell us about your event — we'll be in touch.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <input
                    required
                    type="tel"
                    className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Event Type</label>
                <select className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition">
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Engagement</option>
                  <option>Corporate</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition resize-none"
                  placeholder="Tell us about your event…"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full text-sm font-medium tracking-wider uppercase hover:shadow-gold transition-all disabled:opacity-60"
              >
                {sent ? "Thank you — we'll be in touch ✦" : (<>Send Enquiry <Send size={16} /></>)}
              </button>
            </div>
          </form>
        </div>

        {/* Map */}
        <div className="max-w-7xl mx-auto mt-12 rounded-2xl overflow-hidden gold-border h-[400px]">
          <iframe
            title="Chery Events Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125782.9!2d78.1197!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00bff58e8a5c3f%3A0x7a9c9b5c5d5e5f5e!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.95)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
