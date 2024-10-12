import { MagicCard } from "@/components/ui/magic-card";

export default function ServicesHighlight() {
  return (
    <section className="container max-w-screen-lg pt-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-neutral-700">Services</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fugit.</p>
      </div>
      <div className={"flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"}>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center text-4xl px-10 text-center"
          gradientColor={"#7e95fc44"}
        >
          Website Development
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center text-4xl px-10 text-center"
          gradientColor={"#7e95fc44"}
        >
          UI UX Design
        </MagicCard>
      </div>
    </section>
  );
}
