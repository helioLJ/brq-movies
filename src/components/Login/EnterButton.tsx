import { Text, TouchableHighlight, ViewStyle } from 'react-native'
import { BaseSyntheticEvent, useState } from 'react'

interface EnterButtonProps {
  handleLogin: (e?: BaseSyntheticEvent<object>) => Promise<void>
}

export function EnterButton({ handleLogin }: EnterButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const handleShowUnderlay = () => {
    setIsPressed(true)
  }

  const handleHideUnderlay = () => {
    setIsPressed(false)
  }

  const buttonStyle: ViewStyle = {
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: isPressed ? '#EC8B00' : '#9CA3AF', // Change these colors as needed
  }

  const textStyle = {
    color: isPressed ? 'white' : 'black',
  }

  return (
    <TouchableHighlight
      style={buttonStyle}
      activeOpacity={1}
      underlayColor="orange" // Change this to the desired color when pressed
      onPress={handleLogin}
      onShowUnderlay={handleShowUnderlay}
      onHideUnderlay={handleHideUnderlay}
      testID="EntryButton"
    >
      <Text style={textStyle}>Entrar</Text>
    </TouchableHighlight>
  )
}
