"use client";

import { Box, Grid, Text, Stack, Container, Image } from "@mantine/core";
import React, { useEffect } from "react";
import g1 from "@/assets/images/g1.jpeg";
import g2 from "@/assets/images/g2.jpeg";
import g3 from "@/assets/images/g3.jpeg";
import g4 from "@/assets/images/g4.jpeg";
import g5 from "@/assets/images/g5.jpeg";
import g6 from "@/assets/images/g6.jpeg";
import g7 from "@/assets/images/g7.jpeg";
import g8 from "@/assets/images/g8.jpeg";
import "./gridsection.css";
import { Product } from "../../payload-types";

export default function GridSection({ products }: { products: Product[] }) {
  useEffect(() => {
    products.map((i) => {
      const image = i?.banner;
      console.log(i);
    });
  });

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
              fw={500}
              c={"var(--ph-plain-black)"}
              ta={"center"}
              maw={700}
            >
              We believe in the power of a well-crafted bag to enhance your
              lifestyle. Explore our curated collection of premium bags that
              seamlessly blend style, functionality, and durability.
            </Text>
            <Grid mt={40} gutter={{ base: 20, md: 40 }} w={"100%"}>
              {grid.map((i, index) => (
                <Grid.Col span={{ base: 6, md: 3, lg: 3 }} key={index}>
                  <div className="card">
                    <div className="card-inner">
                      <div className="card-front">
                        <img src={i.image.src} alt="image" />
                      </div>
                      <div
                        className="card-back"
                        style={{
                          background: i.color,
                        }}
                      >
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Deleniti explicabo sequi quisquam cum autem
                          aliquam delectus, officia porro.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Text
                    mt={10}
                    fz={16}
                    fw={400}
                    c={"var(--ph-plain-black)"}
                    ta={"left"}
                    maw={700}
                    tt={"capitalize"}
                  >
                    {i.name}
                  </Text>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
          {products.map((product, index) => {
            return (
              <div key={index}>
                <Text>{product.title}</Text>
                <Image
                  src={
                    typeof product.banner === "string"
                      ? product.banner
                      : (product.banner?.url ?? null)
                  }
                  alt={product.title}
                  w={300}
                  h={300}
                  radius="md"
                  fit="contain"
                />
                <Text>{product.desc}</Text>
              </div>
            );
          })}
        </Container>
      </Box>
    </>
  );
}

const grid = [
  {
    name: "CBD Boxes",
    image: g1,
    color: "#2D1E41",
  },
  {
    name: "Cosmetics Boxes",
    image: g2,
    color: "#BD6FF5",
  },
  {
    name: "Custom Apparel Boxes",
    image: g3,
    color: "#E6D700",
  },
  {
    name: "gift boxes",
    image: g4,
    color: "#0C0C0C",
  },
  {
    name: "retail boxes",
    image: g5,
    color: "#FFA896",
  },
  {
    name: "sport packaging boxes",
    image: g6,
    color: "#B38000",
  },
  {
    name: "bakery boxes",
    image: g7,
    color: "#D4DE95",
  },
  {
    name: "food & beverages boxes",
    image: g8,
    color: "#4666B4",
  },
];
