import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#53BF9D",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#F94C66",
    },
    text: { primary: "#330066" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: "1px solid rgba(83, 191, 157, 0.4)",
          boxShadow: "0px 3px 1px -2px rgb(249 76 102 / 20%), 0px 2px 2px 0px rgb(249 76 102 / 14%), 0px 1px 5px 0px rgb(249 76 102 / 12%)",
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiChip: {
      defaultProps: {
        color: "secondary",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
