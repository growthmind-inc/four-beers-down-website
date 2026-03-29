"use client";

import { useCallback, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const questions = [
  { q: "What's the most unhinged thing you've done to impress someone?", cat: "Confessions" },
  { q: "If your search history was published, what would be most embarrassing?", cat: "Deep Dive" },
  { q: "Who in this room would you trust least with a secret?", cat: "Hot Takes" },
  { q: "What's a hill you will absolutely die on?", cat: "Wildcard" },
  { q: "Describe your most embarrassing date in three words.", cat: "Confessions" },
  { q: "What's a conspiracy theory you kind of believe?", cat: "Hot Takes" },
  { q: "What's the pettiest thing you've ever done?", cat: "Deep Dive" },
  { q: "What celebrity do you think you could beat in a fight?", cat: "Wildcard" },
  { q: "What's something you pretend to like but actually can't stand?", cat: "Confessions" },
  { q: "If you could swap lives with someone at this table for a week, who?", cat: "Deep Dive" },
];

export default function Hero() {
  const [qIndex, setQIndex] = useState(0);
  const [question, setQuestion] = useState(questions[0].q);
  const [category, setCategory] = useState(questions[0].cat);
  const topCardRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const shuffle = useCallback(() => {
    const card = topCardRef.current;
    if (!card || isAnimating.current) return;
    isAnimating.current = true;

    card.style.transform = "translateX(400px) rotate(20deg)";
    card.style.opacity = "0";

    setTimeout(() => {
      const nextIndex = (qIndex + 1) % questions.length;
      setQIndex(nextIndex);
      setQuestion(questions[nextIndex].q);
      setCategory(questions[nextIndex].cat);

      card.style.transition = "none";
      card.style.transform = "translateX(-400px) rotate(-20deg)";
      card.style.opacity = "0";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.style.transition = "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
          card.style.transform = "rotate(-2deg)";
          card.style.opacity = "1";
          isAnimating.current = false;
        });
      });
    }, 300);
  }, [qIndex]);

  return (
    <section className="hero">
      <div className="hero-bg-text">FBD</div>
      <div className="hero-inner">
        <div className="hero-text">
          <ScrollReveal>
            <h1>
              You don&apos;t<br />
              have to drink.<br />
              <span className="red">You have to think.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="subtitle">
              The card game that turns any night into{" "}
              <strong>the night everyone talks about</strong>. Hilarious
              questions, uncomfortable truths, and zero regrets. Maybe.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="hero-actions">
              <a href="#buy" className="btn-hero">
                🛒 Order Now — $24.99
              </a>
              <a href="#try" className="btn-ghost">
                Try a card <span className="arrow">&rarr;</span>
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="hero-proof">
              <div className="proof-item">
                <span className="proof-num">50K+</span>
                <span className="proof-label">Games Played</span>
              </div>
              <div className="proof-item">
                <span className="proof-num">4.9★</span>
                <span className="proof-label">Average Rating</span>
              </div>
              <div className="proof-item">
                <span className="proof-num">200+</span>
                <span className="proof-label">Unique Cards</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2} className="hero-visual">
          <div className="card-stack">
            <div className="game-card back">
              <div className="card-label">Four Beers Down</div>
              <div className="card-question">
                What&apos;s a secret your phone could reveal about you?
              </div>
              <div className="card-category">Deep Dive</div>
            </div>
            <div className="game-card mid">
              <div className="card-label">Four Beers Down</div>
              <div className="card-question">
                Who at this table would survive the longest in a zombie
                apocalypse?
              </div>
              <div className="card-category">Hot Takes</div>
            </div>
            <div
              ref={topCardRef}
              className="game-card front"
              onClick={shuffle}
            >
              <div className="card-label">Four Beers Down</div>
              <div className="card-question">{question}</div>
              <div className="card-category">{category}</div>
            </div>
          </div>
          <div className="card-click-hint">👆 Click to shuffle</div>
        </ScrollReveal>
      </div>
    </section>
  );
}
