import { Box, Text } from "@chakra-ui/react";

interface ContinentBioInfoItemProps {
  quant: number;
  type: string;
}

export function ContinentBioInfoItem({ quant, type }: ContinentBioInfoItemProps) {

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDir="column"
      fontWeight="600"

    >
      <Text
        fontSize={["1.5rem", "3rem"]}
        color="orange.300"
      >
        {quant}
      </Text>
      <Text fontSize={["1rem", "1.5rem"]} color="gray.800">{type}</Text>
    </Box>
  )
}