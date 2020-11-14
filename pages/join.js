import { Image, Text, Box } from "@chakra-ui/core";
import { Header } from "../components/Header";
import { ActionButton } from "../components/CustomButtons/ActionButton";

export default function Join() {
  return (
    <>
      <Header />
      <Box
        display="grid"
        gridTemplateColumns={{ md: "1fr 1fr", sm: "1fr" }}
        p={5}
        height="max-content"
      >
        <Box
          display="grid"
          gridTemplateColumns={{ lg: "3fr 80px 1fr", md: "1fr" }}
          p={5}
          alignItems="center"
        >
          <Box
            w="full"
            gridColumn={{ lg: "1/3", base: "1" }}
            gridRow={{ lg: "1", base: "2" }}
          >
            <Text
              fontSize="md"
              fontWeight="normal"
              color="gray.600"
              textAlign={{ base: "center", lg: "left" }}
              pt={{ base: 5, lg: 10 }}
            >
              Prowadze punkt gastronomiczny
            </Text>
            <Text
              fontSize="3xl"
              fontWeight="semiBold"
              color="gray.600"
              lineHeight="normal"
              pb={{ base: 5, lg: 10 }}
              textAlign={{ base: "center", lg: "left" }}
            >
              Szukam Wsparcia
            </Text>
            <Box
              bgColor="teal.200"
              borderRadius="2xl"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              py={{ base: 1, md: 4 }}
              px={{ base: 4, md: 8 }}
              boxSizing="border-box"
            >
              <ActionButton
                title="Dowiedz się"
                subtitle="jak mozemy ci pomóc"
                link="/how-it-works"
              ></ActionButton>
              <ActionButton
                title="Dołącz"
                subtitle="do akcji"
                link="/join"
              ></ActionButton>
            </Box>
          </Box>
          <Image
            src="/img/chief.png"
            zIndex="2"
            gridColumn={{ lg: "2/4", base: "1" }}
            gridRow="1"
            maxHeight={{ base: "40vh", lg: "60vh" }}
            margin="auto"
          ></Image>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{ lg: "1fr 80px 3fr", md: "1fr" }}
          p={5}
          alignItems="center"
        >
          <Box
            w="full"
            gridColumn={{ lg: "2/4", md: "1" }}
            gridRow={{ lg: "1", base: "2" }}
            justifyContent="right"
          >
            <Text
              fontSize="3xl"
              fontWeight="semiBold"
              color="gray.600"
              lineHeight="normal"
              pt={{ base: 5, lg: 10 }}
              pb={{ base: 5, lg: 10 }}
              pl={{ base: "unset", lg: 24 }}
              textAlign={{ base: "center", lg: "left" }}
            >
              Chcę pomóc
            </Text>
            <Box
              pl={{ base: 4, lg: 20 }}
              bgColor="red.custom"
              borderRadius="2xl"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              py={4}
              boxSizing="border-box"
              gridColumn={{ lg: "1/3", base: "1" }}
              gridRow={{ lg: "1", base: "2" }}
            >
              <ActionButton
                title="Sprawdź"
                subtitle="jak mozesz pomóc"
                link="/how-it-works"
                color="white"
                hoverColor="teal.200"
              ></ActionButton>
              <ActionButton
                title="Wspomóz darowizną"
                link="/join"
                color="white"
                hoverColor="teal.200"
              ></ActionButton>
            </Box>
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
        </Box>
      </Box>
    </>
  );
}
