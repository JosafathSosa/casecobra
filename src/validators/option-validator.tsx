// bg-blue-950 border-blue-950
// bg-rose-950 border-rose-950
// bg-zinc-950 border-zinc-950

import { PRODUCT_PRIZES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    { label: "Iphone X", value: "iphonex" },
    { label: "Iphone 11", value: "iphone11" },
    { label: "Iphone 12", value: "iphone12" },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRIZES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRIZES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRIZES.finish.smooth,
    },
    {
      label: "Textured finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRIZES.finish.textured,
    },
  ],
} as const;
