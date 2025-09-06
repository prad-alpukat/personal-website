import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";
import { projects } from "@/data/projects";
import BlurFade from "@/components/ui/blur-fade";

export default function Projects() {

  return (
    <section className="container max-w-screen-lg pt-20">
      {/* title */}
      <BlurFade delay={1} className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-3xl font-bold text-neutral-700 mb-1">Projects</h3>
          <p>Showcasing some my completed projects</p>
        </div>
        <Link
          href="https://drive.google.com/file/d/1l97WXQGQg5YzaCqqWj5RTWkUYY2m6eIb/view?usp=sharing"
          target="_blank"
        >
          <ShinyButton>Resume</ShinyButton>
        </Link>
      </BlurFade>

      {/* portofolios */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index}>
            {project.link ? (
              <Link href={project.link} target="_blank" className="[&>div]:hover:scale-90">
                <CardProjects
                  title={project.title}
                  description={project.description}
                  date={project.date}
                  image={project.image}
                  delay={index * 0.25 + 1}
                  link={project.link}
                />
              </Link>
            ) : (
              <div className="cursor-not-allowed opacity-75">
                <CardProjects
                  title={project.title}
                  description={project.description}
                  date={project.date}
                  image={project.image}
                  delay={index * 0.25 + 1}
                  link={project.link}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectsProps extends Project {
  delay: number;
}

function CardProjects({ title, description, date, image, delay, link }: ProjectsProps) {
  const isDisabled = !link;
  
  return (
    <div className="transition-all">
      <BlurFade className="w-full " delay={delay}>
        <div className="relative mb-3">
          <Image
            className={`aspect-video object-cover rounded-lg border ${isDisabled ? 'grayscale' : ''}`}
            src={image}
            alt="random image"
          />
          <h4 className={`font-bold tracking-wide text-sm absolute bottom-3 left-3 py-0.5 px-3 rounded-full backdrop-blur line-clamp-1`}>
            {title}
          </h4>
        </div>
        <div>
          <p className={`text-sm mb-2 line-clamp-2`}>
            {description}
          </p>
          <p className="text-gray-500 text-xs font-bold">{date}</p>
        </div>
      </BlurFade>
    </div>
  );
}
