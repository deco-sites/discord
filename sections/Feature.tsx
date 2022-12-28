import type { Image } from "$live/std/ui/types/Image.ts";

export interface Props {
  image: Image;
  title: string;
  description: string;
  type: 1 | 2;
}

export default function Feature({ image, title, description }: Props) {
  return (
    <div class="py-24 flex justify-center items-center gap-16">
      <img src={image} alt="" />

      <div class="max-w-[380px]">
        <h2 class="mb-6 text-5xl font-bold">{title}</h2>
        <p class="text-lg">{description}</p>
      </div>
    </div>
  );
}
