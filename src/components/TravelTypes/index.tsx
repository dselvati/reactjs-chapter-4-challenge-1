import { Stack, Image, Box, Text } from '@chakra-ui/react'
import { Type } from './Type'

export function TravelTypes() {

  return (
    <Stack //Já é display: flex por natureza
      // spacing={[0, 8]}
      direction="row"
      gridGap="8" // Melhor que o spacing
      flexWrap="wrap"
      gridRowGap="5"

      justifyContent={["space-evenly", "space-between"]}
      // alignItems="center"
      mt={["12", "24"]}
      px={["2", "28"]}
    >

      <Type title="vida noturna" urlIcon="/images/cocktail 1.svg" />
      <Type title="praia" urlIcon="/images/surf 1.svg" />
      <Type title="moderno" urlIcon="/images/building 1.svg" />
      <Type title="clássico" urlIcon="/images/museum 1.svg" />
      <Type title="e mais..." urlIcon="/images/earth 1.svg" />

    </Stack>
  )
}