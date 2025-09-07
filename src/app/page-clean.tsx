import DockMenus from "@/components/DockMenus";
import Projects from "@/components/Projects";
import ServicesHighlight from "@/components/ServicesHighlight";
import HeroSection from "@/components/HeroSection";
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
