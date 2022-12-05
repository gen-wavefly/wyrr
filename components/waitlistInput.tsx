import {
  Box,
  Button,
  IconButton,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";
import styles from "../styles/waitlist.module.scss";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { Close } from "@carbon/icons-react";
import Image from "next/image";
import ExplodeImg from "../public/assets/img/explode-shape-email.png";

export default function WaitListInput({ active }: { active?: boolean }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (email) {
      setLoading(true);
      const payload = {
        email,
      };
      try {
        const response = await axios.post("/api/waitlist", payload);
        console.log(response);
        if (response) {
          setEmail("");
          handleOpen();
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form
      data-aos="fade-in"
      data-aos-delay="800"
      className={`${styles.inputContainer} ${active ? styles.active : ""}`}
      onSubmit={submitHandler}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <IconButton onClick={handleClose}>
            <Close size={24} color="#000" />
          </IconButton>
          <Image
            data-aos="fade-in"
            src={ExplodeImg}
            alt="explode shape"
            width={100}
            height={100}
          />
          <Typography variant="h2">Thank You!</Typography>
          <Typography component="p">
            You have successfully signed up on the Wyrr waitlist. Information
            about the app release would be sent to your mail.
          </Typography>
        </Box>
      </Modal>

      <OutlinedInput
        required
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className={styles.formInput}
      />
      <LoadingButton
        loading={loading}
        variant={active ? "contained" : "text"}
        type="submit"
      >
        Join waitlist
      </LoadingButton>
    </form>
  );
}
