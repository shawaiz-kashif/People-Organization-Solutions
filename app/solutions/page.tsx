import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "HR Strategy & Advisory",
    description:
      "Develop comprehensive HR strategies aligned with your business goals. We analyze your current HR processes and recommend tailored solutions for sustainable growth.",
    icon: "\uD83D\uDCCA",
  },
  {
    title: "Talent Structure & Engagement",
    description:
      "Build effective team structures and foster employee engagement initiatives that attract and retain top talent. Create a workplace culture where people want to belong.",
    icon: "\uD83D\uDC65",
  },
  {
    title: "Leadership & Team Enablement",
    description:
      "Empower your leaders with tools and training to develop high-performing teams. Build leadership capabilities that drive organizational success.",
    icon: "\uD83C\uDFAF",
  },
  {
    title: "Workflow & Process Improvement",
    description:
      "Streamline your HR processes and workflows. Eliminate bottlenecks and improve efficiency with modern, technology-enabled solutions.",
    icon: "\u2699\uFE0F",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="hero" style={{ minHeight: "500px" }}>
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">What We Offer</p>
          <h1>Solutions Designed for Growth</h1>
          <p
            className="hero-copy"
            style={{ marginTop: "32px", fontSize: "1.2rem" }}
          >
            Innovative HR solutions that solve your biggest workplace challenges
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/contact">
              Explore with Us
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      <section className="cream-band">
        <div className="section-heading">
          <span />
          <h2>Our Core Services</h2>
          <p>Comprehensive HR solutions to transform your HR operations</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/contact" className="service-link">
                Learn More <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="feature-grid">
          <div className="image-panel">
            <Image
              src="https://peopleorgsolutions.com/wp-content/uploads/2018/11/services-2.jpg"
              alt="People working together in a planning session"
              width={644}
              height={402}
            />
          </div>
          <article className="feature-card">
            <p className="eyebrow dark">Why Choose Us</p>
            <h2>Proven Results & Expert Support</h2>
            <p>
              Our team combines years of HR expertise with a deep understanding
              of modern workplace dynamics. We're committed to delivering
              business results that matter.
            </p>
            <ul>
              <li>
                <CheckCircle2 size={18} />
                <span>Industry-leading expertise</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Customized solutions for your needs</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Measurable business impact</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Ongoing partnership and support</span>
              </li>
            </ul>
            <a className="button primary" href="/contact">
              Get Started Today
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </article>
        </div>
      </section>

      <section className="contact-band">
        <div>
          <p className="eyebrow">Ready to Transform?</p>
          <h2>Let's Build Your Success</h2>
          <p>
            Contact us today to discuss which solutions are right for your
            organization.
          </p>
        </div>
        <a className="button primary light" href="/contact">
          Schedule a Call
        </a>
      </section>
    </main>
  );
}
