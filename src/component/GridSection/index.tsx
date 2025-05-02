import { Box, Grid, Text, Stack, Container, Image } from "@mantine/core";
import React from "react";
import { Product } from "@/payload-types";

interface ProductGrid {
  products: Product[];
}

export default function GridSection({ products }: ProductGrid) {
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
            <Grid mt={40} gutter={{ base: 20, md: 40 }} w={"100%"}>
              {products && products.length > 0 ? (
                products.map((product, index) => (
                  <Grid.Col span={{ base: 6, md: 4, lg: 3 }} key={index}>
                    <Box
                      h={{ base: 200, md: 200 }}
                      w={"100%"}
                      bg={"var(--ph-black-shade)"}
                    >
                      <Image
                        src={product.banner}
                        alt="cbd"
                        h={"100"}
                        w={"100%"}
                      />
                    </Box>
                    <Text
                      mt={10}
                      fz={16}
                      fw={400}
                      c={"var(--ph-plain-black)"}
                      ta={"left"}
                      maw={700}
                    >
                      {product.title}
                    </Text>
                  </Grid.Col>
                ))
              ) : (
                <Text>There are no products</Text>
              )}
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
];
