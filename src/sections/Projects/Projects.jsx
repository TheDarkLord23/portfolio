import React, { useEffect } from "react";
import styles from "./ProjectsStyles.module.css";
import Tutor from "../../assets/Tutor/banner.jpg";
import Alumni from "../../assets/Alumni/Thumbnail.png";
import IMG from "../../assets/project.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  useEffect(() => {
    // Check if the URL contains '#projects'
    if (window.location.hash === "#projects") {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Tutor}
          link="/tutor"
          title="Tutor Master"
          description="Unlock your potential with the best University Tutors"
        />
        <ProjectCard
          src={Alumni}
          link="/alumni"
          title="Code Factory Alumni"
          description="Unveiling the Success Stories of Code Factory graduates"
        />
        <ProjectCard
          src={IMG}
          link="/horizonti"
          title="Horizonti Website"
          description="habfhsvdfiuhsbdofiuhasdbvofih"
        />
        <ProjectCard
          src={IMG}
          link="/gastudio"
          title="Gastudio Website"
          description="habfhsvdfiuhsbdofiuhasdbvofih"
        />
      </div>
    </section>
  );
}

export default Projects;
