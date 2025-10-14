import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "What AI models does Zed use for image generation?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Zed uses cutting-edge AI models including Stable Diffusion for
            text-to-image generation, Real-ESRGAN for super resolution, and
            custom trained models for beauty enhancement and object detection.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            All processing happens in the cloud with optimized GPU
            infrastructure to ensure fast, high-quality results while keeping
            your device battery efficient.
          </p>
        </>
      ),
    },
    {
      question: "How does the free version differ from Pro?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            The free version includes 5 AI generations per day, basic editing
            tools, and background removal with 720p exports. Images include a
            small watermark.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Pro unlocks unlimited AI generations, all premium filters, 4K
            exports, no watermarks, priority processing, and advanced retouching
            tools for professional results.
          </p>
        </>
      ),
    },
    {
      question: "Can I use Zed offline?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Basic editing tools like crop, rotate, resize, and filters work
            offline. However, AI-powered features require an internet connection
            as they use cloud-based processing.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            We cache your edited images locally so you can view and share them
            even when offline.
          </p>
        </>
      ),
    },
    {
      question: "What image formats does Zed support?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Zed supports all major image formats including JPEG, PNG, WebP, and
            HEIC for input. You can export in JPEG, PNG (with transparency), or
            WebP formats.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            For vector art creation, we provide SVG exports in the Pro version.
          </p>
        </>
      ),
    },
    {
      question: "Is my data safe and private?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Absolutely. Images are processed securely in the cloud and
          automatically deleted after 24 hours. We never store, share, or use
          your images for training purposes. All data transmission is encrypted
          and we comply with GDPR and privacy regulations.
        </p>
      ),
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes! You can cancel your Pro or Team subscription at any time
            through the app settings. You&apos;ll continue to have access to Pro
            features until the end of your billing period.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            If you have questions about billing or need help, contact us at{" "}
            <a
              href={siteConfig.links.email}
              className="underline underline-offset-2"
            >
              hello@zed-ai.app
            </a>
            .
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
