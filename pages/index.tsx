import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import BrandLogo from "../components/navbar";
// imgs
import circleImg from "/public/assets/img/circleBg.png";
import circleImg2 from "/public/assets/img/circle-bg2.svg";
import circleImg3 from "/public/assets/img/circle-bg3.svg";
import circleImg4 from "/public/assets/img/circle-bg4.svg";

import styles from "../styles/home.module.scss";
import { useEffect, useState } from "react";
import WaitList from "../components/waitlistInput";
import AppPlaceholder from "../components/appPlaceholder";
import Banner from "../components/banner";
import Features from "../components/features";
import Waitlist from "../components/waitlist";
import Footer from "../components/footer";
import AllCircleAmin from "../components/allCircleAmin";
import { Box } from "@mui/material";
import BgBubble from "../components/bgCircleAmin";

export default function Home() {
  const [pos, setPos] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      const counter = Math.round(Math.random() * document.body.scrollHeight);
      setPos(counter);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });
  return (
    <Box sx={{ position: "relative", overflowX: "hidden" }}>
      <Head>
        <title>Wyrr | Moving money across the world</title>
        <meta name="description" content="wyrr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ position: "absolute", width: "100vw", zIndex: 1 }}>
        <BgBubble posX={1059} posY={50} />
        <BgBubble posX={200} posY={300} />
        <BgBubble posX={-40} posY={900} />
        <BgBubble posX={1000} posY={730} />
        <BgBubble posX={800} posY={1250} active />
        <BgBubble posX={10} posY={1600} active />
        <BgBubble posX={300} posY={2450} active />
        <BgBubble posX={20} posY={3000} active />
        <BgBubble posX={1000} posY={3200} active />
      </Box>
      <Banner />
      <Features />
      <Waitlist />
      <Footer />
      {/* <main className={styles.main}>
        <div className={styles.header}>
          <BrandLogo />
          <Image
            style={{ left: `${pos}px` }}
            className={styles.circleBg1}
            src={circleImg}
            alt="bg1"
          />
          <Image className={styles.circleBg2} src={circleImg2} alt="bg2" />
          <Image className={styles.circleBg3} src={circleImg3} alt="bg3" />
          <Image className={styles.circleBg4} src={circleImg4} alt="bg4" />

          <Header />
          <WaitList />
          <AppPlaceholder />
        </div>
      </main> */}

      <footer className={styles.footer}></footer>
    </Box>
  );
}
