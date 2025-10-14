import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms of Service - Zed",
  description:
    "Terms of Service for Zed image editing application. Review the terms and conditions for using our service.",
};

export default function TermsOfServicePage() {
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
            <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: October 14, 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                By downloading, installing, or using the Zed mobile application
                ("App") and related services (collectively, the "Service"), you
                agree to be bound by these Terms of Service ("Terms"). If you do
                not agree to these Terms, please do not use our Service.
              </p>
              <p className="text-muted-foreground">
                These Terms constitute a legally binding agreement between you
                and Zed ("Company," "we," "us," or "our").
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                2. Description of Service
              </h2>
              <p className="text-muted-foreground mb-4">
                Zed is a mobile application that provides AI-powered image
                editing tools and services, including but not limited to:
              </p>
              <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                <li>AI image generation from text prompts</li>
                <li>Beauty and portrait enhancement tools</li>
                <li>Object detection and replacement</li>
                <li>Background removal and replacement</li>
                <li>Image super-resolution and upscaling</li>
                <li>Professional filters and effects</li>
                <li>Vector art creation</li>
                <li>Essential editing tools (crop, rotate, resize)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                3. User Accounts and Subscriptions
              </h2>

              <h3 className="mb-3 text-xl font-medium">3.1 Account Creation</h3>
              <p className="text-muted-foreground mb-4">
                You may need to create an account to access certain features.
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account.
              </p>

              <h3 className="mb-3 text-xl font-medium">
                3.2 Subscription Plans
              </h3>
              <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                <li>
                  <strong>Free Plan:</strong> Limited AI generations per day,
                  basic editing tools, watermarked exports
                </li>
                <li>
                  <strong>Pro Plan:</strong> Unlimited AI generations, premium
                  features, high-resolution exports
                </li>
                <li>
                  <strong>Team Plan:</strong> All Pro features plus team
                  collaboration and admin tools
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-medium">
                3.3 Payment and Billing
              </h3>
              <p className="text-muted-foreground mb-4">
                Subscription fees are charged monthly or annually as selected.
                Payments are processed through third-party payment processors.
                You authorize us to charge your payment method for applicable
                fees.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">4. Acceptable Use</h2>

              <h3 className="mb-3 text-xl font-medium">4.1 Permitted Uses</h3>
              <p className="text-muted-foreground mb-4">
                You may use our Service for lawful personal, creative, and
                commercial purposes in compliance with these Terms.
              </p>

              <h3 className="mb-3 text-xl font-medium">4.2 Prohibited Uses</h3>
              <p className="text-muted-foreground mb-4">
                You agree NOT to use the Service to:
              </p>
              <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                <li>
                  Create, generate, or edit content that is illegal, harmful, or
                  violates others' rights
                </li>
                <li>
                  Generate deepfakes or manipulated content intended to deceive
                </li>
                <li>
                  Create content that infringes on intellectual property rights
                </li>
                <li>
                  Generate explicit, adult, or inappropriate content involving
                  minors
                </li>
                <li>
                  Create content that promotes violence, hate speech, or
                  discrimination
                </li>
                <li>
                  Attempt to reverse engineer, hack, or compromise our AI models
                </li>
                <li>
                  Use the Service for spam, fraud, or other malicious activities
                </li>
                <li>Share account credentials with others</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                5. Content and Intellectual Property
              </h2>

              <h3 className="mb-3 text-xl font-medium">5.1 Your Content</h3>
              <p className="text-muted-foreground mb-4">
                You retain ownership of any images you upload to our Service. By
                using our Service, you grant us a limited, temporary license to
                process your images solely for the purpose of providing our
                editing services.
              </p>

              <h3 className="mb-3 text-xl font-medium">
                5.2 AI-Generated Content
              </h3>
              <p className="text-muted-foreground mb-4">
                You own the AI-generated content created through our Service,
                subject to these Terms. However, AI-generated content may not be
                eligible for copyright protection in some jurisdictions.
              </p>

              <h3 className="mb-3 text-xl font-medium">
                5.3 Our Intellectual Property
              </h3>
              <p className="text-muted-foreground mb-4">
                The Service, including our AI models, algorithms, software, and
                documentation, are our proprietary property and are protected by
                intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                6. Privacy and Data Processing
              </h2>
              <p className="text-muted-foreground mb-4">
                Your privacy is important to us. Our collection and use of your
                information is governed by our
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
              <p className="text-muted-foreground">
                <strong>Important:</strong> We do not store your images
                permanently and delete them within 24 hours of processing. We do
                not use your images to train our AI models.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                7. Cancellation and Refunds
              </h2>

              <h3 className="mb-3 text-xl font-medium">7.1 Cancellation</h3>
              <p className="text-muted-foreground mb-4">
                You may cancel your subscription at any time through the App
                settings or by contacting support. Cancellation takes effect at
                the end of your current billing period.
              </p>

              <h3 className="mb-3 text-xl font-medium">7.2 Refunds</h3>
              <p className="text-muted-foreground mb-4">
                Refunds are generally not provided for digital services already
                rendered. However, we may provide refunds on a case-by-case
                basis at our sole discretion, particularly for technical issues
                or billing errors.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                8. Disclaimers and Limitation of Liability
              </h2>

              <h3 className="mb-3 text-xl font-medium">
                8.1 Service Availability
              </h3>
              <p className="text-muted-foreground mb-4">
                We strive to provide reliable service but do not guarantee
                uninterrupted access. The Service is provided "as is" without
                warranties of any kind.
              </p>

              <h3 className="mb-3 text-xl font-medium">
                8.2 AI Technology Limitations
              </h3>
              <p className="text-muted-foreground mb-4">
                AI-generated content may not always meet your expectations. We
                do not guarantee the accuracy, quality, or suitability of
                AI-generated results.
              </p>

              <h3 className="mb-3 text-xl font-medium">
                8.3 Limitation of Liability
              </h3>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted by law, we shall not be liable
                for any indirect, incidental, special, or consequential damages
                arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">9. Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may terminate or suspend your account and access to the
                Service at our sole discretion, with or without notice, for
                violations of these Terms or for any other reason.
              </p>
              <p className="text-muted-foreground">
                Upon termination, your right to use the Service ceases
                immediately, and we may delete your account data in accordance
                with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                10. Governing Law and Disputes
              </h2>
              <p className="text-muted-foreground mb-4">
                These Terms are governed by and construed in accordance with the
                laws of [Jurisdiction], without regard to conflict of law
                principles.
              </p>
              <p className="text-muted-foreground">
                Any disputes arising from these Terms or your use of the Service
                shall be resolved through binding arbitration or in the courts
                of [Jurisdiction].
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                11. Changes to Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                We may modify these Terms at any time by posting the updated
                Terms in the App and on our website. Your continued use of the
                Service after changes constitutes acceptance of the new Terms.
              </p>
              <p className="text-muted-foreground">
                Material changes will be communicated through the App or via
                email to registered users.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                12. Contact Information
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-card rounded-lg border p-4">
                <p className="text-foreground mb-2">
                  Email:{" "}
                  <a
                    href={siteConfig.links.email}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p className="text-foreground mb-2">
                  Website:{" "}
                  <a
                    href={siteConfig.url}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.url}
                  </a>
                </p>
                <p className="text-foreground">
                  Support: Available through the app or website
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">13. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms is found to be unenforceable or
                invalid, the remaining provisions will continue in full force
                and effect.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
