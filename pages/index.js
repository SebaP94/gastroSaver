import Head from "next/head";
import { Box, Text, Image, Grid, Flex } from "@chakra-ui/core";
import { Header } from "../components/Header";
import { ActionButton } from "../components/CustomButtons/ActionButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>GastroSaver</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Content */}
      <Grid
        as="main"
        gap={{ base: 0, md: 10 }}
        templateColumns={{ base: "1fr", md: "1fr 3fr" }}
        templateRows={{ base: "auto 1fr auto", md: "auto 1fr" }}
        templateAreas={{
          base: "'title' 'banner' 'actions'",
          md: "'title title' 'actions banner'",
          lg: "'title banner' 'actions banner'",
        }}
      >
        <Flex
          gridArea="title"
          direction="column"
          justifyContent="center"
          mt={{ base: "none", md: 10 }}
        >
          <Text
            fontSize={{ base: "3xl", md: "3xl" }}
            fontWeight="medium"
            color="gray.600"
          >
            Pomóż
          </Text>
          <Text
            fontSize={{ base: "5xl", md: "6xl" }}
            fontWeight="bold"
            color="gray.600"
            lineHeight={{ base: "none", md: "none", lg: "normal" }}
          >
            Gastronomii w Polsce
          </Text>
        </Flex>
        {/* //Actions */}
        <Flex
          gridArea="actions"
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <ActionButton title="Sprawdź" subtitle="jak działamy"></ActionButton>
          <ActionButton title="Dołącz" subtitle="do akcji"></ActionButton>
        </Flex>
        <Box gridArea="banner" display="flex" justifyContent="center">
          <Image
            maxHeight={{ base: "50vh", md: "70vh" }}
            height="100%"
            src="/img/peopele-in-restaurant.png"
            objectFit="contain"
            alt="People in the restaurant which is in danger"
          />
        </Box>
      </Grid>
    </>
  );
}
