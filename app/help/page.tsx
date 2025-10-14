import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Help & Support - Zed",
  description:
    "Get help and support for Zed image editing application. Find answers to common questions and contact our support team.",
};

export default function HelpPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full overflow-hidden">
      <Section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8">
            <Link
              href="/"
              className="text-primary hover:text-primary/80 mb-4 inline-block text-sm font-medium"
            >
              ← Back to Home
            </Link>
            <h1 className="mb-4 text-4xl font-bold">Help & Support</h1>
            <p className="text-muted-foreground text-lg">
              Get help with Zed and find answers to common questions
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="mb-3 text-xl font-semibold">📧 Contact Support</h2>
              <p className="text-muted-foreground mb-4">
                Need personalized help? Our support team is here to assist you.
              </p>
              <Button asChild>
                <a href={siteConfig.links.email}>Contact Us</a>
              </Button>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <h2 className="mb-3 text-xl font-semibold">💬 Community</h2>
              <p className="text-muted-foreground mb-4">
                Join our community to share tips and get help from other users.
              </p>
              <Button variant="outline" asChild>
                <a href={siteConfig.links.twitter}>Join Community</a>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="mb-6 text-2xl font-semibold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-card rounded-lg border p-6">
                  <h3 className="mb-2 text-lg font-medium">
                    How do I upgrade to Pro?
                  </h3>
                  <p className="text-muted-foreground">
                    Open the Zed app, go to Settings {">"} Subscription, and
                    choose your preferred plan. You can upgrade or cancel
                    anytime.
                  </p>
                </div>

                <div className="bg-card rounded-lg border p-6">
                  <h3 className="mb-2 text-lg font-medium">
                    Are my images stored on your servers?
                  </h3>
                  <p className="text-muted-foreground">
                    No, we do not permanently store your images. They are
                    processed in the cloud and automatically deleted within 24
                    hours for your privacy and security.
                  </p>
                </div>

                <div className="bg-card rounded-lg border p-6">
                  <h3 className="mb-2 text-lg font-medium">
                    Can I use Zed offline?
                  </h3>
                  <p className="text-muted-foreground">
                    Basic editing tools work offline, but AI-powered features
                    require an internet connection as they use cloud-based
                    processing for the best results.
                  </p>
                </div>

                <div className="bg-card rounded-lg border p-6">
                  <h3 className="mb-2 text-lg font-medium">
                    What image formats are supported?
                  </h3>
                  <p className="text-muted-foreground">
                    Zed supports JPEG, PNG, WebP, and HEIC for input. You can
                    export in JPEG, PNG, or WebP formats. Pro users also get SVG
                    exports for vector art.
                  </p>
                </div>

                <div className="bg-card rounded-lg border p-6">
                  <h3 className="mb-2 text-lg font-medium">
                    How do I cancel my subscription?
                  </h3>
                  <p className="text-muted-foreground">
                    Go to App Settings {">"} Subscription {">"} Manage
                    Subscription, then follow the cancellation steps. You'll
                    keep Pro features until the end of your billing period.
                  </p>
                </div>

                <div className="bg-card rounded-lg border p-6">
                  <h3 className="mb-2 text-lg font-medium">
                    Is there a free trial?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! The free version includes 5 AI generations per day and
                    basic editing tools. You can try all features with some
                    limitations before upgrading.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-semibold">Getting Started</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-card rounded-lg border p-6">
                  <h3 className="mb-3 text-lg font-medium">
                    🎨 AI Image Generation
                  </h3>
                  <ol className="text-muted-foreground list-inside list-decimal space-y-2">
                    <li>Tap the "Generate" button</li>
                    <li>Enter a detailed text prompt</li>
                    <li>Choose your style preferences</li>
                    <li>Tap "Create" and wait for results</li>
                  </ol>
                </div>

                <div className="bg-card rounded-lg border p-6">
                  <h3 className="mb-3 text-lg font-medium">
                    ✨ Beauty Enhancement
                  </h3>
                  <ol className="text-muted-foreground list-inside list-decimal space-y-2">
                    <li>Select or capture a portrait photo</li>
                    <li>Tap the "Beauty" tool</li>
                    <li>Adjust enhancement levels</li>
                    <li>Save your enhanced photo</li>
                  </ol>
                </div>

                <div className="bg-card rounded-lg border p-6">
                  <h3 className="mb-3 text-lg font-medium">
                    🖼️ Background Removal
                  </h3>
                  <ol className="text-muted-foreground list-inside list-decimal space-y-2">
                    <li>Import your photo</li>
                    <li>Tap "Background" then "Remove"</li>
                    <li>AI automatically detects the subject</li>
                    <li>Export with transparent background</li>
                  </ol>
                </div>

                <div className="bg-card rounded-lg border p-6">
                  <h3 className="mb-3 text-lg font-medium">
                    🔍 Super Resolution
                  </h3>
                  <ol className="text-muted-foreground list-inside list-decimal space-y-2">
                    <li>Select a low-resolution image</li>
                    <li>Tap "Enhance" then "Super Resolution"</li>
                    <li>Choose upscaling factor (2x or 4x)</li>
                    <li>Wait for AI processing to complete</li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-semibold">Troubleshooting</h2>

              <div className="space-y-4">
                <div className="bg-card rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">App crashes or freezes</h3>
                  <p className="text-muted-foreground text-sm">
                    Try restarting the app, ensure you have enough storage
                    space, and update to the latest version.
                  </p>
                </div>

                <div className="bg-card rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">AI processing is slow</h3>
                  <p className="text-muted-foreground text-sm">
                    Processing time depends on your internet connection and
                    server load. Pro users get priority processing.
                  </p>
                </div>

                <div className="bg-card rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">
                    Can't save or export images
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Check app permissions for photo library access in your
                    device settings.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-lg border p-8 text-center">
              <h2 className="mb-4 text-xl font-semibold">Still need help?</h2>
              <p className="text-muted-foreground mb-6">
                Our support team is ready to help you with any questions or
                issues.
              </p>
              <Button asChild>
                <a href={siteConfig.links.email}>Contact Support Team</a>
              </Button>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
