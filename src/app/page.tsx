import DockMenus from "@/components/DockMenus";
import Projects from "@/components/Projects";
import ServicesHighlight from "@/components/ServicesHighlight";
import GradualSpacing from "@/components/ui/gradual-spacing";
import FlagIndo from "@/assets/flag-indonesia.png";
import Image from "next/image";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

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
      <div className="mb-4">
        <GradualSpacing
          className="font-display mb-0 text-center text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl md:leading-[5rem]"
          text="Praditya Aldi Syahputra"
          duration={0.75}
        />
        <ul className="list-disc pl-5 flex gap-8">
          <li>Web Developer</li>
          <li>Remote worker</li>
          <li>
            <div className="flex gap-2">
              Based in Yogyakarta <Image src={FlagIndo} alt="indo flag" height={24} />
            </div>
          </li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Placerat elit commodo sagittis risus proin gravida.
        Lacus egestas lobortis nunc id. Consectetur nulla sit eget volutpat.
      </p>
    </section>
  );
}
