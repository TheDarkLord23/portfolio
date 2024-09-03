import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopStyles.module.css";
import { useTheme } from "./ThemeContext";
import arrowLight from "../assets/arrow-light.png";
import arrowDark from "../assets/arrow-dark.png";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const arrow = theme === "light" ? arrowDark : arrowLight;

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={styles.scrollToTop}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={
            theme === "dark" ? styles.scrollBtnDark : styles.scrollBtnLight
          }
        >
          <img className={styles.arrowIMG} src={arrow} alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
