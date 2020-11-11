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
    <Grid px={5} py={5} h="100vh" templateRows="150px 1fr 60px">
      <Head>
        <title>GastroSaver</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Box
        as="header"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignContent="center"
        pr={20}
        pl={10}
      >
        <Image src="/logo.png"></Image>
        {/* Menu */}
        <Box
          as="ul"
          display="inline-flex"
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
        pl={20}
        pr={10}
        gap="10"
        templateColumns="1fr 3fr"
        templateRows="auto 1fr"
      >
        <Box gridColumn="1/1" gridRow="1/1">
          <Text fontSize="4xl" fontWeight="medium" color="gray.600" mt={5}>
            Pomóż
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            color="gray.600"
            lineHeight="5rem"
          >
            Gastronomi w Polsce
          </Text>
        </Box>
        {/* //Actions */}
        <Flex
          gridRow="2/-1"
          gridColumn="1/1"
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <ActionButton title="Spradź" subtitle="jak działamy"></ActionButton>
          <ActionButton title="Wejdź" subtitle="we współprace"></ActionButton>
        </Flex>
        <Box
          gridColumn="2/-1"
          gridRow="1/-1"
          position="relative"
          display="flex"
          justifyContent="center"
        >
          <Image
            gridRow="1/-1"
            gridColumn="2"
            position="absolute"
            height="100%"
            src="/img/peopele-in-restaurant.png"
            top="-2rem"
            alt="People in the restaurant which is in danger"
          />
        </Box>
      </Grid>
      <Box as="footer" height="80px"></Box>
    </Grid>
  );
}
