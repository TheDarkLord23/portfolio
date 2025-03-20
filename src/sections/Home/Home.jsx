import styles from "./HomeStyles.module.css";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Programs from "../Programs/Programs";
import Collab from "../Collab/Collab";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Collab />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
