import { TextHoverEffectDemo } from "@/components/HoverTextEffect/HoverTextEffect";
import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";

export default function Home() {
  return (
    <>
      <Hero />
      <TextHoverEffectDemo />
      {/* <Logos /> */}
      <Items />
      <Stats />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
