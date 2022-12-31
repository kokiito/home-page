import { Button, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const ColorThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue('indigo', '#f5eb78')
  const color = useColorModeValue('#f5eb78', 'indigo')

  return (
    <Button fontSize={['24px', '24px', '16px']} bg={bg} color={color} onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
