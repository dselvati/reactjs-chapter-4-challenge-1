import { Flex, Image, Link as ChakraLink, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from 'next/router'

export function Header() {

  const { asPath } = useRouter()

  const homePage = asPath === '/'

  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex
      as="header"
      w="100%"
      // maxWidth={1440}
      // mx="auto"
      h="24"
      px="6"
      align="center"
      justify="center"

      pos="relative"

    >

      {
        !homePage
        &&
        <ChakraLink
          href={`/`}>


          {
            isMobile
              ?
              <Image
                src="/images/Vector Bold.svg"
                alt="Voltar"
                h="4"
              />
              :
              <Image
                src="/images/Vector.svg"
                alt="Voltar"
                h="5"
              />
          }

        </ChakraLink>
      }

      <Image
        src="/images/Logo.svg"
        alt="Logo"
        margin="auto"

        height={["8", "12"]}
      />

    </Flex>
  )
}