import Head from "next/head";
import { Box, Text, Image, Button, Grid, Flex } from "@chakra-ui/core";
import { MenuItem } from "../components/Menu/MenuItem";
import { ActionButton } from "../components/CustomButtons/ActionButton";
import styled from "@emotion/styled";

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

const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr 60px;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: 0 40px 0 20px;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

const Content = styled.main`
  padding: 0 20px 0 40px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr;
`;

const Heading = styled.div`
  grid-column: 1/1;
  grid-row: 1/1;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 2/-1;
  grid-column: 1/1;
  align-items: flex-start;
  justify-content: center;
`;

const BannerWrapper = styled.div`
  grid-row: 1/-1;
  grid-column: 2/-1;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Banner = styled.img`
  position: absolute;
  height: 100%;
  width: auto;
`;

export default function Home() {
  return (
    <MainWrapper>
      <Head>
        <title>GastroSaver</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header>
        <img src="/logo.png"></img>
        {/* Menu */}
        <Menu>
          {menuItems.map((menuItem, i) => (
            <MenuItem key={i}>{menuItem.label}</MenuItem>
          ))}
        </Menu>
      </Header>
      {/* Content */}
      <Content>
        <Heading>
          <h2>Pomóż</h2>
          <h1>Gastronomi w Polsce</h1>
        </Heading>
        {/* //Actions */}
        <Actions>
          <ActionButton title="Spradź" subtitle="jak działamy"></ActionButton>
          <ActionButton title="Wejdź" subtitle="we współprace"></ActionButton>
        </Actions>
        <BannerWrapper>
          <Banner
            src="/img/peopele-in-restaurant.png"
            alt="People in the restaurant which is in danger"
          />
        </BannerWrapper>
      </Content>
      <Box as="footer" height="80px"></Box>
    </MainWrapper>
  );
}
