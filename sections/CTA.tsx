"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="cta" id="buy">
      <div className="cta-bg-circle" />
      <ScrollReveal>
        <div className="section-eyebrow">Ready?</div>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <h2>
          Find out who<br />
          your friends <span className="red">really</span> are.
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <p className="cta-sub">200+ cards. Zero mercy. Infinite stories.</p>
      </ScrollReveal>
      <ScrollReveal delay={3}>
        <div className="waitlist-badge">Coming Soon</div>
      </ScrollReveal>
      <ScrollReveal delay={4}>
        {submitted ? (
          <p className="waitlist-success">
            You&apos;re on the list! We&apos;ll let you know when it drops.
          </p>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="waitlist-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-cta">
              🍻 Join the Waitlist
            </button>
          </form>
        )}
      </ScrollReveal>
      <ScrollReveal delay={5}>
        <p className="cta-price">
          $24.99 · Free shipping · 30-day guarantee
        </p>
      </ScrollReveal>
    </section>
  );
}
