import { Box, Container, Grid, Image, Stack, Text } from "@mantine/core";
import React from "react";
import flatLogo from "@/assets/logos/LOGO ISOLATED PRIMARY.png";
import blackBag from "@/assets/images/blackBag.png";

export default function FeaturedProducts() {
  return (
    <Box bg={"var(--ph-plain-white)"} py={{ base: 50, md: 80 }}>
      <Container size={1200} px={{ base: 24, xl: 0 }}>
        <Stack gap={20}>
          <Image src={flatLogo.src} alt="flatlogo" h={20} w={20} />
          <Text
            fz={{ base: 38, md: 44 }}
            fw={{ base: 500, md: 700 }}
            c={"var(--ph-plain-black)"}
            ta={"left"}
            lh={{ base: "38px", md: "44px" }}
          >
            Featured Products
          </Text>
          <Grid mt={30}>
            <Grid.Col span={{ sm: 12, md: 6, lg: 4 }}>
              <Stack gap={10}>
                <Image src={blackBag.src} alt="Black Bag" w={"100%"} h={400} />
                <Text fz={24} fw={500} c={"var(--ph-plain-black)"} ta={"left"}>
                  Styling Your Markly Bag
                </Text>
                <Text fz={16} fw={400} c={"var(--ph-plain-black)"} ta={"left"}>
                  Discover our current best-sellers and customer favorites. Each
                  product is a testament to Packaging Hub&apos;s commitment.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ sm: 12, md: 6, lg: 4 }}>
              <Stack gap={10}>
                <Image src={blackBag.src} alt="Black Bag" w={"100%"} h={400} />
                <Text fz={24} fw={500} c={"var(--ph-plain-black)"} ta={"left"}>
                  Styling Your Markly Bag
                </Text>
                <Text fz={16} fw={400} c={"var(--ph-plain-black)"} ta={"left"}>
                  Discover our current best-sellers and customer favorites. Each
                  product is a testament to Packaging Hub&apos;s commitment.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ sm: 12, md: 6, lg: 4 }}>
              <Stack gap={10}>
                <Image src={blackBag.src} alt="Black Bag" w={"100%"} h={400} />
                <Text fz={24} fw={500} c={"var(--ph-plain-black)"} ta={"left"}>
                  Styling Your Markly Bag
                </Text>
                <Text fz={16} fw={400} c={"var(--ph-plain-black)"} ta={"left"}>
                  Discover our current best-sellers and customer favorites. Each
                  product is a testament to Packaging Hub&apos;s commitment.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
