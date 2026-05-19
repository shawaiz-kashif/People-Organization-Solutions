import Image from "next/image";
import { ArrowRight } from "lucide-react";

const intro =
  "At P&O Solutions, we don't just handle HR - we transform the way businesses engage with their most valuable asset, their people. With years of HR expertise and a deep understanding of today's fast-evolving workforce, we provide innovative HR solutions that not only solve problems but also drive growth. Whether you are scaling quickly or streamlining HR processes, we're your trusted partner, guiding you through every HR challenge with strategy, insight, and precision.";

export default function AboutPage() {
  return (
    <main>
      <section className="hero" style={{ minHeight: "500px" }}>
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Who We Are</p>
          <h1>Trusted Partner for Your People Success</h1>
          <p className="hero-copy" style={{ marginTop: "32px", fontSize: "1.2rem" }}>
            Learn how we're transforming workplaces through people-first HR strategy
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/contact">
              Get in Touch
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-heading narrow">
          <span />
          <h2>About Us</h2>
          <p>{intro}</p>
        </div>

        <div className="mission-grid">
          <article>
            <Image
              src="https://peopleorgsolutions.com/wp-content/uploads/2021/02/outdoor-image-03.jpg"
              alt="Professional team in an outdoor workplace setting"
              width={644}
              height={402}
            />
            <h3>Our Vision</h3>
            <p>
              To become the leading force in transforming workplaces across
              industries, empowering organizations to unlock the full potential
              of their people through innovative, strategic, and human-centered
              HR solutions.
            </p>
            <p>We envision a world where every business thrives because its people do.</p>
          </article>
          <article>
            <Image
              src="https://peopleorgsolutions.com/wp-content/uploads/2018/11/services-2.jpg"
              alt="Collaborative team meeting around a table"
              width={644}
              height={402}
            />
            <h3>Our Mission</h3>
            <p>
              Our mission is to redefine what a great team can do for your
              business. By combining practical HR technology with a deep
              understanding of human behaviour, we create strategies that empower
              your people, streamline your operations, and deliver measurable
              business impact.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-band">
        <div>
          <p className="eyebrow">Ready to Learn More?</p>
          <h2>Let's Work Together</h2>
          <p>
            Discover how we can help your organization build a stronger people operation.
          </p>
        </div>
        <a className="button primary light" href="/contact">
          Schedule Consultation
        </a>
      </section>
    </main>
  );
}
