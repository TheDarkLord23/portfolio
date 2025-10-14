import React, { useEffect } from "react";
import styles from "./CollabStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import DiskontDepot from "../../assets/Thumbnails/Diskont-Thumbnail.jpg";
import LaserThumbnail from "../../assets/Thumbnails/Laser-Thumbnail.jpg";
import PlayworldThumbnail from "../../assets/Thumbnails/Playworld-Thumbnail.jpg";
import ShimaleThumbnail from "../../assets/Thumbnails/Shimale-Thumbnail.jpg";

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
          src={DiskontDepot}
          link="https://diskont-depot.at/"
          title="Diskont Depot"
          description={"Besser Billig Lagern"}
          target="_blank"
        />
        <ProjectCard
          src={LaserThumbnail}
          link="https://www.laserdance.at/"
          title="Laser Dance"
          description="Indoor-Entertainment und Action-Erlebnis im Prater"
          target="_blank"
        />
        <ProjectCard
          src={PlayworldThumbnail}
          link="https://playworld-spielberg.at/"
          title="Playworld Spielberg"
          description="Österreichs größter Indoor-Freizeitpark"
          target="_blank"
        />
        <ProjectCard
          src={ShimaleThumbnail}
          link="https://shimalepeleg.com/"
          title="Shimale Peleg"
          description={"See your House\nin a different light"}
          target="_blank"
        />
      </div>
    </section>
  );
}

export default Collab;
