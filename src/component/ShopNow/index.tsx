import { Button } from "@mantine/core";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";

type ShopNowProps = {
  bgColor: string;
  textColor: string;
};

export default function ShopNow({ bgColor, textColor }: ShopNowProps) {
  return (
    <>
      <Button
        leftSection={<FiShoppingBag />}
        variant="filled"
        c={textColor}
        color={bgColor}
        mt={"md"}
        fz={16}
        fw={400}
        size="md"
        // w={150}
      >
        Get Free Quote
      </Button>
    </>
  );
}
