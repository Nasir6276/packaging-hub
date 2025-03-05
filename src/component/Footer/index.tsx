import { Box, Container, Divider, Flex, Group, Image, Stack, Text } from "@mantine/core"
import React from "react"
import coloredLogo from "@/assets/logos/LOGO HORIZONTAL PRIMARY.svg"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io5"

export default function Footer() {
  return (
    <Box bg={"var(--plain-white)"} py={53}>
      <Container size={1200} px={0}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "flex-start", md: "space-between" }}
          align={{ base: "flex-start", md: "center" }}
          gap={40}
          px={{ base: 24, xl: 0 }}
        >
          <Flex direction={"column"} align={"flex-start"} gap={10}>
            <Link href={"/"}>
              <Image src={coloredLogo.src} alt="logo" h={25} />
            </Link>
            <Text maw={400} c={"var(--ph-plain-black)"} fz={{ base: 12, md: 16 }} fw={400}>
              We believe in the power of a well-crafted bag to enhance your lifestyle. Explore our
              curated collection of premium bags that seamlessly blend style, functionality, and
              durability.
            </Text>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            justify={{ base: "flex-start", md: "space-between" }}
            gap={60}
          >
            <QuickLinks title="Company" links={company} isBlankTarget />
            <QuickLinks title="Services" links={services} />
            <QuickLinks title="Legal" links={legal} />
          </Flex>
        </Flex>

        <Stack gap={25} mt={55} px={{ base: 24, xl: 0 }}>
          <Divider color="#E9E9E9" />

          <Flex
            direction={{ base: "column", md: "row" }}
            justify={{ base: "flex-start", md: "space-between" }}
            align={{ base: "flex-start", md: "center" }}
            gap={20}
          >
            <Text fz={{ base: 12, md: 16 }} fw={400}>
              &copy;2025 PackagingHub. All right reserved.
            </Text>

            <Group gap={24}>
              {socials.map((i, index) => (
                <Link key={index} href={i.href}>
                  {i.icon}
                </Link>
              ))}
            </Group>
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}

const socials = [
  {
    href: "",
    icon: <FaFacebook size={20} />,
  },
  {
    href: "",
    icon: <FaSquareXTwitter size={20} />,
  },
  {
    href: "",
    icon: <FaInstagramSquare size={20} />,
  },
  {
    href: "",
    icon: <FaLinkedin size={20} />,
  },
  {
    href: "",
    icon: <IoLogoYoutube size={20} />,
  },
]

const company = {
  bags: "/bags",
  accessories: "/accessories",
  blogs: "/blogs",
  contact: "/contact",
}

const services = {
  business: "/business",
  modification: "/modification",
  insurance: "/insurance",
  warranty: "/warranty",
}

const legal = {
  policy: "/policy",
  terms: "/terms",
  cookies: "/cookies",
  sitemap: "/sitemap",
}

interface QuickLinkProps {
  title: string
  links: Record<string, string>
  isBlankTarget?: boolean
}

const QuickLinks = ({ title, links, isBlankTarget = false }: QuickLinkProps) => {
  return (
    <Box>
      <Text fz={{ base: 12, md: 16 }} fw={500} c={"var(--ph-plain-black)"} tt={"uppercase"} mb={16}>
        {title}
      </Text>

      {Object.entries(links).map(([title, href]) => (
        <Stack key={title} gap={8}>
          <Text
            key={title}
            style={{ pointerEvents: href ? "auto" : "none" }}
            component={Link}
            href={href}
            target={isBlankTarget ? "_blank" : "_self"}
            tt={"capitalize"}
            c={"var(--ph-plain-black)"}
            fz={{ base: 12, md: 16 }}
            fw={400}
          >
            {title}
          </Text>
        </Stack>
      ))}
    </Box>
  )
}
