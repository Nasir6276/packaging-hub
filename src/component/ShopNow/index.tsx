import { Button } from "@mantine/core"
import React from "react"

type ShopNowProps = {
  bgColor: string
  textColor: string
}

export default function ShopNow({ bgColor, textColor }: ShopNowProps) {
  return (
    <>
      <Button
        variant="filled"
        c={textColor}
        color={bgColor}
        mt={"md"}
        fz={{ base: 12, md: 16 }}
        fw={400}
        size="md"
        w={150}
      >
        Shop Now
      </Button>
    </>
  )
}
