import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";

import Bakoelkarcis from "@/assets/bakoelkarcis-banner.jpg";
import Gunasehat from "@/assets/gunasehat-banner.jpg";
import Neuversity from "@/assets/neuversity-banner.jpg";
import Krasan from "@/assets/krasanvilla-banner.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Gunasehat",
      description: "Frontend Web Developer untuk website Gunasehat.",
      date: "April 1, 2022",
      image: Gunasehat,
      link: "https://gunasehat.com",
    },
    {
      title: "Bakoelkarcis",
      description: "Frontend Web Developer untuk website Gunasehat.",
      date: "August 1, 2023",
      image: Bakoelkarcis,
      link: "https://bakoelkarcis.com",
    },
    {
      title: "Neuversity",
      description: "Frontend Web Developer untuk website Gunasehat.",
      date: "Jun 2023 - Present",
      image: Neuversity,
      link: "https://neuversity.com",
    },
    {
      title: "Krasanvilla",
      description: "Frontend Web Developer untuk website Gunasehat.",
      date: "June 1, 2023",
      image: Krasan,
      link: "https://krasanvilla.com",
    },
  ];

  return (
    <section className="container max-w-screen-lg pt-16">
      {/* title */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-3xl font-bold text-neutral-700 mb-1">Projects</h3>
          <p className="text-sm">List Portoflio</p>
        </div>
        <Link
          href="https://drive.google.com/file/d/10jbjDLHBGFNiC1lTMkZ0aE6pBnGDiAtz/view?usp=sharings"
          target="_blank"
        >
          <ShinyButton>Resume</ShinyButton>
        </Link>
      </div>

      {/* portofolios */}
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <Link href="#" key={index} className="[&>div]:hover:scale-90 ">
            <CardProjects
              title={project.title}
              description={project.description}
              date={project.date}
              image={project.image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

import Image, { StaticImageData } from "next/image";

interface ProjectsProps {
  title: string;
  description: string;
  date: string;
  image: StaticImageData;
}

function CardProjects({ title, description, date, image }: ProjectsProps) {
  return (
    <div className="w-full transition-all">
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
    </div>
  );
}
