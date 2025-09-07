import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";
import { projects } from "@/data/projects";
import BlurFade from "@/components/ui/blur-fade";
import CardProjects from "@/components/CardProjects";

export default function Projects() {
  return (
    <section className="container max-w-screen-lg pt-20">
      {/* title */}
      <BlurFade delay={1} className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-3xl font-bold text-neutral-700 dark:text-neutral-200 mb-1">
            Projects
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Here are the projects I can showcase
          </p>
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
              <Link
                href={project.link}
                target="_blank"
                className="[&>div]:hover:scale-90"
              >
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
