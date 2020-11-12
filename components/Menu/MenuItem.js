import React, { useState } from "react";
import { Text } from "@chakra-ui/core";

export const MenuItem = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <Text
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      fontSize="2xl"
      fontWeight="bold"
      position="relative"
      color="gray.600"
      as="li"
      mx={3}
      _hover={{ color: "red.custom", cursor: "pointer" }}
    >
      {props.children}
    </Text>
  );
};
