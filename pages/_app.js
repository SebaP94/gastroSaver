import { ChakraProvider, Grid } from "@chakra-ui/core";
import customTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Grid
        p={{ base: 6, lg: 10 }}
        h="100vh"
        templateRows={{ base: "100px 1fr", md: "150px 1fr" }}
      >
        <Component {...pageProps} />
      </Grid>
    </ChakraProvider>
  );
}

export default MyApp;
