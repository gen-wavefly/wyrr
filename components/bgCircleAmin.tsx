import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/amin.module.scss";
import { Box } from "@mui/material";
import Image from "next/image";
import BgBubbleImg from "/public/assets/img/bg-bubble.png";
import BgBubbleBlueImg from "/public/assets/img/bg-bubble-blue.png";

/**
 * 
 * 
  x = x + speedX;
  y = y + speedY;
  
  if (x > width - 55){
  	speedX = -6;
  }
  
  if (x < 55){
    speedX = 6;
  }
  
  if (y > height - 55){
  	speedY = -5;
  }
  
  if (y < 55){
    speedY = 5;
  }
 */

const SVG_WIDTH = 450;
const ORIGSPEEDX = 100;
const ORIGSPEEDY = 100;
export default function BgBubble({
  posX,
  posY,
  active,
}: {
  posY: number;
  posX: number;
  active?: boolean;
}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    setX(posX);
    setY(posY);
  }, [posX, posY]);

  useEffect(() => {
    const timerId = setInterval(() => {
      let ranXPostion = Math.floor(Math.random() * 2000);
      let ranYPostion = Math.floor(Math.random() * posY);
      // if (posY <= ranYPostion) {
      //   ranYPostion = posY * 2;
      // }
      const wWidth = window.innerWidth;
      if (ranXPostion >= wWidth) {
        ranXPostion = ranXPostion / 2;
        // setY(ranYPostion);
        console.log("yesss");
      }
      setX(ranXPostion);
    }, 4000);
    return () => {
      clearInterval(timerId);
    };
  }, [posX, posY]);

  return (
    <div
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
      className={styles.bubbleContainer}
    >
      {/* <motion.div
        animate={{ x: x, y: y, direction: "rtl" }}
        transition={{
          type: "spring",
          duration: 0.001,
          repeat: Infinity
        }}
        onAnimationComplete={() => {
          setX(x + speedX);
          setY(posY ?? -800 + speedY);
          if (x >= 100) {
            setSpeedX(-ORIGSPEEDX);
          }
          if (x <= -window.innerWidth + SVG_WIDTH) {
            setSpeedX(ORIGSPEEDX);
          }

          if (y >= window.innerHeight / 2) {
            setSpeedY(-ORIGSPEEDY);
          }

          if (y <= -window.innerHeight / 2) {
            setSpeedY(ORIGSPEEDY);
          }
        }}
      >
        <svg
          width={SVG_WIDTH.toString()}
          height="750"
          viewBox="0 0 750 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter={`url(#filter0_f${id})`}>
            <circle
              cx="375"
              cy="375"
              r="120"
              fill={`url(#paint0_linear${id})`}
              fillOpacity="0.75"
            />
          </g>
          <defs>
            <filter
              id={`filter0_f${id}`}
              x="0"
              y="0"
              width="750"
              height="750"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur"
              />
            </filter>
            <linearGradient
              id={`paint0_linear${id}`}
              x1="375"
              y1="200"
              x2="375"
              y2="550"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={active ? "#CFDAFE" : "#0E45FB"} />
              <stop
                offset="0.41849"
                stopColor={active ? "#CFDAFE" : "#0E45FB"}
              />
              <stop
                offset="0.503309"
                stopColor={active ? "#CFDAFE" : "#0E45FB"}
              />
              <stop
                offset="0.747164"
                stopColor={active ? "#CFDAFE" : "#0E45FB"}
              />
            </linearGradient>
          </defs>
        </svg>
      </motion.div> */}
      <Image
        src={active ? BgBubbleBlueImg : BgBubbleImg}
        width={300}
        height={300}
        alt="bubble bg"
      />
    </div>
  );
}
