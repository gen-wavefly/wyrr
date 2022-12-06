import { Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/loader.module.scss";
import CountUp from "react-countup";

let speed = 800;

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const onEnd = () => {
    setLoading(false);
  };
  return (
    <div className={styles.container}>
      <Typography component="p">Loading, please wait...</Typography>
      <Typography component="h2">
        {loading && <span>0</span>}
        <CountUp start={0} end={100} duration={2.5} onEnd={onEnd} />
        <span className={styles.nodge}>%</span>
      </Typography>
    </div>
  );
}
