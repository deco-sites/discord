import BannerBg from "../components/BannerBg.tsx";

export interface Props {
  title: string;
  description: string;
}

export default function Banner({ title, description }: Props) {
  return (
    <div class="w-full max-w-full min-h-[626px] overflow-hidden bg-[#404eed] relative">
      <BannerBg />

      <div class="max-w-[820px] flex flex-col items-center absolute top-1/2 left-1/2 -translate-1/2 z-20">
        <strong class="mb-4 text-white text-7xl text-center font-normal font-luckiest">
          {title}
        </strong>

        <strong class="text-white text-xl text-center font-normal">
          {description}
        </strong>

        <div class="mt-6 flex items-center gap-4">
          <a
            class="h-14 px-8 rounded-[28px] text-lg font-medium bg-white flex items-center gap-2"
            href="/"
          >
            <img
              class="max-w-[28px]"
              src="/icons/download.svg"
              alt="Download Discord"
            />
            Download for Linux
          </a>

          <a
            class="h-14 px-8 rounded-[32px] bg-[#23272a] text-white text-lg font-medium flex items-center transition-colors hover:bg-[hsl(220,7.7%,22.9%)]"
            href="/"
          >
            Open Discord in your browser
          </a>
        </div>
      </div>
    </div>
  );
}
