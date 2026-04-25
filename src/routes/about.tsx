import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { Gem, Eye, Target, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import wedding from "../assets/gallery-wedding-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Chery Events | Our Story & Vision" },
      { name: "description", content: "Discover Chery Events — a luxury event design house with a passion for creating extraordinary celebrations and unforgettable memories." },
      { property: "og:title", content: "About — Chery Events" },
      { property: "og:description", content: "Our story, mission and the values that shape every event we design." },
      { property: "og:image", content: wedding },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 lg:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Story</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
          The art of <em className="text-gradient-gold not-italic">celebration</em>
        </h1>
        <div className="mt-6 h-px w-24 bg-gradient-gold mx-auto" />
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={wedding}
            alt="Chery Events luxury wedding setup"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-3xl shadow-elegant aspect-[4/5] object-cover"
          />
          <div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Born from a love for <em className="text-gradient-gold not-italic">timeless beauty</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Chery Events began with a simple belief — that every celebration deserves to be
              extraordinary. What started as a passion for crafting beautiful weddings has grown
              into a full-service luxury event house trusted by hundreds of families.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We approach every event as a once-in-a-lifetime moment. Our team blends artistry,
              precision and heartfelt service to deliver experiences that transcend expectation —
              from intimate gatherings to landmark celebrations.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, we are proud to be one of the region's most sought-after event designers,
              known for our refined aesthetic and uncompromising attention to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-10 rounded-2xl gold-border bg-background">
            <Target className="text-primary mb-5" size={32} />
            <h3 className="font-display text-3xl">Our Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To craft celebrations that move hearts and create memories families will treasure
              forever — through bespoke design, world-class execution and devoted service.
            </p>
          </div>
          <div className="p-10 rounded-2xl gold-border bg-background">
            <Eye className="text-primary mb-5" size={32} />
            <h3 className="font-display text-3xl">Our Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To be the most admired luxury event house — defining a new standard of elegance,
              creativity and effortless excellence in every celebration we touch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Chery Events"
          title="Trusted to deliver perfection"
          subtitle="The values and craft that set us apart."
        />
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
          {[
            { icon: Gem, t: "Bespoke Design", d: "Every event is uniquely designed around your story, taste and vision — never templated." },
            { icon: ShieldCheck, t: "End-to-End Care", d: "From first concept to final farewell, our team manages every detail seamlessly." },
            { icon: Sparkles, t: "Premium Quality", d: "We partner only with elite vendors to deliver the finest décor, food and production." },
            { icon: HeartHandshake, t: "Personal Attention", d: "Dedicated planners who listen, advise and turn your dreams into living reality." },
            { icon: Target, t: "Flawless Execution", d: "Meticulous logistics and on-the-day coordination so you can be fully present." },
            { icon: Gem, t: "Timeless Aesthetic", d: "An elegant, refined design language that ages beautifully in photos and memory." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="p-8 bg-card rounded-2xl gold-border hover-lift">
              <Icon className="text-primary mb-4" size={26} />
              <h4 className="font-display text-xl">{t}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact" className="inline-flex items-center px-10 py-4 bg-gradient-gold text-primary-foreground rounded-full text-sm uppercase tracking-wider hover:shadow-gold transition-all">
            Start Planning With Us
          </Link>
        </div>
      </section>
    </>
  );
}
