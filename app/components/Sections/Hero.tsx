import { Box, Flex, Avatar, Heading, HStack, ListItem, List, Link, Icon, Stack, useColorModeValue } from '@chakra-ui/react'
import image from '@/public/images/kokiitoIcon.png'
import { FaTwitter, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa"
import { ZennIcon } from '@/components/Parts/ZennIcon'
import { ColorThemeButton } from '@/components/Parts/ColorThemeButton'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const Hero = () => {
  const color = useColorModeValue('#36028a', '#f5eb78')
  const bg = useColorModeValue('#f5eb78', '#36028a')


  return (
    <Box w='100%' h='100vh' position={'relative'} bg={bg} color={color}>
      <Box position={'absolute'} top={['24px', '24px', '30px']} right={['24px', '24px', '40px']}><ColorThemeButton /></Box>
      <Box position={'absolute'} bottom={'30px'} right={'calc(50% - 20px)'}><Icon as={ChevronDownIcon} w={'40px'} h={'40px'} /></Box>
      <Flex justifyContent={'center'} alignItems={'center'} height={'100%'}>
        <Stack spacing={'20px'} direction={['column', 'column', 'row']}>
          <Box margin={'auto'} w={'150px'} h={'150px'}>
            <Avatar
              size={'full'}
              name='Koki Ito'
              src={image}
              border={`3px solid ${color}`}
              bg={color}
            />
          </Box>
          <Box paddingX={'20px'} >
            <Heading fontSize={['36px', '36px', '24px']}>Koki Ito</Heading>
            <List marginY={'8px'}>
              <ListItem>🐶 Web Developer at Aidemy inc. (mainly frontend with TypeScript)</ListItem>
              <ListItem>⚡️ Sometimes create games, videos and keyboards</ListItem>
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