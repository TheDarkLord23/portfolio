import styles from "./TutorStyles.module.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";

function Tutor() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <section id="project" className={styles.container}>
      <div className={styles.topSection}>
        <a href="/#projects">
          <button className="hover">Home</button>
        </a>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode"
          onClick={toggleTheme}
        />
      </div>
    </section>
  );
}

export default Tutor;
