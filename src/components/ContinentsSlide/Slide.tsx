
import { Text, Box } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

interface SlideProps {
  id: number;
  title: string;
  subject: string;
  urlBackgroundImage: string;
}

export function Slide({ id, title, subject, urlBackgroundImage }: SlideProps) {

  return (
    <ChakraLink
      href={`/continent/${id}`}
      h="100%"
      w="100%"
      _hover={{
        textDecoration: "none"
      }}
    >
      <Box
        bgImage={`url(${urlBackgroundImage})`}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="100%"
        w="100%"

        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >

        <Text
          fontSize={["1.5rem", "3rem"]}
          fontWeight="700"
          color="gray.50"
        >{title}</Text>

        <Text
          fontSize={["0.875rem", "1.5rem"]}
          fontWeight="700"
          color="gray.200"
        >{subject}</Text>

      </Box>
    </ChakraLink>
  )
}