import { Smartphone, Crown, Building } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Choose Your Creative Journey",
  description = "Start free and upgrade as you create. No long-term commitments, cancel anytime.",
  plans = [
    {
      name: "Free",
      icon: <Smartphone className="size-4" />,
      description: "Perfect for exploring AI image editing capabilities",
      price: 0,
      priceNote: "Always free with core features",
      cta: {
        variant: "glow",
        label: "Download Free",
        href: siteConfig.getStartedUrl,
      },
      features: [
        "5 AI generations per day",
        "Basic filters & editing tools",
        "Background removal",
        "720p image exports",
        "Watermark on exports",
      ],
      variant: "default",
      className: "hidden lg:flex",
    },
    {
      name: "Pro",
      icon: <Crown className="size-4" />,
      description: "For creators who want unlimited AI power",
      price: 9.99,
      priceNote: "per month, billed monthly",
      cta: {
        variant: "default",
        label: "Go Pro",
        href: siteConfig.pricing.pro,
      },
      features: [
        "Unlimited AI generations",
        "All premium filters & effects",
        "4K image exports",
        "No watermarks",
        "Priority processing",
        "Advanced retouching tools",
      ],
      variant: "glow-brand",
    },
    {
      name: "Team",
      icon: <Building className="size-4" />,
      description: "For businesses and creative teams",
      price: 29.99,
      priceNote: "per month, up to 10 users",
      cta: {
        variant: "default",
        label: "Start Team Plan",
        href: siteConfig.pricing.team,
      },
      features: [
        "Everything in Pro",
        "Team collaboration features",
        "Brand templates",
        "Admin dashboard",
        "Priority support",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
