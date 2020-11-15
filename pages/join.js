import { Image, Text, Box } from "@chakra-ui/core";
import { Header } from "../components/Header";
import { ActionButton } from "../components/CustomButtons/ActionButton";
import { LeftCard } from "../components/join-page/LeftCard";
import { RightCard } from "../components/join-page/RightCard";

export default function Join() {
  return (
    <>
      <Header />
      <Box
        display="grid"
        gridTemplateColumns={{ md: "1fr 1fr", sm: "1fr" }}
        height="max-content"
      >
        <LeftCard />
        <RightCard />
      </Box>
    </>
  );
}
