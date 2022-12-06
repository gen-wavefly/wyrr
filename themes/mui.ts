import { createTheme, ThemeOptions } from "@mui/material/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  typography: {
    color: "#fff",
    fontFamily: "Public Sans",

    h1: {
      fontSize: 96,
      fontWeight: 700,
      color: "#fff",
      lineHeight: "110%",
      textAlign: "center",
      letterSpacing: "-0.03em",
      [breakpoints.down("sm")]: {
        fontSize: 40,
      },
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: "150%",
      color: "#000000",
      [breakpoints.down("xs")]: {
        fontSize: 24,
      },
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "28px",
      color: "#fff",
      // [breakpoints.down("xs")]: {
      //   fontSize: 38,
      // },
    },
    h4: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "0.01em",
      color: "#fff",
      [breakpoints.down("xs")]: {
        fontSize: 16,
      },
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "28px",
      [breakpoints.down("xs")]: {
        fontSize: 18,
      },
    },
    h6: {
      fontSize: "13px",
      fontWeight: 400,
      color: "#0E093F",
      lineHeight: "15px",
    },
  },
  palette: {
    primary: {
      main: "#0E45FB",
    },
    action: {
      disabled: "#0E45FB",
      //   disabledBackground: "#F4F4F4",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          background: "#FFFFFF",
          borderRadius: "100px",
          height: "43px",
          minWidth: "max-content",
          padding: "12px",
          fontSize: "16px",
          lineHeight: "120%",
          letterSpacing: "0.02em",
          color: "#0E45FB",
          fontWeight: 500,
          textTransform: "none",
          "&:hover": {
            background: "#eee",
          },
          "&.Mui-disabled": {
            background: "#CFDAFE",
          },
        },
        contained: {
          background: "#0E45FB",
          borderRadius: "100px",
          height: "43px",
          minWidth: "max-content",
          padding: "12px",
          fontSize: "16px",
          lineHeight: "120%",
          letterSpacing: "0.02em",
          color: "#fff",
          fontWeight: 500,
          textTransform: "none",
          "&.Mui-disabled": {
            background: "#0E45FB",
            color: "#fff",
          },
        },
      },
    },
  },
} as ThemeOptions);

export default theme;
