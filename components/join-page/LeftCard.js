import { Image, Flex, Box, Center, Button } from "@chakra-ui/core";
import { FormControl, FormLabel, Input } from "@chakra-ui/core";
import {
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/core";

import { ActionButton } from "../CustomButtons/ActionButton";
import { CardWrapper, CardTitle, CardActions } from "./CardComponents";

export const LeftCard = () => {
  const side = "left";
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CardWrapper side="left">
        <Box
          w="full"
          gridColumn={{ lg: "1/3", base: "1" }}
          gridRow={{ lg: "1", base: "2" }}
        >
          <CardTitle>Szukam Wsparcia</CardTitle>
          <CardActions px={{ base: 4, md: 8 }} bgColor="teal.200">
            <ActionButton
              title="Dowiedz się"
              subtitle="jak mozemy ci pomóc"
              link="/how-it-works"
            ></ActionButton>
            <ActionButton
              title="Dołącz"
              subtitle="do akcji"
              link="/join"
              onClick={onOpen}
            ></ActionButton>
          </CardActions>
        </Box>
        <Image
          src="/img/chief.png"
          zIndex="2"
          gridColumn={{ lg: "2/4", base: "1" }}
          gridRow="1"
          maxHeight={{ base: "40vh", lg: "60vh" }}
          margin="auto"
        ></Image>
      </CardWrapper>
      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <Flex
              direction="column"
              justifyContent="start"
              alignItems="center"
              h="full"
              py={20}
            >
              <Button
                px={20}
                py={5}
                m={5}
                colorScheme="teal"
                variant="solid"
                size="xl"
                minW={{ base: "2xs", md: "md" }}
              >
                Zarejestruj się
              </Button>
              <Button
                px={20}
                py={5}
                m={5}
                colorScheme="gray"
                variant="outline"
                size="xl"
                minW={{ base: "2xs", md: "md" }}
              >
                Zaloguj się
              </Button>
            </Flex>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
