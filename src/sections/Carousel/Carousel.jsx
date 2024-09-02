import React, { useState } from "react";
import { useTheme } from "../../common/ThemeContext";
import styles from "./CarouselStyles.module.css";
import arrowDark from "../../assets/arrow-dark.png";
import arrowLight from "../../assets/arrow-light.png";

const Carousel = ({ images }) => {
  const { theme, toggleTheme } = useTheme();

  const arrow = theme === "light" ? arrowDark : arrowLight;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className={styles.carouselControls}>
        <button className={styles.carouselControlLeft} onClick={prevSlide}>
          <img src={arrow} />
        </button>
        <button className={styles.carouselControlRight} onClick={nextSlide}>
          <img src={arrow} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
