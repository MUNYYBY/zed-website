import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Zed from "../../logos/zed";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <Zed />,
  name = "Zed",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Features", href: siteConfig.url + "#features" },
        { text: "Pricing", href: siteConfig.url + "#pricing" },
        { text: "FAQ", href: siteConfig.url + "#faq" },
      ],
    },
    {
      title: "Download",
      links: [
        { text: "Google Play", href: siteConfig.links.playstore },
        { text: "App Store", href: siteConfig.links.appstore },
        { text: "Beta Testing", href: siteConfig.url + "/beta" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: siteConfig.url + "/help" },
        { text: "Contact Us", href: siteConfig.links.email },
        { text: "Twitter", href: siteConfig.links.twitter },
        { text: "GitHub", href: siteConfig.links.github },
      ],
    },
  ],
  copyright = "© 2025 Zed AI. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: siteConfig.url },
    { text: "Terms of Service", href: siteConfig.url },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
