import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

export const Archive = () => {
  return <Box p={'48px'}>
    <Heading as='h1'>Works</Heading>
    <SimpleGrid columns={[1, 1, 2]} spacing={10} mt={'24px'}>
      <SimpleGrid columns={2} spacing={10}>
        <Heading as='h2' fontSize={'3xl'}>Games</Heading>

      </SimpleGrid>
    </SimpleGrid>
  </Box>
}