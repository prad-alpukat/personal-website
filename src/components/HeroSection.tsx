"use client";

import Image from "next/image";
import Link from "next/link";
import GradualSpacing from "@/components/ui/gradual-spacing";
import BlurFade from "@/components/ui/blur-fade";
import FlagIndo from "@/assets/flag-indonesia.png";
import Avatar from "@/assets/avatar.jpeg";
import RippleGrid from "./RippleGrid";
import Galaxy from "./Galaxy";
import Beams from "./Beams";

export default function HeroSection() {
  return (
    <section className="container max-w-screen-lg pt-10">
      <div className="flex md:gap-4 md:items-center md:flex-row flex-col mb-6">
        <Link href="/" className="hover:[&_img]:scale-90">
          <BlurFade>
            <Image
              src={Avatar}
              alt="Praditya Aldi Syahputra profile picture"
              width={100}
              height={100}
              className="rounded-full border border-neutral-200 dark:border-neutral-700 p-1 transition-all"
            />
          </BlurFade>
        </Link>
        <div>
          <GradualSpacing
            className="font-display mb-2 lg:mb-4 text-center text-xl sm:text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-3xl lg:text-5xl"
            text="Praditya Aldi Syahputra"
            duration={0.75}
          />
          <ul className="list-disc pl-5 flex flex-wrap text-neutral-700 dark:text-neutral-300">
            <BlurFade>
              <li className="mr-8 mb-1 text-sm md:text-base">Web Developer</li>
            </BlurFade>

            <BlurFade delay={0.25}>
              <li className="mr-8 mb-1 text-sm md:text-base">Remote worker</li>
            </BlurFade>

            <BlurFade delay={0.5}>
              <li className="mr-8 mb-1 text-sm md:text-base">
                <div className="flex gap-2">
                  Based in Yogyakarta{" "}
                  <Image src={FlagIndo} alt="Indonesia flag" height={24} />
                </div>
              </li>
            </BlurFade>
          </ul>
        </div>
      </div>
      <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
        <BlurFade delay={1}>
          <p>
            Hi! I'm a frontend developer who loves building clean, responsive,
            and user-friendly web interfaces. I enjoy working with technologies
            like JavaScript, React, and CSS to create seamless experiences that
            make users happy.
          </p>
        </BlurFade>

        <BlurFade delay={1.25}>
          <p>
            While my main focus is on frontend, I also have experience in
            backend development, which helps me understand the full picture of a
            web project. I'm always eager to learn new things, explore the
            latest trends in design, and work on projects that challenge me to
            grow.
          </p>
        </BlurFade>

        <BlurFade delay={1.5}>
          <p>
            Let's connect and chat about web development, design, or potential
            collaboration!
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
