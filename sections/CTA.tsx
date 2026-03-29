import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
  return (
    <section className="cta">
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
        <a href="#" className="btn-cta">
          🍻 Get Four Beers Down
        </a>
      </ScrollReveal>
      <ScrollReveal delay={4}>
        <p className="cta-price">
          $24.99 · Free shipping · 30-day guarantee
        </p>
      </ScrollReveal>
    </section>
  );
}
