"use client";

import { Box, Container, Flex, Image, Stepper, Text } from "@mantine/core";
import React, { useState } from "react";
import paperBag from "@/assets/images/paperbag.png";

export default function OrderSteps() {
  const [active, setActive] = useState(0);

  return (
    <Box bg={"var(--ph-light-purple)"} py={{ base: 50, md: 100 }}>
      <Container size={1200} px={{ base: 24, xl: 0 }}>
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify={{ base: "center", md: "space-between" }}
          gap={10}
        >
          <Flex
            flex={1}
            mih={{ base: 350, md: 500 }}
            w={"100%"}
            align={"center"}
            justify={"center"}
            display={{ base: "none", md: "block" }}
          >
            <Image
              src={paperBag.src}
              h={"100%"}
              w={"100%"}
              alt="womanWithToteBag"
            />
          </Flex>
          <Flex
            direction={"column"}
            flex={1}
            gap={"md"}
            justify={"space-around"}
          >
            <Text
              fz={{ base: 38, md: 44 }}
              fw={{ base: 500, md: 700 }}
              c={"var(--ph-plain-white)"}
              ta={"left"}
              lh={{ base: "38px", md: "44px" }}
            >
              Order placing Steps
            </Text>
            <Stepper
              active={active}
              onStepClick={setActive}
              allowNextStepsSelect={false}
              orientation="vertical"
              mt={10}
              size="xl"
              color="var(--ph-dark-purple)"
            >
              {orderData.map((i) => (
                <Stepper.Step
                  label={i.label}
                  description={i.desc}
                  key={i.label}
                  styles={{
                    stepLabel: {
                      color: "var(--ph-plain-white)",
                      fontSize: "18px",
                      fontWeight: "700",
                    },
                    stepDescription: {
                      color: "var(--ph-plain-white)",
                      fontSize: "16px",
                    },
                    stepIcon: {
                      backgroundColor: "transparent",
                      background: "transparent",
                      color: "#fff",
                    },
                  }}
                />
              ))}
            </Stepper>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const orderData = [
  {
    label: "Submit your Order",
    desc: "Visit the website and submit your details to get the order started.",
  },
  {
    label: "Get free Quote",
    desc: "Will send you a custom quote through email.",
  },
  {
    label: "Confirm Order",
    desc: "Go ahead and confirm the order if the details match the requirements.",
  },
  {
    label: "Design Stage",
    desc: "We’ll create a custom packaging design and get approval.",
  },
  {
    label: "Production Stage",
    desc: "After approval, we’ll send the design to production.",
  },
  {
    label: "Shipping Stage",
    desc: "When the packaging boxes are ready, we’ll ship it to you",
  },
];
