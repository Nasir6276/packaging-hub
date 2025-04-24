"use client";

import { BackgroundImage, Box, Container, Flex, Text } from "@mantine/core";
import React from "react";
// import WomanWithBag from "@/assets/images/womanHoldingToteBagBlack.png";
import MallPoster from "@/assets/images/MallPoster.jpg";
import womanWithToteBag from "@/assets/images/pinkBgBag.jpg";
import FeaturedProducts from "@/component/Featuredproducts";

export default function About() {
  return (
    <>
      <Box bg={"var(--ph-dark-purple)"}>
        <Container h={500} size={1200} p={50} top={"100px"}>
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
              About
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
      </Box>

      <Box bg={"var(--ph-plain-white)"}>
        <Container size={1200} p={{ base: 20, md: 50 }}>
          <Flex align={"center"} justify={"center"} h={"100%"} w={"100%"}>
            <Text fw={600} fz={50} c={"var(--ph-plain-black)"} ta={"left"}>
              At Packaging Hub, we want the right choice to be as easy as
              putting on a great T-shirt. That’s why we partner with the best,
              ethical factories around the world. Source only the finest
              materials. And share those stories with you—down to the true cost
              of every product we make. It’s a new way of doing things. We call
              it Radical Transparency.
            </Text>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Flex direction={{ base: "column", md: "row" }}>
          <Flex
            flex={1}
            align={"flex-end"}
            justify={"flex-end"}
            bg={"var(--ph-light-purple)"}
          >
            <BackgroundImage src={womanWithToteBag.src} h={600} maw={600} />
          </Flex>
          <Flex
            flex={1}
            p={50}
            align={"flex-start"}
            justify={"center"}
            bg={"var(--ph-black-shade)"}
            direction={"column"}
          >
            <Text
              fz={18}
              fw={500}
              c={"var(--ph-plain-black)"}
              ta={"left"}
              tt={"uppercase"}
            >
              Our Factories
            </Text>
            <Text
              fz={{ base: 38, md: 44 }}
              fw={{ base: 500, md: 800 }}
              c={"var(--ph-plain-black)"}
              ta={"left"}
              tt={"uppercase"}
            >
              Our ethical approach.
            </Text>

            <Text fz={16} fw={400} c={"var(--ph-plain-black)"} ta={"left"}>
              We spend months finding the best factories around the world—the
              same ones that produce your favorite designer labels. We visit
              them often and build strong personal relationships with the
              owners. Each factory is given a compliance audit to evaluate
              factors like fair wages, reasonable hours, and environment. Our
              goal? A score of 90 or above for every factory.
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Box>
        <BackgroundImage src={MallPoster.src} h={600} />
      </Box>

      <Box>
        <Flex direction={{ base: "column", md: "row" }}>
          <Flex
            flex={1}
            p={50}
            align={"flex-start"}
            justify={"center"}
            direction={"column"}
            bg={"var(--ph-dark-purple)"}
          >
            <Text
              fz={18}
              fw={500}
              c={"var(--ph-light-purple)"}
              ta={"left"}
              tt={"uppercase"}
            >
              Our Factories
            </Text>
            <Text
              fz={{ base: 38, md: 44 }}
              fw={{ base: 500, md: 800 }}
              c={"var(--ph-light-purple)"}
              ta={"left"}
              tt={"uppercase"}
            >
              Our ethical approach.
            </Text>

            <Text fz={16} fw={400} c={"var(--ph-light-purple)"} ta={"left"}>
              We spend months finding the best factories around the world—the
              same ones that produce your favorite designer labels. We visit
              them often and build strong personal relationships with the
              owners. Each factory is given a compliance audit to evaluate
              factors like fair wages, reasonable hours, and environment. Our
              goal? A score of 90 or above for every factory.
            </Text>
          </Flex>
          <Flex
            flex={1}
            align={"flex-start"}
            justify={"flex-start"}
            bg={"var(--ph-light-purple)"}
          >
            <BackgroundImage src={womanWithToteBag.src} h={600} maw={600} />
          </Flex>
        </Flex>
      </Box>

      <Box>
        <BackgroundImage src={MallPoster.src} h={600} />
      </Box>

      <FeaturedProducts />
    </>
  );
}
