import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import AI from "../../logos/ai";
import AWS from "../../logos/aws";
import Flutter from "../../logos/flutter";
import NodeJS from "../../logos/nodejs";
import Python from "../../logos/python";
import { Badge } from "../../ui/badge";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Powered by cutting-edge technology",
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      Built with AI • Last updated: {siteConfig.stats.updated}
    </Badge>
  ),
  logos = [
    <Logo key="flutter" image={Flutter} name="Flutter" version="3.24" />,
    <Logo key="python" image={Python} name="Python" version="3.11" />,
    <Logo key="nodejs" image={NodeJS} name="Node.js" version="20.x" />,
    <Logo key="aws" image={AWS} name="AWS" badge="Cloud" />,
    <Logo key="ai" image={AI} name="AI Models" badge="New" />,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
