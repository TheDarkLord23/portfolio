import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import facebookDark from "../../assets/facebook-dark.svg";
import facebookLight from "../../assets/facebook-light.svg";
import arrowDark from "../../assets/arrow-dark.png";
import arrowLight from "../../assets/arrow-light.png";
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinDark : linkedinLight;
  const githubIcon = theme === "light" ? githubDark : githubLight;
  const facebookIcon = theme === "light" ? facebookDark : facebookLight;
  const arrow = theme === "light" ? arrowDark : arrowLight;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Aleksandar <br /> Antonov
          </h1>
          <h2>Full Stack Developer</h2>
          <span>
            <a
              href="https://www.linkedin.com/in/aleksandar-antonov-6222bb263/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://github.com/TheDarkLord23" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.facebook.com/alex2312200/" target="_blank">
              <img src={facebookIcon} alt="Facebook icon" />
            </a>
          </span>
          <p className={styles.description}>
            With a passion for developing modern React web apps for commercial
            business.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
      <div className={styles.scrollButton} onClick={scrollToNextSection}>
        <img className={styles.arrow} src={arrow} alt="" />
      </div>
    </>
  );
}

export default Hero;
