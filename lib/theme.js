import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const coreThemeObj = {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#e50914",
    },
    secondary: {
      main: "#0070f3",
    },
  },
};

export const darkTheme = createMuiTheme({
  ...coreThemeObj,
  palette: {
    ...coreThemeObj.palette,
    type: "dark",
  },
});
export const lightTheme = createMuiTheme({
  ...coreThemeObj,
  palette: {
    ...coreThemeObj.palette,
    type: "light",
    background: {
      default: "#f6f6f6",
    },
  },
});