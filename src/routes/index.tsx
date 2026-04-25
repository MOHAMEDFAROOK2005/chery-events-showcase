import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-wedding.jpg";
import weddingImg from "../assets/gallery-wedding-1.jpg";
import stageImg from "../assets/gallery-stage.jpg";
import birthdayImg from "../assets/gallery-birthday.jpg";
import { ArrowRight, Sparkles, Award, Heart, Users } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { services } from "../data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chery Events — Crafting Unforgettable Luxury Events" },
      { name: "description", content: "Premium event planning for weddings, birthdays and celebrations. Bespoke design, world-class execution. Book your dream event with Chery Events." },
      { property: "og:title", content: "Chery Events — Crafting Unforgettable Luxury Events" },
      { property: "og:description", content: "Premium event planning for weddings, birthdays and celebrations." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = services.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Luxurious wedding stage with chandeliers and floral décor by Chery Events"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/30" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-up">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary mb-6 animate-float">
            ✦ Luxury Event Planners ✦
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] animate-float-delayed animate-glow">
            Crafting <em className="text-gradient-gold not-italic hover-gold">Unforgettable</em>
            <br /> Events
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-float">
            From intimate ceremonies to grand celebrations — we design and orchestrate luxury
            experiences that turn moments into memories.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full text-sm font-medium tracking-wider uppercase hover:shadow-gold transition-all duration-300 hover-scale"
            >
              Book Your Event
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/40 text-foreground rounded-full text-sm font-medium tracking-wider uppercase hover:bg-primary/10 transition-all hover-rotate"
            >
              View Gallery
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Chery Events</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Where every detail tells a <em className="text-gradient-gold not-italic hover-gold">story</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Chery Events is a premier event design house dedicated to creating extraordinary
              celebrations. We blend timeless elegance with modern sophistication — orchestrating
              every element from concept to execution.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With years of experience curating luxury weddings and bespoke events, our team brings
              vision, precision and a passion for perfection to every occasion.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary group"
            >
              <span className="border-b border-primary/40 pb-1">Discover our story</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={weddingImg} alt="Luxury wedding mandap" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-elegant aspect-[3/4] object-cover" />
            <img src={birthdayImg} alt="Elegant birthday setup" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-elegant aspect-[3/4] object-cover mt-12" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 lg:px-10 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { icon: Heart, num: "500+", label: "Weddings Crafted" },
            { icon: Sparkles, num: "1000+", label: "Events Hosted" },
            { icon: Users, num: "50K+", label: "Happy Guests" },
            { icon: Award, num: "12+", label: "Years of Excellence" },
          ].map(({ icon: Icon, num, label }) => (
            <div key={label} className="hover-scale transition-all duration-300">
              <Icon className="mx-auto text-primary mb-3" size={28} />
              <div className="font-display text-4xl md:text-5xl text-gradient-gold">{num}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32 px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Services"
          title="Designed for the discerning"
          subtitle="A complete suite of luxury event services — every element handled with mastery and care."
        />
        <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="group p-8 bg-card gold-border rounded-2xl hover-lift hover-rotate">
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-5 hover-scale">
                <Icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display text-2xl text-foreground">{name}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 border border-primary/40 rounded-full text-sm uppercase tracking-wider text-foreground hover:bg-primary/10 transition-all">
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
        <img src={stageImg} alt="Stage lighting" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Ready to create something <em className="text-gradient-gold not-italic hover-gold">extraordinary?</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Let's bring your vision to life. Get in touch for a personalised consultation.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 px-10 py-4 bg-gradient-gold text-primary-foreground rounded-full text-sm font-medium tracking-wider uppercase hover:shadow-gold transition-all"
          >
            Book Your Event <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
