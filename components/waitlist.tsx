import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ExplodeImg from "../public/assets/img/explode-shape.png";
import styles from "../styles/waitlist.module.scss";
import WaitListInput from "./waitlistInput";

export default function Waitlist() {
  return (
    <div className={styles.container}>
      <Image
        data-aos="fade-in"
        src={ExplodeImg}
        alt="explode shape"
        width={100}
        height={100}
      />
      <Typography
        data-aos="fade-in"
        data-aos-delay="300"
        variant="h2"
        sx={{ mt: "32px" }}
      >
        Get early access
      </Typography>
      <Typography
        data-aos="fade-in"
        data-aos-delay="800"
        component="p"
        sx={{
          mt: "16px",
          color: "#555555",
          fontSize: "16px",
        }}
      >
        Sign up to get access to the Wyrr App when it’s released.
      </Typography>
      <Box sx={{ maxWidth: "503px", width: "100%" }}>
        <WaitListInput active />
      </Box>
    </div>
  );
}
