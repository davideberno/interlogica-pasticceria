import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#55D8C1",
    },
    secondary: {
      main: "#FF6FB5",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
