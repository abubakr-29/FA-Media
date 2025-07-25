import React from "react";
import ProjectsText from "./ProjectsText";
import AllProjects from "./AllProjects";

const ProjectsMain = () => {
  return (
    <div className="pb-14 text-stone-300" id="projects">
      <ProjectsText />
      <AllProjects />
    </div>
  );
};

export default ProjectsMain;
