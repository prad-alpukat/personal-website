import { PortofolioPost } from "app/components/posts";

export const metadata = {
  title: "Portofolio",
  description: "here is my portofolio",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Portofolio</h1>
      <PortofolioPost />
    </section>
  );
}
