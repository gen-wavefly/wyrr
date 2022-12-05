import { IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "/public/assets/img/facebook.svg";
import InstagramIcon from "/public/assets/img/instagram.svg";
import TwitterIcon from "/public/assets/img/twitter.svg";
import styles from "../styles/footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Typography sx={{ color: "#000000" }} component="h3" variant="h3">
        wyrr
      </Typography>
      <Stack direction="row" sx={{ mt: "16px" }} gap={"8px"}>
        <IconButton>
          <Image src={FacebookIcon} alt="facebook" />
        </IconButton>
        <IconButton>
          <Image src={InstagramIcon} alt="instagram" />
        </IconButton>
        <IconButton>
          <Image src={TwitterIcon} alt="twitter" />
        </IconButton>
      </Stack>
      <hr className={styles.divider} />
      <Typography
        sx={{
          textAlign: "center",
          mt: "24px",
          fontSize: "13px",
        }}
        component="p"
      >
        Wyrr Inc., Canada, is registered and regulated by Canada’s Financial
        Transactions and Report Analysis Centre as a Money Service Business. MSB
        registration number: M22637380
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          my: "16px",
          fontSize: "13px",
        }}
        component="p"
      >
        Copyright © Wyrr {new Date().getFullYear()}. All rights reserved.
      </Typography>
    </div>
  );
}
