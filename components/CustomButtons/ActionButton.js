import React, { useState } from "react";
import { Button, Text, Icon, Box } from "@chakra-ui/core";
import { BiLeftArrowCircle } from "react-icons/bi";
import Link from "next/link";

export const ActionButton = ({
  link,
  title,
  subtitle,
  color = "gray.700",
  hoverColor = "red.custom",
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={link}>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        my={2}
        px={{ base: 0, md: 1 }}
        variant="ghost"
        colorScheme="black"
        textAlign="left"
        w="auto"
        color={hover ? hoverColor : color}
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
          {title && (
            <Text fontWeight="bold" gridColumn="2/2" as="p">
              {title}
            </Text>
          )}
          {subtitle && (
            <Text fontWeight="medium" gridColumn="2/2" as="p">
              {subtitle}
            </Text>
          )}
        </Box>
      </Button>
    </Link>
  );
};
