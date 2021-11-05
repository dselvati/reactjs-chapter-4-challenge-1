import { Box, Text, Flex, Grid, GridItem, Image } from "@chakra-ui/react";

import { GetServerSideProps } from "next"
import { ContinentBioInfoItem } from "../../components/ContinentBioInfoItem";
import { ContinentCityCard } from "../../components/ContinentCityCard";
import { Header } from "../../components/Header";
import { api } from "../../services/api"

interface CountriesInfoProps {
  country: string
  capital: string
  image: string
  flag: string
}

interface BioProps {
  description: string
  countries: number
  languages: number
  cities: number
}

interface ContinentProps {
  id: number
  title: string
  subject: string
  background_image: string
  bio: BioProps
  countries_info: CountriesInfoProps[]
}

interface Props {
  continent: ContinentProps
}

export default function Continent({ continent: { title, subject, background_image, bio, countries_info } }: Props) {


  return (
    <Box>
      <Header />

      {/**Banner */}
      <Box
        bgImage={`url(${background_image})`}
        bgPos="center"
        bgRepeat="no-repeat"
        w="100%"
        h={[150, 500]}

        display="flex"
        alignItems={["center", "flex-start"]}
        justifyContent={["center", "flex-end"]}
        flexDirection="column"
      >

        <Text
          fontSize={["1.75rem", "3rem"]}
          fontWeight="700"
          color="gray.50"
          ml={["0", "44"]}
          mb={["0", "20"]}
        >
          {title}
        </Text>
      </Box>


      {/**Bio */}

      <Box
        maxW={1160}
        p={["4", "2"]}
        m="auto">

        <Flex
          align="center"
          justify="space-around"
          h="56"
          mt={["5", "20"]}
          flexDirection={["column", 'row']}
        >
          <Box
            w="100%"
            textAlign="justify"
            color="gray.800"
          >
            <Text fontSize={["0.875rem", "1.5rem"]}>{bio.description}</Text>
          </Box>

          <Box
            w="100%"
            px={["0", "20"]}

            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <ContinentBioInfoItem quant={bio.countries} type="países" />
            <ContinentBioInfoItem quant={bio.languages} type="línguas" />
            <ContinentBioInfoItem quant={bio.cities} type="cidades +100" />

          </Box>
        </Flex>

        {/**Cidades +100 */}

        <Flex
          color="gray.900"

          mt={["10", "28"]}
          width="100%"

          align="flex-start"
          justify="center"
          direction="column"
        >
          <Text
            fontSize={["1.5rem", "2.25rem"]}
            fontWeight="500"
          >Cidades +100</Text>

          {/* <Grid
            templateColumns={["repeat(1, 3fr)", "repeat(4, 3fr)"]}
            gap={18}
            width="100%"
            mt="10"

            flexWrap="wrap"
          >

            {
              countries_info?.map(info => (
                <GridItem key={info.capital}>
                  <ContinentCityCard country={info.country} capital={info.capital} image={info.image} flag={info.flag} />
                </GridItem >
              ))

            }
          </Grid> */}

          <Flex
            mt="10"
            align="center"
            justify={["center", "flex-start"]}

            gridGap="10"
            gridRowGap="12"
            flexWrap="wrap"

            width="100%"
          >
            {
              countries_info?.map(info => (
                <Box key={info.capital}>
                  <ContinentCityCard country={info.country} capital={info.capital} image={info.image} flag={info.flag} />
                </Box >
              ))

            }

          </Flex>

        </Flex>
      </Box>
    </Box >
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { id } = params
  //console.log(id)
  let continent = {}
  try {
    const response = await api.get(`/continents/${id}`)
    continent = response.data
  } catch (err) {
    // console.error(err && err.response.data)
    console.log('error')
  }


  return {
    props: {
      continent
    }
  }
}