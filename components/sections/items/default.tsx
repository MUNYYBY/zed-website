import {
  BrushIcon,
  ImageIcon,
  SparklesIcon,
  WandIcon,
  ZapIcon,
  EyeIcon,
  PaletteIcon,
  ScissorsIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Professional AI Image Editing Features",
  items = [
    {
      title: "AI Image Generation",
      description:
        "Create stunning visuals from text prompts using advanced AI models",
      icon: <SparklesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Beauty & Portrait Tools",
      description:
        "Auto-enhance facial features, remove blemishes, brighten eyes",
      icon: <EyeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Smart Object Removal",
      description: "Detect and replace objects seamlessly with AI precision",
      icon: <WandIcon className="size-5 stroke-1" />,
    },
    {
      title: "Background Magic",
      description: "Remove, replace, or blur backgrounds with one tap",
      icon: <ImageIcon className="size-5 stroke-1" />,
    },
    {
      title: "Super Resolution",
      description: "Upscale images up to 4x without quality loss using AI",
      icon: <ZapIcon className="size-5 stroke-1" />,
    },
    {
      title: "Professional Filters",
      description: "15+ cinematic filters with real-time preview",
      icon: <PaletteIcon className="size-5 stroke-1" />,
    },
    {
      title: "Vector Art Creation",
      description: "Transform photos into stunning vector illustrations",
      icon: <BrushIcon className="size-5 stroke-1" />,
    },
    {
      title: "Essential Editing",
      description: "Crop, rotate, resize with intuitive gesture controls",
      icon: <ScissorsIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
