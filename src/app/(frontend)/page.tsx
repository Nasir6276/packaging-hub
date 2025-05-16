"use client";

import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  // Grid,
  // Group,
  Image,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import heroImage from "@/assets/images/scracth.png";
import ShopNow from "@/component/ShopNow";
// import WomanWithBag from "@/assets/images/pinkBgBag.jpg";
// import officeSpace from "@/assets/images/Office Space with Posters Mockup.jpg";
// import mallPoster from "@/assets/images/MallPoster.jpg";
import flatLogo from "@/assets/logos/LOGO ISOLATED PRIMARY.png";
import blackBox from "@/assets/images/boxBlack.png";
import womanWithBlackBox from "@/assets/images/womanHoldingBoxBlack.png";
import womanWithToteBag from "@/assets/images/womanHoldingToteBagBlack.png";
import blackPaperBag from "@/assets/images/blackPaperbag.png";
// import purpleBag from "@/assets/images/purpleBag.png";
import box from "@/assets/images/box (1).png";
import box2 from "@/assets/images/box (2).png";
import scroll from "@/assets/images/scroll.png";
import eco from "@/assets/images/eco-packaging.png";
import NewsLetterBg from "@/assets/images/Rectangle.png";
import { Carousel } from "@mantine/carousel";
import classes from "./demo.module.css";
// import { LuSquareArrowRight } from "react-icons/lu";
// import { LuSquareArrowLeft } from "react-icons/lu";
import FeaturedProducts from "@/component/Featuredproducts";
import GridSection from "@/component/GridSection";
import OrderSteps from "@/component/OrderSteps";

