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
        fz={12}
        fw={400}
        size="md"
        w={100}
      >
        Shop Now
      </Button>
    </>
  )
}
