import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "People First",
    text: "We believe people are the heart of every organization. We prioritize their well-being, growth, and workplace success in everything we do.",
    icon: "\uD83D\uDC65",
  },
  {
    title: "Integrity & Trust",
    text: "We operate with honesty, transparency, and accountability, building long-term partnerships rooted in trust.",
    icon: "\uD83D\uDEE1\uFE0F",
  },
  {
    title: "Excellence in Execution",
    text: "We don't just deliver HR solutions; we deliver results. With precision, dedication, and performance-driven strategies, we aim to exceed expectations every time.",
    icon: "\uD83C\uDFC5",
  },
  {
    title: "Innovation & Future Readiness",
    text: "We embrace creativity and technology to stay ahead of HR trends, ensuring our clients are prepared for tomorrow's challenges today.",
    icon: "\uD83D\uDCA1",
  },
  {
    title: "Collaboration & Partnership",
    text: "We work side by side with clients, becoming an extension of their team. Together, we build stronger, more resilient organizations.",
    icon: "\uD83E\uDD1D",
  },
  {
    title: "Respect & Empathy",
    text: "We value diversity, perspectives, and the human experience, fostering inclusive workplaces where everyone feels heard, valued, and supported.",
    icon: "\u2728",
  },
];

export default function ValuesPage() {
  return (
    <main>
      <section className="hero" style={{ minHeight: "500px" }}>
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Our Core Values</p>
          <h1>Built Around People, Delivered With Precision</h1>
          <p className="hero-copy" style={{ marginTop: "32px", fontSize: "1.2rem" }}>
            The principles that guide everything we do
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/about">
              Learn Our Story
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-heading">
          <span />
          <h2>Our Six Core Values</h2>
          <p>These principles guide every decision we make and every solution we deliver</p>
        </div>
        <div className="values-grid">
          {values.map(({ title, text, icon }) => (
            <article className="value-card" key={title}>
              <div className="value-icon" aria-hidden="true">
                {icon}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <article className="growth-card">
          <div className="value-icon" aria-hidden="true">
            {"\uD83D\uDCC8"}
          </div>
          <div>
            <h3>Continuous Growth & Learning</h3>
            <p>
              We are committed to professional excellence, staying updated,
              evolving, and
              constantly improving so we can guide our clients to do the same.
            </p>
          </div>
        </article>
      </section>

      <section className="contact-band">
        <div>
          <p className="eyebrow">Want to Partner with Us?</p>
          <h2>Let's Create Something Great Together</h2>
          <p>
            Connect with us to see how our values align with your vision for workplace success.
          </p>
        </div>
        <a className="button primary light" href="/contact">
          Get in Touch
        </a>
      </section>
    </main>
  );
}
