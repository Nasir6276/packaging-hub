"use client";

import {
  // Box,
  Burger,
  CloseButton,
  Container,
  Drawer,
  Flex,
  Group,
  Image,
  List,
  // ListItem,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import WhiteLogo from "@/assets/logos/LOGO HORIZONTAL SECONDARY.svg";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import ShopNow from "../ShopNow";

export default function Header() {
  const [open, { toggle, close }] = useDisclosure();
  const [productOpen, setProductOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <Container
      size={1200}
      h={"100%"}
      style={{ borderBottom: "0.5px solid rgb(233 233 233 / 21%)" }}
      px={0}
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        px={{ base: 24, xl: 0 }}
        h={"100%"}
      >
        <Group>
          <Link href={"/"}>
            <Image src={WhiteLogo.src} alt="logo" h={35} />
          </Link>
        </Group>

        <Flex display={{ base: "none", md: "contents" }}>
          <Group gap={25}>
            {Object.entries(links).map(([name, href]) =>
              name !== "our packages" ? (
                <Text
                  key={name}
                  fz={16}
                  fw={400}
                  component={Link}
                  href={`/${href}`}
                  c="var(--ph-plain-white)"
                  visibleFrom="md"
                  tt="uppercase"
                >
                  {name}
                </Text>
              ) : (
                <Menu
                  key={name}
                  opened={opened}
                  onClose={() => setOpened(false)}
                  offset={4}
                  withinPortal
                  trigger="hover"
                >
                  <div
                    onMouseEnter={() => setOpened(true)}
                    onMouseLeave={() => setOpened(false)}
                  >
                    <MenuTarget>
                      <Group gap={5} style={{ cursor: "pointer" }}>
                        <Text
                          fz={16}
                          fw={400}
                          c="var(--ph-plain-white)"
                          visibleFrom="md"
                          tt="uppercase"
                        >
                          {name}
                        </Text>
                        <FaChevronDown
                          color="var(--ph-plain-white)"
                          size={18}
                          style={{
                            transform: opened
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.5s",
                          }}
                        />
                      </Group>
                    </MenuTarget>

                    <MenuDropdown bg={"var(--ph-dark-purple)"}>
                      {Object.entries(href).map(([childName, childHref]) => (
                        <MenuItem key={childName}>
                          <Text
                            fz={16}
                            fw={400}
                            component={Link}
                            href={`/${childHref}`}
                            c="var(--ph-plain-white)"
                            visibleFrom="md"
                            tt="uppercase"
                          >
                            {childName}
                          </Text>
                        </MenuItem>
                      ))}
                    </MenuDropdown>
                  </div>
                </Menu>
              ),
            )}
          </Group>
        </Flex>

        <Group visibleFrom="md">
          <ShopNow bgColor="var(--ph-light-purple)" textColor="#fff" />
        </Group>

        <Burger
          color={"var(--ph-plain-white)"}
          hiddenFrom="md"
          opened={open}
          onClick={toggle}
        />
      </Flex>

      <Drawer
        opened={open}
        onClose={close}
        position="right"
        size={"100%"}
        overlayProps={{ backgroundOpacity: 0.3, blur: 4 }}
        padding={"md"}
        withCloseButton={false}
        bg={"blue"}
      >
        <Group justify="space-between" mt={30}>
          <Link href={"/"}>
            <Image src={WhiteLogo.src} alt="logo" h={25} />
          </Link>

          <CloseButton onClick={close} size={"lg"} />
        </Group>

        <List mt={40} spacing={"lg"} size="md" listStyleType="none">
          <List.Item>
            <Text
              fz={16}
              fw={400}
              component={Link}
              c="var(--ph-plain-white)"
              tt="uppercase"
              href={"/"}
              onClick={close}
            >
              HOME
            </Text>
          </List.Item>
          <List.Item>
            <Text
              fz={16}
              fw={400}
              component={Link}
              c="var(--ph-plain-white)"
              tt="uppercase"
              href={"/about"}
              onClick={close}
            >
              ABOUT
            </Text>
          </List.Item>
          <List.Item
            onClick={() => setProductOpen(!productOpen)}
            style={{ cursor: "pointer" }}
          >
            <Group gap={20}>
              <Text fz={16} fw={400} c="var(--ph-plain-white)" tt="uppercase">
                OUR PACKAGES
              </Text>
              <FaChevronDown
                size={16}
                style={{
                  transform: productOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.5s",
                }}
              />
            </Group>
            {productOpen && (
              <List withPadding listStyleType="none" mt={20}>
                <List.Item>
                  <Text
                    fz={16}
                    fw={400}
                    component={Link}
                    c="var(--ph-plain-white)"
                    tt="uppercase"
                    href={"/cbd-boxes"}
                    onClick={close}
                  >
                    CBD Boxes
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    fz={16}
                    fw={400}
                    component={Link}
                    c="var(--ph-plain-white)"
                    tt="uppercase"
                    href={"/cosmetic-boxes"}
                    onClick={close}
                  >
                    cosmetics boxes
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    fz={16}
                    fw={400}
                    component={Link}
                    c="var(--ph-plain-white)"
                    tt="uppercase"
                    href={"/custom-apparel-boxes"}
                    onClick={close}
                  >
                    custom apparel boxes
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    fz={16}
                    fw={400}
                    component={Link}
                    c="var(--ph-plain-white)"
                    tt="uppercase"
                    href={"/food-boxes"}
                    onClick={close}
                  >
                    food & beverages boxes
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    fz={16}
                    fw={400}
                    component={Link}
                    c="var(--ph-plain-white)"
                    tt="uppercase"
                    href={"/gift-boxes"}
                    onClick={close}
                  >
                    gift boxes
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    fz={16}
                    fw={400}
                    component={Link}
                    c="var(--ph-plain-white)"
                    tt="uppercase"
                    href={"/retail-boxes"}
                    onClick={close}
                  >
                    retail boxes
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    fz={16}
                    fw={400}
                    component={Link}
                    c="var(--ph-plain-white)"
                    tt="uppercase"
                    href={"/sport-boxes"}
                    onClick={close}
                  >
                    sport packaging boxes
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    fz={16}
                    fw={400}
                    component={Link}
                    c="var(--ph-plain-white)"
                    tt="uppercase"
                    href={"/bakery-boxes"}
                    onClick={close}
                  >
                    bakery boxes
                  </Text>
                </List.Item>
              </List>
            )}
          </List.Item>
          <List.Item>
            <Text
              fz={16}
              fw={400}
              component={Link}
              c="var(--ph-plain-white)"
              tt="uppercase"
              href={"/gallery"}
              onClick={close}
            >
              GALLERY
            </Text>
          </List.Item>
        </List>

        <Group mt={40}>
          <ShopNow bgColor="var(--ph-light-purple)" textColor="#fff" />
        </Group>

        <Group gap={24} mt={40}>
          {socials.map((i, index) => (
            <Link key={index} href={i.href}>
              {i.icon}
            </Link>
          ))}
        </Group>
      </Drawer>
    </Container>
  );
}

const socials = [
  {
    href: "",
    icon: <FaFacebook size={20} color={"var(--ph-plain-white)"} />,
  },
  {
    href: "",
    icon: <FaSquareXTwitter size={20} color={"var(--ph-plain-white)"} />,
  },
  {
    href: "",
    icon: <FaInstagramSquare size={20} color={"var(--ph-plain-white)"} />,
  },
  {
    href: "",
    icon: <FaLinkedin size={20} color={"var(--ph-plain-white)"} />,
  },
  {
    href: "",
    icon: <IoLogoYoutube size={20} color={"var(--ph-plain-white)"} />,
  },
];

// const links = [
//   {
//     name: "Home",
//     href: "",
//   },
//   {
//     name: "About Us",
//     href: "about",
//   },
//   {
//     name: "Our Packages",
//     href: "packages",
//   },
// ];

const links = {
  home: "",
  "about us": "about",
  "our packages": {
    "CBD Boxes": "cbd-boxes",
    "Cosmetics Boxes": "cosmetic-boxes",
    "Custom Apparel Boxes": "custom-apparel-boxes",
    "food & beverages boxes": "food-boxes",
    "gift boxes": "gift-boxes",
    "retail boxes": "retail-boxes",
    "sport packaging boxes": "sport-boxes",
    "bakery boxes": "bakery-boxes",
  },
};
