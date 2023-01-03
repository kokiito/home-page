import { Heading, List, ListItem, Text, Link, useColorModeValue, Container } from '@chakra-ui/react'

export const Biography = () => {
  const color = useColorModeValue('#36028a', '#f5eb78')
  return <Container py={['32px', '32px', '48px']} px={['16px', '24px', '0px']} maxW='550px' >
    <Heading as='h1' fontSize={'30px'}>Biography</Heading>
    < List mt={'24px'} >
      <ListItem> <Text as='b'>1995</Text><Text>Born in Osaka, Japan</Text></ListItem>
      <ListItem><Text as='b'>2020</Text><Text>Completed the Master's Program in the Graduate School of Information Science at Ritsumeikan university</Text></ListItem>
      <ListItem><Text as='b'>2020</Text><Text>Started working at <Link isExternal color={color} href='https://aidemy.co.jp/'>Aidemy</Link></Text></ListItem>
    </List >
  </Container >
}