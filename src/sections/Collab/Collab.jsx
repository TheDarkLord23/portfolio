import React, { useEffect } from "react";
import styles from "./ProjectsStyles.module.css";
import Tutor from "../../assets/Tutor/banner.jpg";
import Alumni from "../../assets/Alumni/Thumbnail.png";
import Horizonti from "../../assets/Horizonti.png";
import GA from "../../assets/GA.png";
import ProjectCard from "../../common/ProjectCard";

function Collab() {
  useEffect(() => {
    if (window.location.hash === "#collab") {
      const collabSection = document.getElementById("collab");
      if (collabSection) {
        collabSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section id="collab" className={styles.container}>
      <h1 className="sectionTitle">Collaborations</h1>
      <div className={styles.collabContainer}>
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
          src={Horizonti}
          link="https://horizon-ti.com/"
          title="Horizonti"
          description="A charity organisation focused on bringin Bulgarian people in Vienna together"
          target="_blank"
        />
        <ProjectCard
          src={GA}
          link="https://gastudio.org/"
          title="Gastudio Website"
          description="My own photography and videography portfolio website"
          target="_blank"
        />
      </div>
    </section>
  );
}

export default Collab;
