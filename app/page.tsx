import Image from "next/image";
import { ArrowRight } from "lucide-react";

const intro =
  "At P&O Solutions, we don't just handle HR - we transform the way businesses engage with their most valuable asset, their people. With years of HR expertise and a deep understanding of today's fast-evolving workforce, we provide innovative HR solutions that not only solve problems but also drive growth. Whether you are scaling quickly or streamlining HR processes, we're your trusted partner, guiding you through every HR challenge with strategy, insight, and precision.";

const services = [
  "HR strategy and advisory",
  "Talent structure and employee engagement",
  "Leadership and team enablement",
  "Workflow and HR process improvement",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Human-centered HR solutions</p>
          <h1>Transforming workplaces through people-first HR strategy.</h1>
          <p className="hero-copy">{intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="/contact">
              Book a Consultation
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <a className="button ghost" href="/about">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="cream-band">
        <div className="feature-grid">
          <div className="image-panel">
            <Image
              src="https://peopleorgsolutions.com/wp-content/uploads/2018/11/services-2.jpg"
              alt="People working together in a planning session"
              width={644}
              height={402}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 644px"
              priority
            />
          </div>
          <article className="feature-card">
            <p className="eyebrow dark">What we do</p>
            <h2>Simplify HR. Save Time. Grow Your Business.</h2>
            <p>
              HR First Solutions provides expert HR support and ready-to-use
              tools tailored for small business success.
            </p>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <span>{"\u2713"}</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <a className="button primary" href="/solutions">
              Explore Solutions
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
