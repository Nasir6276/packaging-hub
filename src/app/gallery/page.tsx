"use client";

import { BackgroundImage, Box, Container, Flex, Text } from "@mantine/core";
import React from "react";
import court from "@/assets/images/court.jpg";
import FeaturedProducts from "@/component/Featuredproducts";
import GridSection from "@/component/GridSection";

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

      <GridSection />

      <FeaturedProducts />
    </>
  );
}
