import { Box, Flex, Avatar, Text, Heading, HStack, UnorderedList, ListItem, List, Link, Icon, Stack } from '@chakra-ui/react'
import image from '@/public/images/kokiitoIcon.png'
import { FaTwitter, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa"
import { ZennIcon } from '@/components/Parts/ZennIcon'

export const Hero = () => {

  return (
    <Box w='100%' h='100vh'>
      <Flex justifyContent={'center'} alignItems={'center'} height={'100%'}>
        <Stack spacing={'20px'} direction={['column', 'column', 'row']}>
          <Box margin={'auto'} w={'150px'} h={'150px'}>
            <Avatar
              size={'full'}
              name='Koki Ito'
              src={image}
              border={'3px solid indigo'}
            />
          </Box>
          <Box paddingX={'20px'}>
            <Heading fontSize={'24px'}>Koki Ito</Heading>
            <List marginY={'8px'}>
              <ListItem>🐶 Web Developer at Aidemy inc. (mainly frontend with TypeScript)</ListItem>
              <ListItem>⚡️ Sometimes create game, video and keyboard</ListItem>
              <ListItem>🧗 Climbing as well</ListItem>
            </List>
            <HStack spacing={'16px'} marginY={'16px'}>
              <Link href={'https://github.com/kokiito'}><Icon as={FaGithub} size={'20px'} /></Link>
              <Link href={'https://twitter.com/koki_robo'}><Icon as={FaTwitter} size={'20px'} /></Link>
              <Link href={'https://zenn.dev/kokiito_robot'}><Icon as={ZennIcon} size={'20px'} mb={'8px'} /></Link>
              <Link href={'https://www.youtube.com/@kokidevlife6448'}><Icon as={FaYoutube} size={'20px'} /></Link>
              <Link href={'https://www.instagram.com/debris_works_/'}><Icon as={FaInstagram} size={'20px'} /></Link>
            </HStack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}