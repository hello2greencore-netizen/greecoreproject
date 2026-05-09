import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function AwardSection() {
  return (
    <section className="bg-subtle py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-sm sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image
              src="/images/award/awardsectionpic.jpeg"
              alt="Green Core Heating & Air — Best of the North Bay award"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-6 sm:p-10"
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Award winner"
                title="Voted Best of the North Bay."
              />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                We&rsquo;re honored to have been recognized as a &ldquo;Best of the North Bay&rdquo; winner — an award that means a great deal to our entire team. What makes this recognition especially meaningful is that it comes from the community we serve every day. Being voted for by our customers is something we don&rsquo;t take lightly, and we&rsquo;re truly grateful for the trust and support we&rsquo;ve received.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                At Green Core Heating &amp; Air, we set out to create a better experience from start to finish, and this award is a reflection of that commitment. It represents the relationships we&rsquo;ve built, the homes we&rsquo;ve worked in, and the homeowners who continue to choose us and recommend us to others.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                We&rsquo;re thankful to be part of such a strong and supportive community, and we&rsquo;re committed to continuing to deliver the same level of care, craftsmanship, and service that earned us this recognition in the first place.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
