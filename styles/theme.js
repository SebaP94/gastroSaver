import { extendTheme } from "@chakra-ui/core";

const customTheme = extendTheme({
  colors: {
    red: { custom: "#EB5757" },
  },
  styles: {
    global: {
      "*": {
        outline: "none",
        boxShadow: "none",
      },
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Open Sans, sans",
    mono: "Menlo, monospace",
  },
});

export default customTheme;
