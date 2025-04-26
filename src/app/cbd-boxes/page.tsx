"use client";

import Breadcrumb from "@/component/BreadCrumb";
import FeaturedProducts from "@/component/Featuredproducts";
import GridSection from "@/component/GridSection";
import { Box, Container, Stack, Text } from "@mantine/core";
import React from "react";

export default function CBDBoxes() {
  return (
    <>
      {/* <Box bg={"var(--ph-dark-purple)"}>
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
      </Box> */}
      <Breadcrumb items={items} />

      <GridSection />

      <Box bg={"var(--ph-plain-white)"} py={50}>
        <Container size={1200} px={{ base: 24, xl: 0 }}>
          <Stack mb={50}>
            <Text
              fz={{ base: 38, md: 44 }}
              fw={{ base: 500, md: 700 }}
              c={"var(--ph-plain-black)"}
              ta={"left"}
              lh={{ base: "38px", md: "44px" }}
            >
              CBD Go-To Become The Go-To Product
            </Text>
            <Text
              fz={{ base: 16, md: 20 }}
              fw={400}
              c={"var(--ph-plain-black)"}
              ta={"left"}
            >
              CBD has increasingly become a go-to product for assisting with
              various medical issues. Research and anecdotal evidence have shown
              it to provide many benefits, including pain relief, as a treatment
              of anxiety, for use as skincare, and more. <br /> <br />
              Moreover, how can you ignore the layout of this beneficial product
              that helps the user to gain optimal health? You have to find a
              suitable packaging manufacturing company for your needs.
              Therefore, you landed on the right page; Packaging Hub will assist
              you.
            </Text>
          </Stack>
          <Stack mb={50}>
            <Text
              fz={{ base: 38, md: 44 }}
              fw={{ base: 500, md: 700 }}
              c={"var(--ph-plain-black)"}
              ta={"left"}
              lh={{ base: "38px", md: "44px" }}
            >
              CBD Go-To Become The Go-To Product
            </Text>
            <Text
              fz={{ base: 16, md: 20 }}
              fw={400}
              c={"var(--ph-plain-black)"}
              ta={"left"}
            >
              CBD has increasingly become a go-to product for assisting with
              various medical issues. Research and anecdotal evidence have shown
              it to provide many benefits, including pain relief, as a treatment
              of anxiety, for use as skincare, and more. <br /> <br />
              Moreover, how can you ignore the layout of this beneficial product
              that helps the user to gain optimal health? You have to find a
              suitable packaging manufacturing company for your needs.
              Therefore, you landed on the right page; Packaging Hub will assist
              you.
            </Text>
          </Stack>
          <Stack>
            <Text
              fz={{ base: 38, md: 44 }}
              fw={{ base: 500, md: 700 }}
              c={"var(--ph-plain-black)"}
              ta={"left"}
              lh={{ base: "38px", md: "44px" }}
            >
              CBD Go-To Become The Go-To Product
            </Text>
            <Text
              fz={{ base: 16, md: 20 }}
              fw={400}
              c={"var(--ph-plain-black)"}
              ta={"left"}
            >
              CBD has increasingly become a go-to product for assisting with
              various medical issues. Research and anecdotal evidence have shown
              it to provide many benefits, including pain relief, as a treatment
              of anxiety, for use as skincare, and more. <br /> <br />
              Moreover, how can you ignore the layout of this beneficial product
              that helps the user to gain optimal health? You have to find a
              suitable packaging manufacturing company for your needs.
              Therefore, you landed on the right page; Packaging Hub will assist
              you.
            </Text>
          </Stack>
        </Container>
      </Box>

      <FeaturedProducts />
    </>
  );
}

const items = [{ title: "CBD Boxes", href: "cbd-boxes" }];
