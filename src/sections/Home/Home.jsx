import styles from "./HomeStyles.module.css";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Collaborations from "../Collaborations/Collaborations";
import Programs from "../Programs/Programs";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Collaborations />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
