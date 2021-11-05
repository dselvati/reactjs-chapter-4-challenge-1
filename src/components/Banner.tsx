import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";


export function Banner() {

  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex
      bgImage="url('/images/Background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      // maxWidth={1440}
      // mx="auto"
      h={[163, 335]}
      alignItems="center"
      justifyContent="space-between"
      px={["0", "44"]}
    >

      <Flex
        flexDirection="column"
        p={["4", "0"]}
      >
        <Text
          fontSize={["1.25rem", "	2.25rem"]}
        >
          5 Continentes, infinitas possibilidades
        </Text>
        <Text
          fontSize={["0.875rem", "1rem"]}
          mt="4"
          color="gray.300"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>


      {
        !isMobile
        &&
        <Image
          src="/images/Airplane.svg"
          alt="Airplane"
          pt="32"
        />}
    </Flex>
  )
}