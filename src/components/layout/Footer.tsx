import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";

type FooterLinkGroupProps = {
  title: string;
  links: { label: string; href: string }[];
};

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/90 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 bg-brand-900 text-white">
      <Container size="xl" className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/90">
              <p>
                <a href={siteConfig.phoneHref} className="hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={siteConfig.emailHref} className="hover:underline">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                {siteConfig.address.street},{" "}
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
            </div>
          </div>

          <FooterLinkGroup title="Company" links={footerNav.company} />
          <FooterLinkGroup title="Services" links={footerNav.services} />
          <FooterLinkGroup title="Service Areas" links={footerNav.areas} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved. {siteConfig.license}.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/testimonials" className="hover:text-white">
              Reviews
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
