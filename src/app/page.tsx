import { BackgroundImage, Box, Container, Flex, Image, Stack, Text } from "@mantine/core"
import heroImage from "@/assets/images/scracth.png"
import ShopNow from "@/component/ShopNow"
import WomanWithBag from "@/assets/images/Woman carrying totebag mockup.jpg"
import officeSpace from "@/assets/images/Office Space with Posters Mockup.jpg"
import paperBag from "@/assets/images/paperbag.png"

export default function Home() {
  return (
    <>
      <Box bg={"var(--ph-dark-purple)"} h={"100vh"} mah={800}>
        <Container size={1200} px={{ base: 24, xl: 0 }} h={"100%"}>
          <Flex align={"center"} justify={"center"} h={"100%"}>
            <Box maw={600}>
              <BackgroundImage src={heroImage.src} w={{ base: 500, md: 700 }} h={500}>
                <Flex align={"center"} justify={"center"} h={"100%"} p={"md"} direction={"column"}>
                  <Text
                    fw={800}
                    fz={{ base: 50, md: 80 }}
                    tt={"uppercase"}
                    c={"var(--ph-plain-white)"}
                    ta={"center"}
                  >
                    Packaging Hub
                  </Text>
                  <Text fw={400} fz={12} maw={400} c={"var(--ph-plain-white)"} ta={"center"}>
                    We believe in the power of a well-crafted packaging bags to enhance your
                    lifestyle. Explore our curated collection of premium bags that seamlessly blend
                    style, functionality, and durability.
                  </Text>
                  <ShopNow bgColor="var(--ph-light-purple)" textColor="var(--ph-plain-white)" />
                </Flex>
              </BackgroundImage>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg={"var(--ph-plain-white)"} py={100}>
        <Container size={1200} px={{ base: 24, xl: 0 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify={{ base: "center", md: "space-between" }}
            gap={60}
          >
            <Stack flex={1}>
              <Text fw={400} fz={12} tt={"uppercase"} ta={"left"} c={"var(--ph-plain-black)"}>
                Your Perfect Fit
              </Text>
              <Text
                fz={{ base: 38, md: 44 }}
                fw={{ base: 500, md: 700 }}
                c={"var(--ph-plain-black)"}
                ta={"left"}
                lh={{ base: "38px", md: "44px" }}
              >
                We believe in fashion that cares for the planet. Our commitment to sustainability
                goes beyond creating stylish bags – it&apos;s about making a positive impact
              </Text>
              <Text fz={12} fw={400} c={"var(--ph-black-shade)"} ta={"left"}>
                Choosing the right size is crucial when it comes to bags. Use our comprehensive size
                guide to ensure your bag is not only stylish but also perfectly suited to your
                needs. From compact crossbodies to spacious totes, we&apos;ve got the right size for
                every occasion.
              </Text>
            </Stack>
            <Flex flex={1} mih={{ base: 350, md: 500 }} w={"100%"}>
              <Image src={WomanWithBag.src} h={"100%"} w={"100%"} alt="womanWithToteBag" />
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box bg={"var(--ph-plain-white)"} py={{ base: 30, md: 50 }}>
        <Container size={1200} px={{ base: 24, xl: 0 }}>
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify={{ base: "center", md: "space-between" }}
            gap={60}
          >
            <Flex
              flex={1}
              mih={{ base: 350, md: 500 }}
              w={"100%"}
              align={"center"}
              justify={"center"}
            >
              <Image src={officeSpace.src} h={"100%"} w={"100%"} alt="womanWithToteBag" />
            </Flex>
            <Stack flex={1}>
              <Text
                fz={{ base: 38, md: 44 }}
                fw={{ base: 500, md: 700 }}
                c={"var(--ph-plain-black)"}
                ta={"left"}
                lh={{ base: "38px", md: "44px" }}
              >
                Adventure collection is designed to keep up with your dynamic lifestyle, offering
                durability without compromising on style.
              </Text>
              <Text fz={12} fw={400} c={"var(--ph-black-shade)"} ta={"left"}>
                Choosing the right size is crucial when it comes to bags. Use our comprehensive size
                guide to ensure your bag is not only stylish but also perfectly suited to your
                needs. From compact crossbodies to spacious totes, we&apos;ve got the right size for
                every occasion.
              </Text>
              <ShopNow bgColor="var(--ph-plain-black)" textColor="var(--ph-plain-white)" />
            </Stack>
          </Flex>
        </Container>
      </Box>

      <Box bg={"var(--ph-dark-purple)"} pt={{ base: 30, md: 50 }}>
        <Container size={1200} px={{ base: 24, xl: 0 }}>
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify={{ base: "center", md: "space-between" }}
            gap={40}
          >
            <Flex
              flex={1.3}
              mih={{ base: 350, md: 500 }}
              w={"100%"}
              align={"center"}
              justify={"center"}
            >
              <Image src={paperBag.src} h={"100%"} w={"100%"} alt="womanWithToteBag" />
            </Flex>
            <Flex
              direction={"column"}
              align={"flex-end"}
              flex={1}
              gap={"md"}
              justify={"space-around"}
              mih={{ base: 350, md: 500 }}
            >
              <Text
                fz={{ base: 38, md: 44 }}
                fw={{ base: 500, md: 700 }}
                c={"var(--ph-plain-white)"}
                ta={"left"}
                lh={{ base: "38px", md: "44px" }}
              >
                Whether you&apos;re seeking classic sophistication, urban chic, or a companion for
                you, Packaging Hub has the perfect bag for every occasion.
              </Text>
              <Box w={{ base: "100%", md: "50%" }}>
                <Text fz={12} fw={400} c={"var(--ph-black-shade)"} ta={"left"}>
                  Discover our current best-sellers and customer favorites. Each product is a
                  testament to Packaging Hub&apos;s commitment to combining style, durability, and
                  functionality.
                </Text>
                <ShopNow bgColor="var(--ph-plain-white)" textColor="var(--ph-plain-black)" />
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box bg={"var(--ph-black-shade-200)"} py={{ base: 50, md: 100 }}>
        <Container size={1200} px={{ base: 24, xl: 0 }}></Container>
      </Box>
    </>
  )
}
