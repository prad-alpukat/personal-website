import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import { Project } from "@/data/projects";

interface CardProjectsProps extends Project {
  delay: number;
}

export default function CardProjects({ title, description, date, image, delay, link }: CardProjectsProps) {
  const isDisabled = !link;
  
  return (
    <div className="transition-all">
      <BlurFade className="w-full" delay={delay}>
        <div className="relative mb-3">
          <Image
            className={`aspect-video object-cover rounded-lg border ${isDisabled ? 'grayscale' : ''}`}
            src={image}
            alt={`${title} project image`}
          />
          <h4 className="font-bold tracking-wide text-sm absolute bottom-3 left-3 py-0.5 px-3 rounded-full backdrop-blur line-clamp-1 bg-white/40">
            {title}
          </h4>
          {isDisabled && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
              <span className="bg-gray-800/80 text-white text-xs px-2 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
          )}
        </div>
        <div>
          <p className={`text-sm mb-2 line-clamp-2 ${isDisabled ? 'text-gray-500' : ''}`}>
            {description}
          </p>
          <p className="text-gray-500 text-xs font-bold">{date}</p>
        </div>
      </BlurFade>
    </div>
  );
}
