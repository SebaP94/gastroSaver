import React, { useState } from "react";
import { Image, Box } from "@chakra-ui/core";
import { MenuItem } from "./MenuItem";
import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  {
    label: "Dołącz się",
    link: "/join",
  },
  {
    label: "Jak to działa",
    link: "/how-it-works",
  },
  // {
  //   label: "Regulamin",
  //   link: "terms-and-conditions",
  // },
];

export const Header = (props) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <Box
      as="header"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignContent="center"
    >
      <Link href="/">
        <a>
          <Image
            src="/logo.png"
            alt="Gastro saver"
            objectFit="contain"
            maxHeight={{ base: "100px", md: "150px" }}
          />
        </a>
      </Link>
      {/* Menu */}
      <Box
        as="ul"
        display={{ base: "none", md: "inline-flex" }}
        flexDirection="row"
        alignItems="center"
        listStyleType="none"
      >
        {menuItems.map((menuItem, i) => (
          <MenuItem key={i} isActive={router.pathname === menuItem.link}>
            <Link href={menuItem.link}>
              <a>{menuItem.label}</a>
            </Link>
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
};
