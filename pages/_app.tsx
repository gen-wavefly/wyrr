import { useEffect } from "react";
import type { AppProps } from "next/app";
import HeadContents from "../components/_app/headerContents";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "../themes/mui";
import AOS from "aos";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.scss";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <HeadContents />
      </Head>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    </>
  );
}
