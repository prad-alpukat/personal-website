import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import { Project } from "@/data/projects";

interface CardProjectsProps extends Project {
  delay: number;
}

export default function CardProjects({
  title,
  description,
  date,
  image,
  delay,
  link,
}: CardProjectsProps) {
  const isDisabled = !link;

  return (
    <div className="transition-all">
      <BlurFade className="w-full" delay={delay}>
        <div className="relative mb-3">
          <div className="aspect-video w-full relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
            <Image
              className={`object-cover ${isDisabled ? "grayscale" : ""}`}
              src={image}
              alt={`${title} project`}
              placeholder="blur"
              quality={35}
              width={400}
              loading="lazy"
              fetchPriority="high"
              priority={true}
            />
          </div>
          <p className="font-bold tracking-wide text-sm absolute bottom-3 left-3 py-0.5 px-3 rounded-full backdrop-blur line-clamp-1 bg-white/40 dark:bg-black/40 dark:text-white">
            {title}
          </p>
        </div>
        <div>
          <p
            className={`text-sm mb-2 line-clamp-2 ${
              isDisabled
                ? "text-gray-500 dark:text-gray-400"
                : "text-neutral-700 dark:text-neutral-300"
            }`}
          >
            {description}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-bold">
            {date}
          </p>
        </div>
      </BlurFade>
    </div>
  );
}
