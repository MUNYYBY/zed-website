import FooterSection from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background text-foreground min-h-screen w-full overflow-hidden">
      <Navbar />
      {children}
      <FooterSection />
    </main>
  );
}
