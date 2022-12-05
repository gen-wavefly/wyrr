import { Typography } from "@mui/material";
import React from "react";
import styles from "../styles/navbar.module.scss";

export default function BrandLogo() {
  return (
    <div className={styles.container}>
      <Typography component="h3" variant="h3">
        wyrr
      </Typography>
    </div>
  );
}
