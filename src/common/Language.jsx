import React from "react";
import styles from "./LanguageStyles.module.css";

function Language({ language, percent }) {
  return (
    <>
      <p className={styles.language}>{language}</p>
      <p className={styles.percent}>{percent}</p>
    </>
  );
}

export default Language;
