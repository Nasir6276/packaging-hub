import { Box, Grid, Text, Stack, Container } from "@mantine/core";
import React from "react";

export default function GridSection() {
  return (
    <>
      <Box bg={"var(--ph-plain-white)"} py={50}>
        <Container size={1200} px={{ base: 24, xl: 0 }}>
          <Stack align="center">
            <Text
              fz={{ base: 38, md: 44 }}
              fw={{ base: 500, md: 700 }}
              c={"var(--ph-plain-black)"}
              ta={"center"}
              lh={{ base: "38px", md: "44px" }}
            >
              Explore Our Collections
            </Text>
            <Text
              fz={16}
              fw={400}
              c={"var(--ph-plain-black)"}
              ta={"center"}
              maw={700}
            >
              We believe in the power of a well-crafted bag to enhance your
              lifestyle. Explore our curated collection of premium bags that
              seamlessly blend style, functionality, and durability.
            </Text>
            <Grid mt={40} gutter={{ base: 20, md: 40 }}>
              {grid.map((name, index) => (
                <Grid.Col span={{ base: 6, md: 4, lg: 3 }} key={index}>
                  <Box
                    h={{ base: 200, md: 300 }}
                    w={"100%"}
                    bg={"var(--ph-black-shade)"}
                  ></Box>
                  <Text
                    mt={10}
                    fz={16}
                    fw={400}
                    c={"var(--ph-plain-black)"}
                    ta={"left"}
                    maw={700}
                  >
                    {name}
                  </Text>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

const grid = [
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
  "product name",
];
