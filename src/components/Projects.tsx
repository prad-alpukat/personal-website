import ShinyButton from "@/components/ui/shiny-button";

export default function Projects() {
  const projects = [
    {
      title: "Gunasehat",
      description: "Frontend Web Developer untuk website Gunasehat.",
      date: "April 1, 2023",
      image: "https://picsum.photos/500",
    },
    {
      title: "Gunasehat",
      description: "Frontend Web Developer untuk website Gunasehat.",
      date: "April 1, 2023",
      image: "https://picsum.photos/500",
    },
    {
      title: "Gunasehat",
      description: "Frontend Web Developer untuk website Gunasehat.",
      date: "April 1, 2023",
      image: "https://picsum.photos/500",
    },
    {
      title: "Gunasehat",
      description: "Frontend Web Developer untuk website Gunasehat.",
      date: "April 1, 2023",
      image: "https://picsum.photos/500",
    },
  ];

  return (
    <section className="container max-w-screen-lg pt-10">
      {/* title */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-3xl font-bold text-neutral-700 mb-1">Projects</h3>
          <p className="text-sm">List Portoflio</p>
        </div>
        <ShinyButton>Resume</ShinyButton>
      </div>

      {/* portofolios */}
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <CardProjects
            key={index}
            title={project.title}
            description={project.description}
            date={project.date}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

interface ProjectsProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

function CardProjects({ title, description, date, image }: ProjectsProps) {
  return (
    <div className="w-full">
      <div className="relative mb-3">
        <img className="aspect-video object-cover rounded-lg" src={image} alt="random image" />
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
