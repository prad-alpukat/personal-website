import DockMenus from "@/components/DockMenus";
import Projects from "@/components/Projects";
import ServicesHighlight from "@/components/ServicesHighlight";
import GradualSpacing from "@/components/ui/gradual-spacing";
import FlagIndo from "@/assets/flag-indonesia.png";
import Image from "next/image";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";
import Avatar from "@/assets/avatar.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <ServicesHighlight />
      <DockMenus className="fixed bottom-12 left-1/2 -translate-x-1/2" />
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={0.5}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(60vw_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[100vh] skew-y-12 w-full -z-10"
        )}
      />
    </>
  );
}

function HeroSection() {
  return (
    <section className="container max-w-screen-lg pt-10">
      <div className="flex md:gap-4 md:items-center md:flex-row flex-col mb-6">
        <Link href="/" className="hover:[&_img]:scale-90">
          <BlurFade>
            <Image
              src={Avatar}
              alt="hero image"
              width={100}
              height={100}
              className="rounded-full border p-1 transition-all"
            />
          </BlurFade>
        </Link>
        <div>
          <GradualSpacing
            className="font-display mb-2 lg:mb-4 text-center text-xl sm:text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-3xl lg:text-5xl"
            text="Praditya Aldi Syahputra"
            duration={0.75}
          />
          <ul className="list-disc pl-5 flex flex-wrap">
            <BlurFade>
              <li className="mr-8 mb-1 text-sm md:text-base">Web Developer</li>
            </BlurFade>

            <BlurFade delay={0.25}>
              <li className="mr-8 mb-1 text-sm md:text-base">Remote worker</li>
            </BlurFade>

            <BlurFade delay={0.5}>
              <li className="mr-8 mb-1 text-sm md:text-base">
                <div className="flex gap-2">
                  Based in Yogyakarta <Image src={FlagIndo} alt="indo flag" height={24} />
                </div>
              </li>
            </BlurFade>
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <BlurFade delay={1}>
          <p>
            Hi! I’m a frontend developer who loves building clean, responsive, and user-friendly web
            interfaces. I enjoy working with technologies like JavaScript, React, and CSS to create
            seamless experiences that make users happy.
          </p>
        </BlurFade>

        <BlurFade delay={1.25}>
          <p>
            While my main focus is on frontend, I also have experience in backend development, which
            helps me understand the full picture of a web project. I’m always eager to learn new
            things, explore the latest trends in design, and work on projects that challenge me to
            grow.
          </p>
        </BlurFade>

        <BlurFade delay={1.5}>
          <p>Let’s connect and chat about web development, design, or potential collaboration!</p>
        </BlurFade>
      </div>
    </section>
  );
}
