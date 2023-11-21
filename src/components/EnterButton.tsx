import { Text, TouchableOpacity } from 'react-native'
import { BaseSyntheticEvent } from 'react'

interface EnterButtonProps {
  handleLogin: (e?: BaseSyntheticEvent<object>) => Promise<void>
}

export function EnterButton({ handleLogin }: EnterButtonProps) {
  return (
    <TouchableOpacity className="mt-8" onPress={handleLogin}>
      <Text className="text-white">Entrar</Text>
    </TouchableOpacity>
  )
}
