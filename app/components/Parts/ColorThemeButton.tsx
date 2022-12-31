import { Button, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const ColorThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue('indigo', '#f5eb78')
  const color = useColorModeValue('#f5eb78', 'indigo')
  const hoverColor = useColorModeValue('#24003e', '#c6be62')

  return (
    <Button fontSize={['24px', '24px', '16px']} bg={bg} color={color} onClick={toggleColorMode} _hover={{ bg: hoverColor }}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
