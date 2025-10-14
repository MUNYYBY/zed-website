import React from "react";
import { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy - Zed",
  description:
    "Privacy Policy for Zed image editing application. Learn how we protect and handle your data.",
};

export default function PrivacyPolicyPage() {
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
            <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: October 14, 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                At Zed ("we," "our," or "us"), we respect your privacy and are
                committed to protecting your personal data. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our mobile application Zed and related
                services (collectively, the "Service").
              </p>
              <p className="text-muted-foreground">
                By using our Service, you agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                2. Information We Collect
              </h2>

              <h3 className="mb-3 text-xl font-medium">
                2.1 Personal Information
              </h3>
              <p className="text-muted-foreground mb-4">
                We may collect the following personal information when you use
                our Service:
              </p>
              <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                <li>Email address (for account creation and support)</li>
                <li>
                  Device information (device type, operating system, app
                  version)
                </li>
                <li>
                  Usage data (features used, session duration, error logs)
                </li>
                <li>
                  Payment information (processed securely through third-party
                  payment processors)
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-medium">
                2.2 Images and Content
              </h3>
              <p className="text-muted-foreground mb-4">
                When you use our AI image editing features, we temporarily
                process your images in the cloud to provide our services. We do
                not store, share, or use your images for any purpose other than
                providing the requested editing service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                <li>Providing and maintaining our Service</li>
                <li>Processing AI image editing requests</li>
                <li>Managing user accounts and subscriptions</li>
                <li>Improving our AI models and algorithms</li>
                <li>Providing customer support</li>
                <li>Sending important service notifications</li>
                <li>Ensuring security and preventing fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                4. Image Processing and Storage
              </h2>
              <p className="text-muted-foreground mb-4">
                <strong>Important:</strong> We take your privacy seriously when
                it comes to your images:
              </p>
              <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                <li>
                  Images are processed in secure cloud servers and automatically
                  deleted within 24 hours
                </li>
                <li>We never store your images permanently on our servers</li>
                <li>
                  We do not use your images to train AI models or for any other
                  purpose
                </li>
                <li>Images are encrypted during transmission and processing</li>
                <li>
                  Access to processing servers is strictly limited to authorized
                  personnel
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                5. Information Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties, except in the following
                circumstances:
              </p>
              <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>
                  To protect our rights, property, or safety, or that of our
                  users
                </li>
                <li>
                  With trusted service providers who assist us in operating our
                  Service (under strict confidentiality agreements)
                </li>
                <li>
                  In connection with a merger, acquisition, or sale of assets
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">6. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal data:
              </p>
              <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                <li>End-to-end encryption for image transmission</li>
                <li>
                  Secure cloud infrastructure with regular security audits
                </li>
                <li>Access controls and authentication measures</li>
                <li>Regular security updates and monitoring</li>
                <li>Compliance with industry-standard security practices</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">7. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                <li>Access: Request access to your personal data</li>
                <li>Rectification: Request correction of inaccurate data</li>
                <li>Erasure: Request deletion of your personal data</li>
                <li>
                  Portability: Request a copy of your data in a structured
                  format
                </li>
                <li>Objection: Object to processing of your personal data</li>
                <li>Restriction: Request restriction of processing</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise these rights, please contact us at{" "}
                <a
                  href={`mailto:${siteConfig.links.email.replace("mailto:", "")}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                8. Children's Privacy
              </h2>
              <p className="text-muted-foreground mb-4">
                Our Service is not intended for children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13. If we become aware that a child under 13 has provided
                us with personal information, we will take steps to delete such
                information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                9. International Data Transfers
              </h2>
              <p className="text-muted-foreground mb-4">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your data in accordance with this
                Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please
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
                <p className="text-foreground">
                  Website:{" "}
                  <a
                    href={siteConfig.url}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.url}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
