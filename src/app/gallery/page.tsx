"use client";

import {
  BackgroundImage,
  Box,
  Container,
  Flex,
  Grid,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import court from "@/assets/images/court.jpg";
import FeaturedProducts from "@/component/Featuredproducts";

export default function Gallery() {
  return (
    <>
      <Box bg={"var(--ph-plain-white)"}>
        {/* <Container size={1200} h={"100%"} top={"100px"}> */}
        <BackgroundImage src={court.src} w={"100%"} h={500} p={"50px"}>
          <Container size={1200} h={"100%"} top={"100px"}>
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
                Gallery
              </Text>
              <Text
                fw={400}
                fz={16}
                maw={400}
                c={"var(--ph-plain-white)"}
                ta={"left"}
              >
                We believe in the power of a well-crafted bag to enhance your
                lifestyle. Explore our curated collection of premium bags that
                seamlessly blend style, functionality, and durability.
              </Text>
            </Flex>
          </Container>
        </BackgroundImage>
        {/* </Container> */}
      </Box>

      <Box bg={"var(--ph-plain-white)"} py={{ base: 50, md: 100 }}>
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
          </Stack>
          <Grid mt={40}>
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
        </Container>
      </Box>

      <FeaturedProducts />
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
