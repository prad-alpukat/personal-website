import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";

import Bakoelkarcis from "@/assets/bakoelkarcis-banner.jpg";
import Gunasehat from "@/assets/gunasehat-banner.jpg";
import Neuversity from "@/assets/neuversity-banner.jpg";
import Krasan from "@/assets/krasanvilla-banner.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Neuversity",
      description: "Mentor Frontend Development di Neuversity",
      date: "Jun 2023 - Present",
      image: Neuversity,
      link: "https://neuversity.id",
    },
    {
      title: "Bakoelkarcis",
      description: "Frontend Developer untuk Website Bakoelkarcis",
      date: "August 1, 2023",
      image: Bakoelkarcis,
      link: "https://bakoelkarcis.com",
    },
    {
      title: "Krasanvilla",
      description: "Web Developer untuk Website Krasanvilla",
      date: "June 1, 2023",
      image: Krasan,
      link: "https://krasanvilla.com",
    },
    {
      title: "Gunasehat",
      description: "Frontend Web Developer untuk website Gunasehat.",
      date: "April 1, 2022",
      image: Gunasehat,
      link: "https://gunasehat.com",
    },
  ];

  return (
    <section className="container max-w-screen-lg pt-20">
      {/* title */}
      <BlurFade delay={1} className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-3xl font-bold text-neutral-700 mb-1">Projects</h3>
          <p>Showcasing some my completed projects</p>
        </div>
        <Link
          href="https://drive.google.com/file/d/10jbjDLHBGFNiC1lTMkZ0aE6pBnGDiAtz/view?usp=sharings"
          target="_blank"
        >
          <ShinyButton>Resume</ShinyButton>
        </Link>
      </BlurFade>

      {/* portofolios */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} target="_blank" className="[&>div]:hover:scale-90 ">
            <CardProjects
              title={project.title}
              description={project.description}
              date={project.date}
              image={project.image}
              delay={index * 0.25 + 1}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

import Image, { StaticImageData } from "next/image";
import BlurFade from "./ui/blur-fade";

interface ProjectsProps {
  title: string;
  description: string;
  date: string;
  image: StaticImageData;
  delay: number;
}

function CardProjects({ title, description, date, image, delay }: ProjectsProps) {
  return (
    <div className="transition-all">
      <BlurFade className="w-full " delay={delay}>
        <div className="relative mb-3">
          <Image
            className="aspect-video object-cover rounded-lg border"
            src={image}
            alt="random image"
          />
          <h4 className="font-bold tracking-wide text-sm absolute bottom-3 left-3 bg-white/40 py-0.5 px-3 rounded-full backdrop-blur line-clamp-1">
            {title}
          </h4>
        </div>
        <div>
          <p className="text-sm mb-2 line-clamp-2">{description}</p>
          <p className="text-gray-500 text-xs font-bold">{date}</p>
        </div>
      </BlurFade>
    </div>
  );
}
