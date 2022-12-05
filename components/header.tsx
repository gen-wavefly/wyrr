import { Box, Typography } from "@mui/material";
import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <Typography variant="h1" data-aos="fade-in">
        International money transfer.
      </Typography>
      <Typography
        component="h4"
        variant="h4"
        data-aos="fade-in"
        data-aos-delay="500"
      >
        Send money to family and friends in Africa with Wyrr. Secure, fast and
        affordable.
      </Typography>
    </div>
  );
}
