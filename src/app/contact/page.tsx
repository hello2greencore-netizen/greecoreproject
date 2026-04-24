import { Hero } from "@/components/sections/Hero";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Green Core Heating & Air for HVAC service, installation, or a free in-home estimate in Sonoma and Marin counties.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's talk about your home."
        description="We'll get back quickly — usually same business day."
        image="/images/hero/contact.jpg"
        imageAlt="Technician answering a phone in a bright office"
        size="compact"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="lg">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow="Get in touch"
                title="Send us a message"
                description="Tell us a little about your home and what you're looking for. No hard sell — ever."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="rounded-3xl border border-border bg-subtle p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Reach us directly
                </h3>
                <dl className="mt-6 space-y-4 text-sm sm:text-base">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={siteConfig.phoneHref}
                        className="font-semibold text-brand-800 hover:underline"
                      >
                        {siteConfig.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={siteConfig.emailHref}
                        className="font-semibold text-brand-800 hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Office
                    </dt>
                    <dd className="mt-1 text-foreground">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.state}{" "}
                      {siteConfig.address.zip}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Hours
                    </dt>
                    <dd className="mt-1">
                      <ul className="space-y-1 text-foreground">
                        {siteConfig.hours.map((h) => (
                          <li
                            key={h.day}
                            className="flex justify-between gap-4"
                          >
                            <span>{h.day}</span>
                            <span className="text-muted">{h.hours}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <MapSection />
      <CTASection />
    </>
  );
}
