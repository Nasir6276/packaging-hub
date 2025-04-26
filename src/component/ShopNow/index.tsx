import {
  Button,
  Group,
  Modal,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";

type ShopNowProps = {
  bgColor: string;
  textColor: string;
};

export default function ShopNow({ bgColor, textColor }: ShopNowProps) {
  const [opened, { open, close }] = useDisclosure(false);

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
        onClick={open}
      >
        Get Free Quote
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={"Get Free Quote"}
        size={"lg"}
      >
        <Stack gap={20}>
          <Group grow gap={20}>
            <TextInput placeholder="Full Name" size="lg" />
            <TextInput placeholder="Email" size="lg" />
          </Group>
          <Group grow gap={20}>
            <TextInput placeholder="Phone Number" size="lg" />
            <TextInput placeholder="Company" size="lg" />
          </Group>
          <Group gap={20} grow>
            <Select
              size="lg"
              placeholder="Product"
              data={[
                "CBD Boxes",
                "cosmetics boxes",
                "custom apparel boxes",
                "food & beverages boxes",
                "gift boxes",
                "retail boxes",
                "sport packaging boxes",
                "bakery boxes",
              ]}
            />
            <Select
              size="lg"
              placeholder="Units"
              data={[
                "100 - 500 units",
                "500 - 1000 units",
                "1000 - 5000 units",
                "5000 - 10,000 units",
                "10,000 - 50,000 units",
                "50,000 - 100,000 units",
                "100,000 units above",
              ]}
            />
          </Group>
          <Group grow>
            <Textarea
              size="lg"
              placeholder="Brief Description And Requirements"
              resize="vertical"
              withAsterisk
            />
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
