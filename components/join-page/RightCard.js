import { Image, Text, Box } from "@chakra-ui/core";
import { ActionButton } from "../CustomButtons/ActionButton";
import { CardWrapper, CardActions, CardTitle } from "./CardComponents";

export const RightCard = () => {
  const side = "right";
  return (
    <>
      <CardWrapper side="right">
        <Box
          w="full"
          gridColumn={{ lg: "2/4", md: "1" }}
          gridRow={{ lg: "1", base: "2" }}
          justifyContent={side}
        >
          <CardTitle pl={{ base: "unset", lg: 24 }}>Chcę pomóc</CardTitle>
          <CardActions
            pl={{ base: 4, lg: 20 }}
            gridColumn={{ lg: "1/3", base: "1" }}
            gridRow={{ lg: "1", base: "2" }}
            bgColor="red.custom"
          >
            <ActionButton
              title="Sprawdź"
              subtitle="jak mozesz pomóc"
              link="/how-it-works"
              color="white"
              hoverColor="teal.200"
            ></ActionButton>
            <ActionButton
              title="Wesprzyj"
              link="/join"
              color="white"
              hoverColor="teal.200"
            ></ActionButton>
          </CardActions>
        </Box>
        <Image
          src="/img/customer.png"
          zIndex="2"
          gridColumn="1/3"
          gridRow="1"
          gridColumn={{ lg: "1/3", base: "1" }}
          maxHeight={{ base: "40vh", lg: "60vh" }}
          margin="auto"
        ></Image>
      </CardWrapper>
    </>
  );
};
