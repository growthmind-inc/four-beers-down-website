import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: "🃏",
    title: "Draw",
    desc: "Grab a card from the deck and read it out loud. Every card is a question, dare, or confession prompt designed to get real.",
  },
  {
    number: "02",
    icon: "🧠",
    title: "Think",
    desc: "Answer honestly — or take a sip and pass. But fair warning: everyone's going to remember which one you picked.",
  },
  {
    number: "03",
    icon: "🔥",
    title: "Reveal",
    desc: "By round four, the walls are down and the truth is out. That's the sweet spot. That's Four Beers Down.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <ScrollReveal>
        <div className="section-eyebrow">How It Works</div>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <div className="section-heading">
          Dead simple.<br />
          Wildly fun.
        </div>
      </ScrollReveal>
      <div className="how-steps">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i + 1}>
            <div className="step-card">
              <div className="step-number">{step.number}</div>
              <span className="step-icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
