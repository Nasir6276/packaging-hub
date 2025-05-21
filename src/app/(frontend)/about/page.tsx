// "use client";

import {
  BackgroundImage,
  Box,
  Container,
  Flex,
  Image,
  Text,
  Stack,
} from "@mantine/core";
import React from "react";
// import WomanWithBag from "@/assets/images/womanHoldingToteBagBlack.png";
import MallPoster from "@/assets/images/MallPoster.jpg";
import WomanWithBag from "@/assets/images/pinkBgBag.jpg";
import FeaturedProducts from "@/component/Featuredproducts";
import Breadcrumb from "@/component/BreadCrumb";
import officeSpace from "@/assets/images/Office Space with Posters Mockup.jpg";
import ShopNow from "@/component/ShopNow";

export default function About() {
  return (
    <>
      <Breadcrumb items={[{ title: "About", href: "/about" }]} />

      <Box bg={"var(--ph-plain-white)"}>
        <Container
          size={1200}
          py={{ base: 20, md: 50 }}
          px={{ base: 20, md: 0 }}
        >
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

      <Box bg={"var(--ph-plain-white)"} py={100}>
        <Container size={1200} px={{ base: 24, xl: 0 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify={{ base: "center", md: "space-between" }}
            gap={{ base: 20, md: 60 }}
          >
            <Stack flex={1}>
              <Text
                fw={400}
                fz={16}
                tt={"uppercase"}
                ta={"left"}
                c={"var(--ph-plain-black)"}
              >
                Your Perfect Fit
              </Text>
              <Text
                fz={{ base: 38, md: 44 }}
                fw={{ base: 500, md: 700 }}
                c={"var(--ph-plain-black)"}
                ta={"left"}
                lh={{ base: "38px", md: "44px" }}
              >
                We believe in fashion that cares for the planet. Our commitment
                to sustainability goes beyond creating stylish bags – it&apos;s
                about making a positive impact
              </Text>
              <Text fz={16} fw={400} c={"var(--ph-black-shade)"} ta={"left"}>
                Choosing the right size is crucial when it comes to bags. Use
                our comprehensive size guide to ensure your bag is not only
                stylish but also perfectly suited to your needs. From compact
                crossbodies to spacious totes, we&apos;ve got the right size for
                every occasion.
              </Text>
            </Stack>
            <Flex flex={1} mih={{ base: 350, md: 500 }} w={"100%"}>
              <Image
                src={WomanWithBag.src}
                h={"100%"}
                w={"100%"}
                alt="womanWithToteBag"
              />
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box bg={"var(--ph-plain-white)"} py={{ base: 50, md: 100 }}>
        <Container size={1200} px={{ base: 24, xl: 0 }}>
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify={{ base: "center", md: "space-between" }}
            gap={{ base: 20, md: 60 }}
          >
            <Flex
              flex={1}
              mih={{ base: 350, md: 500 }}
              w={"100%"}
              align={"center"}
              justify={"center"}
            >
              <Image
                src={officeSpace.src}
                h={"100%"}
                w={"100%"}
                alt="womanWithToteBag"
              />
            </Flex>
            <Stack flex={1}>
              <Text
                fz={{ base: 38, md: 44 }}
                fw={{ base: 500, md: 700 }}
                c={"var(--ph-plain-black)"}
                ta={"left"}
                lh={{ base: "38px", md: "44px" }}
              >
                Adventure collection is designed to keep up with your dynamic
                lifestyle, offering durability without compromising on style.
              </Text>
              <Text fz={16} fw={400} c={"var(--ph-black-shade)"} ta={"left"}>
                Choosing the right size is crucial when it comes to bags. Use
                our comprehensive size guide to ensure your bag is not only
                stylish but also perfectly suited to your needs. From compact
                crossbodies to spacious totes, we&apos;ve got the right size for
                every occasion.
              </Text>
              <ShopNow
                bgColor="var(--ph-plain-black)"
                textColor="var(--ph-plain-white)"
              />
            </Stack>
          </Flex>
        </Container>
      </Box>

      <FeaturedProducts />
    </>
  );
}
