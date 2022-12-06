import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/banner.module.scss";
import AppPlaceholder from "./appPlaceholder";
import Header from "./header";
import BrandLogo from "./navbar";
import WaitListInput from "./waitlistInput";
// imgs
import circleImg from "/public/assets/img/circleBg.png";
import circleImg2 from "/public/assets/img/circle-bg2.svg";
import circleImg3 from "/public/assets/img/circle-bg3.svg";
import circleImg4 from "/public/assets/img/circle-bg4.svg";
import IphoneBg from "/public/assets/img/wyrr-app-bg.svg";
import BgCircleAmin from "./bgCircleAmin";
import AllCircleAmin from "./allCircleAmin";
import { useParallax } from "react-scroll-parallax";
import { Box } from "@mui/material";

export default function Banner() {
  const [pos, setPos] = useState(0);

  return (
    <div className={styles.container}>
      <BrandLogo />
      {/* <Image
        style={{ left: `${pos}px` }}
        className={styles.circleBg1}
        src={circleImg}
        alt="bg1"
      /> */}
      {/* <Image className={styles.circleBg2} src={circleImg2} alt="bg2" />
      <Image className={styles.circleBg3} src={circleImg3} alt="bg3" />
      <Image className={styles.circleBg4} src={circleImg4} alt="bg4" /> */}

      <Header />
      <Box sx={{ maxWidth: "503px", mx: "auto" }}>
        <WaitListInput />
      </Box>
      <AppPlaceholder />

      <Box sx={{ width: "100%", overflow:"hidden" }}>
        <Image
          src={IphoneBg}
          className={styles.appBg}
          alt="wyrr app background"
        />
      </Box>
    </div>
  );
}
