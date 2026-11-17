import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

const EFFECTIVE_DATE = "November 16, 2026";
const LEGAL_NAME = "Green Core Heating & Air Inc.";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms for using the Green Core Heating & Air website and our text messaging (SMS) program, including how to opt out.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  const { address } = siteConfig;
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Terms of Service" }]} />
      <section className="py-14 sm:py-16 lg:py-20">
        <Container size="sm">
          <h1 className="heading-display text-4xl sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-muted">Effective date: {EFFECTIVE_DATE}</p>

          <div className="post-body mt-8">
            <p>
              These Terms of Service apply to your use of greencorehvac.com and to text messages you receive from{" "}
              {LEGAL_NAME} (&quot;Green Core,&quot; &quot;we,&quot; &quot;us&quot;). By using our website or opting in to
              our text messages, you agree to these terms.
            </p>

            <h2>Text messaging (SMS) terms</h2>
            <ul>
              <li>
                <strong>Program:</strong>{" "}Green Core Heating &amp; Air text messages. We send appointment confirmations
                and reminders, technician arrival updates, estimate and proposal follow-ups, replies to your questions,
                and service reminders. If you separately agree, we may also send occasional offers.
              </li>
              <li>
                <strong>How you opt in:</strong>{" "}by giving us your mobile number and agreeing to receive texts, for
                example on a website form, in our website chat, when booking online, by texting us first, or by telling
                our team.
              </li>
              <li>
                <strong>Consent is not a condition of purchase.</strong>{" "}You don&apos;t have to agree to texts to buy
                any service from us.
              </li>
              <li>
                <strong>Message frequency varies</strong>{" "}based on your appointments and conversations with us.
              </li>
              <li>
                <strong>Message and data rates may apply.</strong>{" "}Check with your mobile carrier.
              </li>
              <li>
                <strong>To opt out,</strong>{" "}reply <strong>STOP</strong>{" "}to any message. You&apos;ll get one message
                confirming you&apos;re unsubscribed, and we won&apos;t text you again unless you opt back in. You can
                also reply CANCEL, END, QUIT, or UNSUBSCRIBE.
              </li>
              <li>
                <strong>For help,</strong>{" "}reply <strong>HELP</strong>{" "}to any message, call{" "}
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>, or email{" "}
                <a href={siteConfig.emailHref}>{siteConfig.email}</a>.
              </li>
              <li>
                Mobile carriers are not liable for delayed or undelivered messages.
              </li>
              <li>
                Your mobile information is handled as described in our{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>. We never share your mobile number or text consent
                with third parties for their marketing.
              </li>
            </ul>

            <h2>Using our website</h2>
            <p>
              Our website is for general information about our heating, cooling, and water heating services. You agree
              not to misuse the site, interfere with how it works, or use it for anything unlawful.
            </p>

            <h2>Estimates, pricing, and information on this site</h2>
            <p>
              Prices, online estimates, cost guides, specials, and rebate information on this site are general
              information, not a binding quote. Your final price is set in a written estimate or proposal after we see
              your home. Offers and rebates can change or end and are subject to their own terms. Service, warranties,
              and payment are governed by the written estimate, proposal, or agreement for your job.
            </p>

            <h2>Booking and appointments</h2>
            <p>
              Online booking requests are confirmed once our team confirms the appointment. Arrival times are windows,
              and we&apos;ll let you know if we&apos;re running late or need to reschedule.
            </p>

            <h2>Third-party services and links</h2>
            <p>
              Our site uses outside services, such as online booking, chat, maps, and review sites, and may link to other
              websites. Those services have their own terms and privacy policies, and we aren&apos;t responsible for
              them.
            </p>

            <h2>Content and trademarks</h2>
            <p>
              The text, photos, logos, and design of this site belong to Green Core or are used with permission. Please
              don&apos;t copy them without our written permission.
            </p>

            <h2>Disclaimers and limitation of liability</h2>
            <p>
              The website is provided &quot;as is.&quot; To the fullest extent allowed by law, we aren&apos;t liable for
              indirect or consequential damages from using the website or text messaging program. Nothing here limits
              your rights under the written agreement for your job or under California law.
            </p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of the State of California.</p>

            <h2>Changes to these terms</h2>
            <p>We may update these terms. The effective date at the top shows when they last changed.</p>

            <h2>Contact us</h2>
            <p>
              {LEGAL_NAME}
              <br />
              {address.street}, {address.city}, {address.state} {address.zip}
              <br />
              Phone: <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              <br />
              Email: <a href={siteConfig.emailHref}>{siteConfig.email}</a>
              <br />
              {siteConfig.license}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
