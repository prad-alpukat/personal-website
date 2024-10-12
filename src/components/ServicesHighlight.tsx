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
        <h2 className="text-3xl font-bold text-neutral-700">Services</h2>
        <p>These services are what I can provide</p>
      </div>
      <div className={"flex h-[500px] w-full flex-col gap-4 md:h-[250px] md:flex-row"}>
        <MagicCard
          className="flex-col items-center justify-center text-xl px-10 text-center gap-3"
          gradientColor={"#7e95fc55"}
        >
          <IllustrationIcons className="mx-auto w-36" />
          <p>Website Development</p>
        </MagicCard>
        <MagicCard
          className="flex-col items-center justify-center text-xl px-10 text-center gap-3"
          gradientColor={"#7e95fc55"}
        >
          <DesignerIcon className="mx-auto w-36" />
          <p>UI UX Design</p>
        </MagicCard>
      </div>
    </section>
  );
}
