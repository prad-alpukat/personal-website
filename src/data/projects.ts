import { StaticImageData } from "next/image";

import Bakoelkarcis from "@/assets/projects/bakoelkarcis.jpg";
import Gunasehat from "@/assets/projects/gunasehat.jpg";
import Neuversity from "@/assets/projects/neuversity.jpg";
import Krasan from "@/assets/projects/krasanvilla.jpg";
import FlipboookKomdigi from "@/assets/projects/flipbook-komdigi.png";
import PerempuanPandai from "@/assets/projects/perempuan-pandai.jpg";
import Trainner from "@/assets/projects/trainner.jpeg";
import Siskader from "@/assets/projects/siskader.png";

export interface Project {
  title: string;
  description: string;
  date: string;
  image: StaticImageData;
  link: string | null;
}

export const projects: Project[] = [
  {
    title: "Neuversity",
    description: "Mentor Frontend Development di Neuversity",
    date: "Jun 2023 - Present",
    image: Neuversity,
    link: "https://maps.app.goo.gl/bTP2cxPCo2sKhSZB8",
  },
  {
    // bakoelkarcis turned into fasticket
    title: "Fasticket",
    description: "Frontend Developer untuk Website Fasticket",
    date: "August 1, 2023",
    image: Bakoelkarcis,
    link: "https://fasticket.id/",
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
    link: null,
  },
  {
    title: "PDF Preview Komdigi",
    description: "Create PDF Preview feature for Komdigi pdf",
    date: "March 24, 2025",
    image: FlipboookKomdigi,
    link: "https://preview-flipbook-komdigi.pradityaaldi.com/",
  },
  {
    title: "Perempuan Pandai",
    description: "Create learning platform for perempuan pandai",
    date: "Dec 24, 2024",
    image: PerempuanPandai,
    link: "https://perempuanpandai.org",
  },
  {
    title: "Trainner",
    description: "Hard Skill Training: IT Basic for Advertiser",
    date: "Oct 2024",
    image: Trainner,
    link: "https://www.linkedin.com/posts/praditya-aldi-syahputra_im-happy-to-share-this-hard-skill-training-activity-7296853678735429632-a5yd/",
  },
  {
    title: "Frontend",
    description: "Create new pages homepage NU Kaderisasi",
    date: "Oct 2024",
    image: Siskader,
    link: "https://siskader.nu.id/",
  },
];
