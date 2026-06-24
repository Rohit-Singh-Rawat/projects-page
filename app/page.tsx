import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsExplorer } from "@/components/ui/ProjectsExplorer";
import { projects } from "@/data/projects";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-white selection:text-black">
      <Header />

      <section className="flex items-center justify-center bg-black px-8 py-16 max-lg:bg-black lg:bg-[#F0F0F0]">
        <h1 className="text-center text-[1.9rem] font-light tracking-[0.4rem] text-black uppercase max-lg:mb-[35px] max-lg:whitespace-nowrap max-lg:text-white lg:text-[5vw] lg:tracking-[11.1px]">
          OUR PROJECTS
        </h1>
      </section>

      <section className="flex-1 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ProjectsExplorer projects={projects} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