export default function Home() {
  return (
    <>
      {/* MAIN */}
      <Box
        bg={"var(--ph-dark-purple)"}
        h={"100vh"}
        mah={800}
        style={{
          background:
            "radial-gradient(circle, rgba(240, 240, 240, 0.8) 20%, transparent 20%)",
          // boxShadow: "inset 0 0 100px rgba(250, 245, 245, 0.5)",
        }}
      >
        <Container
          size={1200}
          px={{ base: 24, xl: 0 }}
          h={"100%"}
          top={"100px"}
        >
          <Flex align={"center"} justify={"center"} h={"90%"}>
            <Box maw={600} px={0}>
              <BackgroundImage
                src={heroImage.src}
                // w={{ base: 500, md: 700 }}
                w={"100%"}
                h={500}
              >
                <Flex
                  align={"center"}
                  justify={"center"}
                  h={"100%"}
                  // w={{ base: 500, md: 700 }}
                  direction={"column"}
                >
                  <Text
                    fw={800}
                    fz={{ base: 50, md: 80 }}
                    tt={"uppercase"}
                    c={"var(--ph-plain-white)"}
                    ta={"center"}
                  >
                    Packaging Hub
                  </Text>
                  <Text
                    fw={400}
                    fz={16}
                    maw={400}
                    c={"var(--ph-plain-white)"}
                    ta={"center"}
                  >
                    We believe in the power of a well-crafted packaging bags to
                    enhance your lifestyle. Explore our curated collection of
                    premium bags that seamlessly blend style, functionality, and
                    durability.
                  </Text>
                  <ShopNow
                    bgColor="var(--ph-light-purple)"
                    textColor="var(--ph-plain-white)"
                  />
                </Flex>
              </BackgroundImage>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* SERVICES */}
      {/* <Box bg={"var(--ph-plain-white)"} py={100}>
        <Container size={1200} px={{ base: 24, xl: 0 }}>
          <Group w={"100%"}>
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              w={"100%"}
              gap={20}
            >
              <Text
                fz={{ base: 38, md: 44 }}
                fw={{ base: 500, md: 700 }}
                c={"var(--ph-plain-black)"}
                ta={"center"}
                lh={{ base: "38px", md: "44px" }}
              >
                Custom Packaging Boxes With Excellent Services
              </Text>
              <Text fz={16} fw={400} c={"var(--ph-black-shade)"} ta={"center"}>
                A packaging company that designs and manufactures high-quality
                boxes at reasonable prices is available to serve you.
              </Text>
              <Grid gutter={"md"} grow>
                {aboutGrid.map((i) => (
                  <Grid.Col span={{ sm: 4, md: 2.4 }} key={i.title} my={10}>
                    <Flex
                      align={"center"}
                      justify={"center"}
                      direction={"column"}
                      gap={10}
                    >
                      <Image
                        alt="image"
                        src={i.image.src}
                        w={100}
                        h={100}
                        mb={10}
                      />
                      <Text
                        fz={18}
                        fw={500}
                        c={"var(--ph-plain-black)"}
                        ta={"center"}
                      >
                        {i.title}
                      </Text>
                      <Text
                        fz={16}
                        fw={400}
                        c={"var(--ph-black-shade)"}
                        ta={"center"}
                      >
                        {i.desc}
                      </Text>
                    </Flex>
                  </Grid.Col>
                ))}
              </Grid>
            </Flex>
          </Group>
        </Container>
      </Box> */}

      {/* Grid Section */}
      <GridSection />

      {/* <Box bg={"var(--ph-plain-white)"} py={100}>
        <Container size={1200} px={{ base: 24, xl: 0 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify={{ base: "center", md: "space-between" }}
            gap={{ base: 20, md: 60 }}
          >
            <Stack flex={1}>
              <Text
                fw={400}
                fz={16}
                tt={"uppercase"}
                ta={"left"}
                c={"var(--ph-plain-black)"}
              >
                Your Perfect Fit
              </Text>
              <Text
                fz={{ base: 38, md: 44 }}
                fw={{ base: 500, md: 700 }}
                c={"var(--ph-plain-black)"}
                ta={"left"}
                lh={{ base: "38px", md: "44px" }}
              >
                We believe in fashion that cares for the planet. Our commitment
                to sustainability goes beyond creating stylish bags – it&apos;s
                about making a positive impact
              </Text>
              <Text fz={16} fw={400} c={"var(--ph-black-shade)"} ta={"left"}>
                Choosing the right size is crucial when it comes to bags. Use
                our comprehensive size guide to ensure your bag is not only
                stylish but also perfectly suited to your needs. From compact
                crossbodies to spacious totes, we&apos;ve got the right size for
                every occasion.
              </Text>
            </Stack>
            <Flex flex={1} mih={{ base: 350, md: 500 }} w={"100%"}>
              <Image
                src={WomanWithBag.src}
                h={"100%"}
                w={"100%"}
                alt="womanWithToteBag"
              />
            </Flex>
          </Flex>
        </Container>
      </Box> */}

      {/* <Box bg={"var(--ph-plain-white)"} py={{ base: 50, md: 100 }}>
          <Container size={1200} px={{ base: 24, xl: 0 }}>
            <Flex
              direction={{ base: "column-reverse", md: "row" }}
              align={{ base: "flex-start", md: "center" }}
              justify={{ base: "center", md: "space-between" }}
              gap={{ base: 20, md: 60 }}
            >
              <Flex
                flex={1}
                mih={{ base: 350, md: 500 }}
                w={"100%"}
                align={"center"}
                justify={"center"}
              >
                <Image
                  src={officeSpace.src}
                  h={"100%"}
                  w={"100%"}
                  alt="womanWithToteBag"
                />
              </Flex>
              <Stack flex={1}>
                <Text
                  fz={{ base: 38, md: 44 }}
                  fw={{ base: 500, md: 700 }}
                  c={"var(--ph-plain-black)"}
                  ta={"left"}
                  lh={{ base: "38px", md: "44px" }}
                >
                  Adventure collection is designed to keep up with your dynamic
                  lifestyle, offering durability without compromising on style.
                </Text>
                <Text fz={16} fw={400} c={"var(--ph-black-shade)"} ta={"left"}>
                  Choosing the right size is crucial when it comes to bags. Use
                  our comprehensive size guide to ensure your bag is not only
                  stylish but also perfectly suited to your needs. From compact
                  crossbodies to spacious totes, we&apos;ve got the right size for
                  every occasion.
                </Text>
                <ShopNow
                  bgColor="var(--ph-plain-black)"
                  textColor="var(--ph-plain-white)"
                />
              </Stack>
            </Flex>
          </Container>
        </Box> */}

      {/* STEPS */}
      <OrderSteps />

      <Box bg={"var(--ph-black-shade-200)"} py={{ base: 50, md: 100 }} style={{zIndex: 3}}>
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
              Why Choose Packaging Hub?
            </Text>
            <Text
              fz={16}
              fw={400}
              c={"var(--ph-plain-black)"}
              ta={"left"}
              maw={600}
            >
              Discover our current best-sellers and customer favorites. Each
              product is a testament to Packaging Hub&apos;s commitment to
              combining style, durability, and functionality.
            </Text>
            <Carousel
              height={400}
              slideSize={{ base: "50%", md: "33.333333%" }}
              align="start"
              slideGap={30}
              loop
              classNames={classes}
            >
              {CarouselData.map((i) => (
                <Carousel.Slide key={i.title}>
                  <Flex
                    h={"100%"}
                    align={"flex-start"}
                    justify={"space-between"}
                    direction={"column"}
                    p={20}
                    style={{ border: "0.5px solid var(--ph-black-shade)" }}
                  >
                    <Image
                      src={i.image.src}
                      alt={i.title}
                      h={180}
                      w={180}
                      fit="fill"
                    />
                    <Box>
                      <Text
                        fz={16}
                        fw={500}
                        ta={"left"}
                        c={"var(--ph-plain-black)"}
                      >
                        {i.title}
                      </Text>
                      <Text
                        fz={16}
                        fw={400}
                        ta={"left"}
                        c={"var(--ph-black-shade)"}
                      >
                        {i.description}
                      </Text>
                    </Box>
                  </Flex>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Stack>
        </Container>
      </Box>

      {/* <Box bg={"var(--ph-plain-white)"} py={{ base: 50, md: 100 }}>
        <Container size={1200} px={{ base: 24, xl: 0 }}>
          <Text fz={16} fw={400} c={"var(--ph-plain-black)"} ta={"center"}>
            Urban Explorer & Adventure Seeker
          </Text>
          <Text
            fz={{ base: 38, md: 44 }}
            fw={{ base: 500, md: 700 }}
            c={"var(--ph-plain-black)"}
            ta={"center"}
            lh={{ base: "38px", md: "44px" }}
            // maw={500}
          >
            Explore our carefully <br /> curated collections
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={20}
            align={{ base: "flex-start", md: "flex-end" }}
          >
            <Flex
              flex={3}
              direction={{ base: "column-reverse", md: "row" }}
              align={"flex-end"}
              gap={15}
              mt={{ base: 30, md: 50 }}
              className="slide"
            >
              <Text
                fz={16}
                fw={400}
                c={"var(--ph-plain-black)"}
                ta={"left"}
                flex={1}
                pb={{ base: 0, md: 20 }}
              >
                Explore our collections, embrace quality craftsmanship, and make
                a statement with Packaging Hub. Your perfect bag is just a click
                away.
              </Text>
              <Image
                alt="purple bag"
                src={purpleBag.src}
                h={450}
                flex={1}
                w={"100%"}
              />
            </Flex>
            <Flex
              flex={1}
              align={{ base: "flex-start", md: "center" }}
              justify={"center"}
              gap={10}
              pb={{ base: 0, md: 20 }}
            >
              <LuSquareArrowLeft size={40} cursor={"pointer"} color="#000" />
              <LuSquareArrowRight size={40} cursor={"pointer"} color="#000" />
            </Flex>
          </Flex>
        </Container>
      </Box> */}

      <FeaturedProducts />

      <Box bg={"var(--ph-plain-white)"} py={{ base: 50, md: 100 }} px={0}>
        <Container size={1200} px={0}>
          <BackgroundImage
            src={NewsLetterBg.src}
            mih={500}
            w={"100%"}
            px={{ base: 24, xl: 100 }}
            py={{ base: 50, md: 100 }}
          >
            <Flex
              gap={20}
              w={"100%"}
              direction={"column"}
              align={{ base: "flex-start", md: "flex-end" }}
            >
              <Text
                fz={{ base: 38, md: 44 }}
                fw={{ base: 500, md: 800 }}
                c={"var(--ph-plain-white)"}
                ta={"left"}
                w={{ base: "100%", md: "50%" }}
                lh={"60px"}
              >
                Join the Packaging Hub Subscribe to Our Newsletter
              </Text>
              <Text
                fz={16}
                fw={400}
                c={"#fff"}
                ta={"left"}
                w={{ base: "100%", md: "50%" }}
              >
                Be the first to know about new arrivals, exclusive promotions,
                and the latest trends in the world of bags. Sign up for our
                newsletter and stay connected with the Packaging Hub lifestyle.
              </Text>
              <Flex
                align={"flex-start"}
                w={{ base: "100%", md: "50%" }}
                gap={10}
              >
                <TextInput
                  placeholder="Email Address"
                  flex={1}
                  size="lg"
                  radius={0}
                  styles={{
                    input: {
                      backgroundColor: "transparent",
                      color: "#fff",
                      border: "1px solid #fff",
                      "::placeholder": {
                        color: "#fff",
                        opacity: 1, // optional, ensures full opacity
                      },
                    },
                  }}
                />
                <Button radius={0} size="lg">
                  Submit
                </Button>
              </Flex>
            </Flex>
          </BackgroundImage>
        </Container>
      </Box>
    </>
  );
}

const CarouselData = [
  {
    title: "Quality Craftsmanship",
    description:
      "Meticulously crafted using premium materials, our bags are a testament to enduring quality.ensuring you're always prepared for any journey.",
    image: blackBox,
  },
  {
    title: "Versatility",
    description:
      "From the office to weekend getaways, Packaging Hub bags seamlessly blend style with practicality, ensuring you're always prepared for any journey.",
    image: womanWithBlackBox,
  },
  {
    title: "Durability",
    description:
      "Built to last, our product boasts exceptional durability, withstanding rigorous use and harsh environments, ensuring long-term performance and reliability.",
    image: blackPaperBag,
  },
  {
    title: "Sustainability",
    description:
      "We're dedicated to sustainable practices, sourcing eco-friendly materials and crafting durable bags that minimize waste and promote long-term use.",
    image: womanWithToteBag,
  },
];

const aboutGrid = [
  {
    image: box,
    title: "Starting From 50 Boxes",
    desc: "Orders start from as few as 50 boxes.",
  },
  {
    image: scroll,
    title: "Quickest Turnaround Time",
    desc: "You do not have to wait for your custom packaging.",
  },
  {
    image: box2,
    title: "No Die & Plate Charges",
    desc: "Save money on your custom boxes with no extra charges.",
  },
  {
    image: eco,
    title: "High Quality Offset Printing",
    desc: "Expect only the highest quality printing services from Packaging Hub.",
  },
  {
    image: box,
    title: "Custom Design, Sizes & Style",
    desc: "Order your custom-printed boxes in any style you need.",
  },
];
