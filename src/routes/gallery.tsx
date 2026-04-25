import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import wedding from "../assets/gallery-wedding-1.jpg";
import birthday from "../assets/gallery-birthday.jpg";
import stage from "../assets/gallery-stage.jpg";
import mehendi from "../assets/gallery-mehendi.jpg";
import catering from "../assets/gallery-catering.jpg";
import dj from "../assets/gallery-dj.jpg";
import chenda from "../assets/gallery-chenda.jpg";
import makeup from "../assets/gallery-makeup.jpg";
import hero from "../assets/hero-wedding.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Chery Events | Past Weddings & Celebrations" },
      { name: "description", content: "Browse our portfolio of luxury weddings, birthdays, stage productions and lighting setups crafted by Chery Events." },
      { property: "og:title", content: "Gallery — Chery Events" },
      { property: "og:description", content: "A visual journey through our most memorable celebrations." },
      { property: "og:image", content: wedding },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: hero, cat: "Weddings", title: "Royal Reception" },
  { src: wedding, cat: "Weddings", title: "Floral Mandap" },
  { src: birthday, cat: "Birthdays", title: "Golden Hour" },
  { src: stage, cat: "Stage Setup", title: "LED Spectacle" },
  { src: mehendi, cat: "Weddings", title: "Bridal Mehandi" },
  { src: catering, cat: "Weddings", title: "Gourmet Buffet" },
  { src: dj, cat: "Lighting", title: "Reception Vibes" },
  { src: chenda, cat: "Stage Setup", title: "Chenda Melam" },
  { src: makeup, cat: "Weddings", title: "Bridal Glam" },
];

const cats = ["All", "Weddings", "Birthdays", "Stage Setup", "Lighting"] as const;

function Gallery() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <section className="pt-40 pb-12 px-6 lg:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Portfolio</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
          Moments <em className="text-gradient-gold not-italic">we crafted</em>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-muted-foreground text-lg">
          A curated glimpse into the celebrations we've had the honour of designing.
        </p>
        <div className="mt-6 h-px w-24 bg-gradient-gold mx-auto" />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
                active === c
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "border border-primary/30 text-muted-foreground hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((it, i) => (
            <figure
              key={`${it.title}-${i}`}
              className="group relative overflow-hidden rounded-2xl gold-border aspect-square cursor-pointer animate-fade-up"
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-primary">{it.cat}</p>
                <p className="font-display text-2xl text-foreground mt-1">{it.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
