"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectSpotlight } from "@/components/ui/ProjectSpotlight";
import { EnquireModal } from "@/components/ui/EnquireModal";

interface ProjectsExplorerProps {
  projects: Project[];
}

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [enquireProject, setEnquireProject] = useState<Project | null>(null);

  return (
    <>
      <ProjectSpotlight projects={projects} onEnquire={setEnquireProject} />
      <EnquireModal
        isOpen={Boolean(enquireProject)}
        onClose={() => setEnquireProject(null)}
        projectName={enquireProject?.name}
      />
    </>
  );
}
