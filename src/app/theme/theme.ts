import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    primary: {
      main: "#FFD600",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      default: "#2A2A2A",
    },
    info: {
      main: `#333333`,
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
  },
});
