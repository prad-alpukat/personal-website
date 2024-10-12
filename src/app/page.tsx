import DockMenus from "@/components/DockMenus";
import Projects from "@/components/Projects";
import ServicesHighlight from "@/components/ServicesHighlight";
import GradualSpacing from "@/components/ui/gradual-spacing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <ServicesHighlight />
      <DockMenus className="fixed bottom-12 left-1/2 -translate-x-1/2" />
    </>
  );
}

function HeroSection() {
  return (
    <section className="container max-w-screen-lg pt-10">
      <div className="mb-8">
        <GradualSpacing
          className="font-display text-center text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl md:leading-[5rem]"
          text="Praditya Aldi Syahputra"
          duration={0.75}
        />
        <ul className="list-disc pl-5 flex gap-8">
          <li>Web Developer</li>
          <li>Remote worker</li>
          <li>Based in Yogyakarta</li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Placerat elit commodo sagittis risus proin gravida.
        Lacus egestas lobortis nunc id. Consectetur nulla sit eget volutpat.
      </p>
    </section>
  );
}
