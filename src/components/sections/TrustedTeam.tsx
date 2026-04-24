import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const careStandards = [
  "Taking steps to protect floors, walls, and work areas",
  "Keeping tools and materials organized and contained",
  "Cleaning up thoroughly at the end of every job",
  "Being mindful of noise, pets, and daily routines",
];

export function TrustedTeam() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-subtle lg:sticky lg:top-24 lg:aspect-[4/5]">
            <Image
              src="/images/about/team.jpg"
              alt="The Green Core Heating & Air team"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our trusted team"
              title="Great service starts with great people."
              description="At Green Core Heating & Air, we know that inviting someone into your home requires trust. Every technician who represents our company is carefully selected not just for their technical ability, but for their professionalism, character, and commitment to doing the job right."
            />

            <div className="mt-10 space-y-8">
              <Card>
                <h3 className="font-display text-lg font-bold">
                  Thoroughly Vetted Professionals
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  Your safety and peace of mind come first. Every member of our
                  team undergoes comprehensive background checks and drug
                  screening before ever stepping into a customer&apos;s home.
                  This isn&apos;t a one-time box we check — it&apos;s part of
                  our ongoing commitment to maintaining a team you can trust.
                </p>
              </Card>

              <Card>
                <h3 className="font-display text-lg font-bold">
                  Trained to Care for Your Home
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  Technical skill is only part of the job. We train our team
                  to treat every home with the same level of care and respect
                  they would expect in their own. That means:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {careStandards.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500"
                      />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  We emphasize professionalism, communication, and attention
                  to detail throughout our training process, so the experience
                  is just as important as the result.
                </p>
              </Card>

              <Card>
                <h3 className="font-display text-lg font-bold">
                  A Team You Can Rely On
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  At the end of the day, our team represents everything we
                  stand for as a company. When you choose Green Core Heating
                  &amp; Air, you&apos;re not just getting a service —
                  you&apos;re getting a group of trained, vetted professionals
                  who take pride in their work and genuinely care about the
                  people they serve.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
