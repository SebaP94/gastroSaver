import { ChakraProvider } from "@chakra-ui/core";
import customTheme from "../styles/theme";
import { Global, css } from "@emotion/core";

const GlobalStyles = css`
  * {
    outline: none;
    box-shadow: none;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
