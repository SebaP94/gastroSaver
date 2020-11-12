import React, { useState } from "react";
import { Button, Text, Icon, Box } from "@chakra-ui/core";
import { BiLeftArrowCircle } from "react-icons/bi";
import Link from "next/link";

export const ActionButton = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={props.link}>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        my={2}
        variant="ghost"
        colorScheme="black"
        textAlign="left"
        w="auto"
        color={hover ? "red.custom" : "gray.700"}
        _focus={{
          boxShadow: "none",
          outline: "none",
          color: "red.custom",
        }}
      >
        <Icon
          gridColumn="1/1"
          gridRow="1/-1"
          as={BiLeftArrowCircle}
          boxSize={12}
          px={2}
        />
        <Box>
          {props.title && (
            <Text fontWeight="bold" gridColumn="2/2" as="p">
              {props.title}
            </Text>
          )}
          {props.subtitle && (
            <Text fontWeight="medium" gridColumn="2/2" as="p">
              {props.subtitle}
            </Text>
          )}
        </Box>
      </Button>
    </Link>
  );
};
