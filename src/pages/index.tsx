import { Box, Text, Flex } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { ContinentsSlide } from "../components/ContinentsSlide";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <TravelTypes />

      <Box
        w="24"
        my="14"
        mx="auto"
        borderTop="1px solid black"
      />

      <Flex
        flexDir="column"
        fontSize={["1.25rem", "2.25rem"]}
        w="100%"
        align="center"
        color="gray.800"
        fontWeight="500"

        textAlign="center"
      >
        <Text

        >Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>

        <ContinentsSlide />
      </Flex>
    </Box>
  )
}
