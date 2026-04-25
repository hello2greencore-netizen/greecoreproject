import { Hero } from "@/components/sections/Hero";
import { CoreValuesSection } from "@/components/sections/CoreValues";
import { TrustedTeam } from "@/components/sections/TrustedTeam";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us — Local HVAC Experts in Petaluma, CA",
  description:
    "Green Core Heating & Air was founded to deliver a better HVAC experience in Sonoma & Marin. Licensed, locally owned, and design-first on every job.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="A better HVAC experience, start to finish."
        description="Thoughtful design, energy-efficient solutions, and high-quality workmanship — on every project."
        image="/images/hero/about.jpg"
        imageAlt="Green Core Heating & Air team standing in front of a service van"
        size="compact"
        primaryCta={{ label: "Meet the team", href: "#team" }}
        secondaryCta={{ label: "Our services", href: "/services" }}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="About Green Core Heating & Air"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <RevealGroup
            className="mt-10 space-y-5 text-base leading-relaxed text-muted sm:text-lg"
            stagger={0.06}
          >
            <RevealItem>
              <p>
                Green Core Heating &amp; Air was founded with a simple goal: to
                deliver a better experience for homeowners from start to finish.
                Too often, HVAC projects feel rushed, confusing, or focused
                more on selling equipment than actually solving problems. We set
                out to change that by creating a process built around clear
                communication, thoughtful design, and high-quality workmanship —
                so every customer feels confident and taken care of from the
                first conversation to the final walkthrough.
              </p>
            </RevealItem>
            <RevealItem>
              <p>
                From day one, our focus has been on energy-efficient solutions
                for heating, cooling, and water heating that not only meet
                today&apos;s comfort expectations, but are also built for the
                future. As homes evolve and energy standards shift, we believe
                systems should be designed with long-term performance,
                sustainability, and adaptability in mind. Whether it&apos;s
                high-efficiency heat pumps or smarter system design, we help
                homeowners make choices that reduce energy use while improving
                comfort.
              </p>
            </RevealItem>
            <RevealItem>
              <p>
                At our CORE, we are efficient — not just in the systems we
                install, but in how we operate as a company. We respect your
                time, streamline the process, and deliver solutions that are
                thoughtfully designed to perform without waste or excess.
                It&apos;s this commitment to efficiency, combined with our
                focus on doing things the right way, that defines who we are
                and how we serve our customers every day.
              </p>
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      <CoreValuesSection />

      <div id="team">
        <TrustedTeam />
      </div>

      <CTASection
        title="Let's talk about your home."
        description="Every home is different. Share a few details and we'll come back with honest options."
      />
    </>
  );
}
