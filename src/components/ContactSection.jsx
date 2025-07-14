import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  MouseIcon,
  MousePointer,
  MousePointerClickIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSent(false);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mgvygdgr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        e.target.reset();
        setSent(true);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 scroll-mt-24"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If I caught your attention, or you have a project in mind – feel free
          to reach out. I'm always open to discuss new ideas & opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 mr-2">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <a
                  href="mailto:lucas-holm@hotmail.dk"
                  className="text-muted-foreground hover:text-primary transition-colors mt-2"
                >
                  Lucas‑holm@hotmail.dk
                </a>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <a
                  href="tel:+4550968430"
                  className="text-muted-foreground hover:text-primary transition-colors mt-2"
                >
                  +45 50 96 84 30
                </a>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <span className="text-muted-foreground mt-2">
                  Aarhus N, Denmark
                </span>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <a
                  href="https://www.linkedin.com/in/lucas-andersen-holm-b32b88256/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors mt-2"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="_subject"
                value="New message from portfolio site"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe…"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johndoe@gmail.com…"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to offer you a job…"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={cn(
                  "button w-full flex items-center justify-center gap-2 cursor-pointer",
                  submitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {submitting ? "Sending…" : "Send Message"}
                <Send size={16} className="ml-2" />
              </button>

              {sent && (
                <p className="text-center text-sm text-primary mt-4 animate-fade-in">
                  Sent!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
