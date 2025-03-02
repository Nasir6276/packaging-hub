import { Container, Flex, Group, Image, Text } from "@mantine/core"
import React from "react"
import WhiteLogo from "@/assets/logos/LOGO HORIZONTAL SECONDARY.svg"
import Link from "next/link"
import { FiShoppingBag } from "react-icons/fi"

export default function Header() {
  return (
    <Container size={1200} h={"100%"}>
      <Flex justify={"space-between"} align={"center"} px={{ base: 24, xl: 0 }} h={"100%"}>
        <Group>
          <Link href={"/"}>
            <Image src={WhiteLogo.src} alt="logo" h={25} />
          </Link>
        </Group>
        <Group gap={25}>
          {links.map((link) => (
            <Text
              key={link.name}
              fz={12}
              fw={500}
              component={Link}
              href={`/${link.href}`}
              c="var(--ph-plain-white)"
              visibleFrom="md"
              tt="uppercase"
              //   style={{
              //     transition: "color 0.2s ease-in-out",
              //     "&:hover": {
              //       color: "var(--ph-light-purple)",
              //     },
              //   }}
            >
              {link.name}
            </Text>
          ))}
        </Group>
        <Group>
          <Link href={"/"}>
            <FiShoppingBag size={20} color={"var(--ph-plain-white)"} />
          </Link>
        </Group>
      </Flex>
    </Container>
  )
}

const links = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "Bags",
    href: "bags",
  },
  {
    name: "Accessories",
    href: "accessories",
  },
  {
    name: "Blog",
    href: "blog",
  },
  {
    name: "Contact",
    href: "contact",
  },
]
