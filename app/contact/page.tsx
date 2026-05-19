"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  XCircle,
} from "lucide-react";

type Toast = {
  type: "success" | "error";
  message: string;
};

const officeAddress = "123 Fifth Avenue, NY 10160, New York, USA";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  officeAddress,
)}&output=embed`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (nextToast: Toast) => {
    setToast(nextToast);
    window.setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this with the real contact-form API call when it is enabled.
      console.log("Form submitted:", formData);
      showToast({
        type: "success",
        message: "Message sent successfully.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      showToast({
        type: "error",
        message: "Your message was not sent!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {toast && (
        <div
          className={`form-toast ${toast.type}`}
          role={toast.type === "error" ? "alert" : "status"}
          aria-live={toast.type === "error" ? "assertive" : "polite"}
        >
          {toast.type === "success" ? (
            <CheckCircle size={20} aria-hidden="true" />
          ) : (
            <XCircle size={20} aria-hidden="true" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <section className="hero" style={{ minHeight: "400px" }}>
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Let's Connect</p>
          <h1>Ready to Transform Your Workplace?</h1>
          <p
            className="hero-copy"
            style={{ marginTop: "32px", fontSize: "1.2rem" }}
          >
            Get in touch with our HR team to discuss your HR challenges and
            opportunities
          </p>
        </div>
      </section>

      <section className="cream-band">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              We&apos;d love to hear from you. Reach out for HR support using any of these
              methods:
            </p>

            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h4>Office Location</h4>
                <p>{officeAddress}</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h4>Phone</h4>
                <a href="tel:800-123-456">800-123-456</a>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </div>
            </div>

            <div className="contact-item">
              <BriefcaseBusiness size={24} />
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Hit Us Up!</h2>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your HR challenges..."
                rows={6}
              />
            </div>

            <button
              type="submit"
              className="button primary"
              style={{ width: "100%" }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </form>
        </div>

        <div className="contact-map">
          <div className="map-heading">
            <p className="eyebrow dark"></p>
            <h2>Visit Our Office</h2>
          </div>
          <iframe
            title={`Map to ${officeAddress}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="contact-band">
        <div>
          <p className="eyebrow">Looking for Something Specific?</p>
          <h2>Explore Our Services</h2>
          <p>
            Check out our HR solutions page to learn more about how we can help
            your organization.
          </p>
        </div>
        <a className="button primary light" href="/solutions">
          View Services
        </a>
      </section>
    </main>
  );
}
