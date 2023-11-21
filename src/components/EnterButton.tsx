import { Text, TouchableOpacity } from 'react-native'
import { BaseSyntheticEvent } from 'react'

interface EnterButtonProps {
  handleLogin: (e?: BaseSyntheticEvent<object>) => Promise<void>
}

export function EnterButton({ handleLogin }: EnterButtonProps) {
  return (
    <TouchableOpacity
      className="flex h-10 w-full items-center justify-center rounded-full bg-gray-400 active:bg-brqOrange"
      onPress={handleLogin}
      activeOpacity={0.8}
    >
      <Text className="text-brqNeutral">Entrar</Text>
    </TouchableOpacity>
  )
}
