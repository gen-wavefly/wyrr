import React from "react";
import styles from "../styles/loader.module.scss";

export default function LoadingScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.balls}>
        <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div>
      </div>
    </div>
  );
}
