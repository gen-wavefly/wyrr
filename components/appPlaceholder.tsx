import Image from "next/image";
import React from "react";
import AppImg from "public/assets/img/iphone.png";
import styles from "../styles/placeholder.module.scss";

export default function AppPlaceholder() {
  return (
    <div className={styles.container}>
      <Image
        src={AppImg}
        alt="Iphone Phone App Placeholder"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="200"
      />
    </div>
  );
}
