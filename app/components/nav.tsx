import LinkTransition from "@/components/LinkTransition";
const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/portofolio": {
    name: "Portofolio",
  },
  "mailto:pradityaaldi.s@gmail.com": {
    name: "Contact",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight py-3">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <LinkTransition
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </LinkTransition>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
