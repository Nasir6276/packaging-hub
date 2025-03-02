import { Box, Container, Flex } from "@mantine/core"
import React from "react"

export default function Footer() {
  return (
    <Box bg={"var(--plain-white)"}>
      <Container size={1200} p={"xl"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "flex-start", md: "space-between" }}
          gap={40}
        ></Flex>
      </Container>
    </Box>
  )
}
