import Head from "next/head";
import { Box, Text, Image, Button, Grid, Flex } from "@chakra-ui/core";
import { MenuItem } from "../components/Menu/MenuItem";
import { ActionButton } from "../components/CustomButtons/ActionButton";

const menuItems = [
  {
    label: "Współpraca",
  },
  {
    label: "Jak to działa",
  },
  {
    label: "Regulamin",
  },
];

export default function Home() {
  return (
    <Grid
      p={{ base: 6, lg: 10 }}
      h="100vh"
      templateRows={{ base: "100px 1fr", md: "150px 1fr" }}
    >
      <Head>
        <title>GastroSaver</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Box
        as="header"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignContent="center"
      >
        <Image
          src="/logo.png"
          alt="Gastro saver"
          objectFit="contain"
          maxHeight={{ base: "100px", md: "150px" }}
        ></Image>
        {/* Menu */}
        <Box
          as="ul"
          display={{ base: "none", md: "inline-flex" }}
          flexDirection="row"
          alignItems="center"
          listStyleType="none"
        >
          {menuItems.map((menuItem, i) => (
            <MenuItem key={i}>{menuItem.label}</MenuItem>
          ))}
        </Box>
      </Box>
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
        <Flex gridArea="title" direction="column" justifyContent="center">
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
            lineHeight={{ base: "none", md: "none", lg: "tall" }}
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
          <ActionButton title="Wejdź" subtitle="we współprace"></ActionButton>
        </Flex>
        <Box gridArea="banner" display="flex" justifyContent="center">
          <Image
            maxHeight={{ base: "50vh", md: "70vh" }}
            height="100%"
            src="/img/peopele-in-restaurant.png"
            // top="-2rem"
            objectFit="contain"
            alt="People in the restaurant which is in danger"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
