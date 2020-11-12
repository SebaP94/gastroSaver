import React, { useState } from "react";
import { Text, Divider, Button } from "@chakra-ui/core";

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
      transition="all .2s ease-in"
    >
      {props.children}
      <Divider
        borderBottomWidth={3}
        opacity="1"
        width="110%"
        position="absolute"
        right="-5%"
        transition="all .2s ease-in"
        borderBottomColor={
          hover || props.isActive ? "red.custom" : "transparent"
        }
      />
    </Text>
  );
};
