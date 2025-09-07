"use client";

import { MagicCard } from "@/components/ui/magic-card";
import IllustrationIcons from "./icons/IllustrationsIcon";
import DesignerIcon from "./icons/DesignerIcon";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesHighlight() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="container max-w-screen-lg pt-20" data-aos="fade-up">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-neutral-700 dark:text-neutral-200">
          Services
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          These services are what I can provide
        </p>
      </div>
      <div
        className={
          "flex h-[500px] w-full flex-col gap-4 md:h-[250px] md:flex-row"
        }
      >
        <MagicCard
          className="flex-col items-center flex relative justify-center text-xl px-10 text-center gap-3 text-neutral-700"
          gradientColor={"#ffffff25"}
        >
          <div className="relative w-36 mx-auto">
            <div className="absolute h-1/2 left-[10px] top-[10px] aspect-square bg-white rounded-full overflow-hidden">
              <IllustrationIcons className="mx-auto w-36 z-10 text-neutral-800 absolute -left-[10px] -top-[10px]" />
            </div>
            <IllustrationIcons className="w-full" />
          </div>
          <p className="text-white">Website Development</p>
        </MagicCard>
        <MagicCard
          className="relative flex-col items-center justify-center text-xl px-10 text-center gap-3 text-neutral-700"
          gradientColor={"#ffffff25"}
        >
          <div className="relative w-36 mx-auto">
            <div className="absolute h-1/2 left-[20px] top-[20px] aspect-square bg-white rounded-full overflow-hidden z-20">
              <DesignerIcon className="mx-auto w-36 -left-[20px] -top-[20px] z-10 text-neutral-800 absolute" />
            </div>
            <DesignerIcon className="w-full" />
          </div>
          <p className="text-white">UI UX Design</p>
        </MagicCard>
      </div>
    </section>
  );
}
