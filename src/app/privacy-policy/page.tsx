import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

const EFFECTIVE_DATE = "November 16, 2026";
const LEGAL_NAME = "Green Core Heating & Air Inc.";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Green Core Heating & Air collects, uses, and protects your information, including text message (SMS) privacy.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const { address } = siteConfig;
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Privacy Policy" }]} />
      <section className="py-14 sm:py-16 lg:py-20">
        <Container size="sm">
          <h1 className="heading-display text-4xl sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted">Effective date: {EFFECTIVE_DATE}</p>

          <div className="post-body mt-8">
            <p>
              This Privacy Policy explains how {LEGAL_NAME} (&quot;Green Core,&quot; &quot;we,&quot; &quot;us&quot;) collects,
              uses, shares, and protects information when you visit greencorehvac.com, contact us, book service, or
              receive text messages from us.
            </p>

            <h2>Text messaging (SMS) privacy</h2>
            <p>
              <strong>
                No mobile information will be shared with third parties or affiliates for marketing or promotional
                purposes. Text messaging originator opt-in data and consent are not shared with any third parties.
              </strong>{" "}
              We use your mobile number only to send the messages you agreed to receive and to run our text messaging
              service. Information may be shared with the service providers that deliver our messages (such as our
              messaging platform and phone carriers) only as needed to send them.
            </p>
            <p>
              You can stop text messages at any time by replying <strong>STOP</strong>. Reply <strong>HELP</strong>{" "}for
              help. See our <Link href="/terms-of-service">Terms of Service</Link>{" "}for full text messaging terms.
            </p>

            <h2>Information we collect</h2>
            <ul>
              <li>
                <strong>Information you give us:</strong>{" "}your name, phone number, email address, service address, details
                about your home and equipment, photos you send, messages, and appointment details.
              </li>
              <li>
                <strong>Payment information:</strong>{" "}payments are handled by our payment and scheduling providers. We
                don&apos;t store full card numbers on our website.
              </li>
              <li>
                <strong>Information collected automatically:</strong>{" "}when you visit our website, we and our analytics and
                advertising tools collect device and usage information such as IP address, browser type, pages viewed,
                and how you arrived at our site, using cookies and similar technologies.
              </li>
            </ul>

            <h2>How we use your information</h2>
            <ul>
              <li>To schedule, provide, and follow up on service, estimates, and installations.</li>
              <li>To send appointment confirmations, reminders, updates, and replies by phone, email, or text.</li>
              <li>To send offers or service reminders, only where you have agreed to receive them.</li>
              <li>To process payments, financing applications you start, warranties, and rebate paperwork.</li>
              <li>To improve our website and services and measure how our advertising performs.</li>
              <li>To meet legal obligations and protect our customers, team, and business.</li>
            </ul>

            <h2>How we share information</h2>
            <p>We do not sell your personal information. We share it only:</p>
            <ul>
              <li>
                With service providers that help us run our business, such as scheduling and invoicing software, online
                booking, payment processing, our website chat and messaging platform, email, and website analytics and
                advertising tools (for example Google and Microsoft). They may use it only to provide services to us.
              </li>
              <li>
                With equipment manufacturers, distributors, utilities, or rebate programs when needed for your warranty,
                permit, or rebate, and with financing providers only if you choose to apply.
              </li>
              <li>When required by law, or to protect the rights and safety of our customers, team, or business.</li>
            </ul>
            <p>
              None of this sharing includes your mobile number or text messaging consent for anyone else&apos;s marketing.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              Our website uses cookies and similar tools, including Google Analytics, Google Tag Manager, Google Ads, and
              Microsoft Clarity, to understand how visitors use the site and to measure advertising. You can manage
              cookies through our cookie banner, your browser settings, or Google&apos;s ad settings. Our site does not
              currently respond to browser &quot;Do Not Track&quot; signals.
            </p>

            <h2>How long we keep information</h2>
            <p>
              We keep customer and job records as long as needed to provide service, honor warranties, and meet legal,
              tax, and licensing requirements, then delete or de-identify them.
            </p>

            <h2>How we protect information</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards. No method of storage or transmission
              is completely secure, so we can&apos;t guarantee absolute security.
            </p>

            <h2>Your choices and California privacy rights</h2>
            <ul>
              <li>Reply STOP to any text to stop text messages.</li>
              <li>Use the unsubscribe link in any marketing email.</li>
              <li>
                Contact us to review, correct, or delete the personal information we have about you. California
                residents may also ask what personal information we have shared with third parties for their direct
                marketing purposes; we don&apos;t share it for that purpose.
              </li>
            </ul>

            <h2>Children&apos;s privacy</h2>
            <p>
              Our website and services are meant for adults. We don&apos;t knowingly collect personal information from
              children under 13.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The effective date at the top shows when it last changed.
            </p>

            <h2>Contact us</h2>
            <p>
              {LEGAL_NAME}
              <br />
              {address.street}, {address.city}, {address.state} {address.zip}
              <br />
              Phone: <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              <br />
              Email: <a href={siteConfig.emailHref}>{siteConfig.email}</a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
