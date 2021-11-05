/* eslint-disable jsx-a11y/alt-text */
import { Box, Text, Image } from "@chakra-ui/react";

interface ContinentCityCardProps {
  country: string;
  capital: string;
  image: string;
  flag: string;
}

export function ContinentCityCard({ country, capital, image, flag }: ContinentCityCardProps) {

  return (
    <Box
      borderRadius="2.5%"
      display="flex"
      alignItems="center"
      // justifyContent="flex-start"
      flexDir="column"

      w="256px"
      m="auto"

      fontFamily="Barlow"
    >
      <Image
        src={image}
        h="173px"
        w="100%"
        objectFit="cover"
        borderRadius="2.5% 2.5% 0 0"
      ></Image>

      <Box
        width="100%"
        p="6"

        display="flex"
        alignItems="center"
        justifyContent="space-between"


        border="1px solid"
        borderColor="yellow.400"
        borderRadius="0 0 2.5% 2.5%"
        borderTop="none"
      >

        <Box>
          <Text
            fontSize="1.25rem"
            pb="3"
            fontWeight="600"
            color="gray.600"
          >{capital}</Text>
          <Text
            fontSize="1rem"
            fontWeight="500"
            color="gray.200"
          >{country}</Text>
        </Box>
        <Image
          src={flag}
          h="30px"
          w="30px"
          objectFit="cover"
          borderRadius="50%"></Image>

      </Box>

    </Box>
  )
}