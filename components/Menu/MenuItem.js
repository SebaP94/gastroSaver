import React, { useState } from "react";
import { Text } from "@chakra-ui/core";
import styled from "@emotion/styled";

const Divider = styled.div`
  height: 2px;
  width: 110%;
  position: absolute;
  left: -5%;
  background-color: ${(props) => (props.hover ? "red" : "transparent")};
`;
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
      <Divider hover={hover} />
    </Text>
  );
};
