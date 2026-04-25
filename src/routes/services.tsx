import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { services } from "../data/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Chery Events | Luxury Wedding & Event Planners" },
      { name: "description", content: "Full-service luxury event offerings: theme weddings, DJ, photography, catering, LED walls, mehandi, bridal makeup, sound & lighting, and more." },
      { property: "og:title", content: "Services — Chery Events" },
      { property: "og:description", content: "Complete suite of premium event services curated for unforgettable celebrations." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 lg:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What We Offer</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
          Our <em className="text-gradient-gold not-italic">Services</em>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-muted-foreground text-lg">
          A complete spectrum of luxury event services — every detail crafted to perfection.
        </p>
        <div className="mt-6 h-px w-24 bg-gradient-gold mx-auto" />
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, name, desc }, i) => (
            <article
              key={name}
              className="group relative p-8 bg-card gold-border rounded-2xl hover-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-[0.04] transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <span className="font-display text-3xl text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground">{name}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-card border-y border-border text-center">
        <h2 className="font-display text-3xl md:text-5xl">Let's plan your perfect event</h2>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-gradient-gold text-primary-foreground rounded-full text-sm font-medium tracking-wider uppercase hover:shadow-gold transition-all"
        >
          Get a Quote <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
