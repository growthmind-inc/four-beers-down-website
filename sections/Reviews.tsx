import ScrollReveal from "@/components/ScrollReveal";

const reviews = [
  {
    text: "Played at our housewarming. By the end, three couples were in therapy. Ten out of ten, would ruin friendships again.",
    initials: "SK",
    name: "Sarah K.",
    detail: "Verified Chaos Agent",
    featured: true,
  },
  {
    text: "Expected Uno-level vibes. Left the table knowing things about my roommates that I genuinely cannot unknow.",
    initials: "MD",
    name: "Marcus D.",
    detail: "Game Night Survivor",
    featured: false,
  },
  {
    text: "The questions start light then suddenly you're confessing your deepest secrets to coworkers at happy hour. Absolutely perfect.",
    initials: "JR",
    name: "Jess R.",
    detail: "Happy Hour Hero",
    featured: false,
  },
];

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <ScrollReveal>
        <div className="section-eyebrow">What Players Say</div>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <div className="section-heading">
          Don&apos;t take our<br />
          word for it.
        </div>
      </ScrollReveal>
      <div className="reviews-grid">
        {reviews.map((review, i) => (
          <ScrollReveal key={review.initials} delay={i + 1}>
            <div
              className={`review-card${review.featured ? " featured" : ""}`}
            >
              <div className="review-stars">★★★★★</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <div className="author-avatar">{review.initials}</div>
                <div className="author-info">
                  <span className="author-name">{review.name}</span>
                  <span className="author-detail">{review.detail}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
