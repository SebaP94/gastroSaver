import { Text } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";

export const CardTitle = (props) => (
  <Text
    fontSize="3xl"
    fontWeight="semiBold"
    color="gray.600"
    lineHeight="normal"
    py={{ base: 5, lg: 10 }}
    textAlign={{ base: "center", lg: "left" }}
    {...props}
  ></Text>
);

export const CardWrapper = ({ children, side }) => (
  <Box
    display="grid"
    gridTemplateColumns={
      side === "left"
        ? { lg: "3fr 80px 1fr", md: "1fr" }
        : { lg: "1fr 80px 3fr", md: "1fr" }
    }
    p={{ base: 0, md: 5 }}
    py={{ base: 5, md: 0 }}
    alignItems="center"
    justifyContent={side}
  >
    {children}
  </Box>
);

export const CardActions = (props) => (
  <Box
    borderRadius="2xl"
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    boxSizing="border-box"
    minW={{ base: "2xs" }}
    py={{ base: 1, md: 4 }}
    {...props}
  >
    {props.children}
  </Box>
);
