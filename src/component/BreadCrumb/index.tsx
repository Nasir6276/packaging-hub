import { Box, Breadcrumbs, Container, Flex, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({ items }: { items: Items[] }) {
  const links = [{ title: "Home", href: "/" }]
    .concat(items)
    .map((item, index) => (
      <Text
        key={index}
        component={Link}
        href={item.href}
        c={index === 0 ? "var(--ph-plain-white)" : "var(--ph-light-purple)"}
        fw={index === 0 ? 400 : 600}
        fz={16}
        td={index === 0 ? "underline" : "none"}
      >
        {item.title}
      </Text>
    ));
  return (
    <>
      <Box bg={"var(--ph-dark-purple)"} px={0}>
        <Container size={1200} h={300} px={{ base: 20, md: 0 }} py={50}>
          <Flex
            direction={"column"}
            align={"flex-start"}
            justify={"flex-end"}
            h={"100%"}
          >
            <Text
              fw={800}
              fz={{ base: 50, md: 80 }}
              c={"var(--ph-plain-white)"}
              ta={"left"}
            >
              {items[0].title}
            </Text>
            <Breadcrumbs
              separator=">"
              style={{ separator: { color: "var(--ph-plain-white)" } }}
            >
              {links}
            </Breadcrumbs>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

interface Items {
  title: string;
  href: string;
  loading?: boolean;
}
