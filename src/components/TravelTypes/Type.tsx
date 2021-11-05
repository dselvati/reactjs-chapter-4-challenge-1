import { Image, Box, Text, useBreakpointValue, Flex } from '@chakra-ui/react'

interface TypeProps {
  title: string
  urlIcon: string
}

export function Type({ title, urlIcon }: TypeProps) {

  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Box
      display="flex"
      flexDirection={["row", "column"]}

      alignItems="center"
    >


      {
        !isMobile
          ?
          <Image
            src={urlIcon}
            alt={title}
            h="5rem"
            m="auto"
          />

          :

          <Box
            bg="orange.300"
            h={2}
            w={2}
            mx="2"
            borderRadius="50%"
          >
          </Box>
      }


      {/* 
      
      Problemas com tamanho da fonte do ponto
      <Box
        display="flex"

        alignItems="center"
        justifyContent="center"

        pt="6"
      >
        {
          !!isMobile
          &&
          <Text
            color="orange.300"
            fontSize="4rem"
          >.</Text>
        }
        <Text
          color="gray.800"

          fontSize={[18, "1.5rem"]}
          fontWeight="600"
          textAlign="center"
        >
          {title}
        </Text>
      </Box> */}

      <Text
        color="gray.800"
        fontSize={[18, "1.5rem"]}
        fontWeight="600"
        textAlign="center"

      // letterSpacing="tight"
      >
        {/* {
          !!isMobile
          &&
          <Text
            as="span"
            color="orange.300"
            fontSize="4rem"
            px="2"
          >.</Text>

          
        } */}
        {title}
      </Text>
    </Box>
  )
}