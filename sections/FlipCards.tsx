"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  { cat: "Confessions", text: "What's the worst lie you've told to get out of plans?" },
  { cat: "Hot Takes", text: "Which person at this table has the worst taste in music?" },
  { cat: "Deep Dive", text: "If you could un-send one text message, which one would it be?" },
  { cat: "Wildcard", text: "Show the group your most recent selfie. No deleting first." },
];

function FlipCardItem({
  cat,
  text,
  delay,
}: {
  cat: string;
  text: string;
  delay: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <ScrollReveal delay={delay}>
      <div
        className={`flip-card${flipped ? " flipped" : ""}`}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <span className="flip-icon">🍺</span>
            <div className="flip-logo">FBD</div>
            <div className="flip-tap">tap to flip</div>
          </div>
          <div className="flip-card-back">
            <div className="q-cat">{cat}</div>
            <div className="q-text">{text}</div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function FlipCards() {
  return (
    <section className="flip-section" id="try">
      <ScrollReveal>
        <div className="section-eyebrow">Try It Now</div>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <div className="section-heading">
          Flip a card.<br />
          We dare you.
        </div>
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <p className="section-sub">
          Click any card to reveal a real question from the deck.
        </p>
      </ScrollReveal>
      <div className="flip-grid">
        {cards.map((card, i) => (
          <FlipCardItem
            key={card.cat}
            cat={card.cat}
            text={card.text}
            delay={i + 1}
          />
        ))}
      </div>
    </section>
  );
}
