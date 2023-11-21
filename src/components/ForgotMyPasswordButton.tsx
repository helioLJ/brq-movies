import { Text, TouchableOpacity } from 'react-native'

export function ForgotMyPasswordButton() {
  return (
    <TouchableOpacity className="mt-5 flex h-10 w-full items-center justify-center">
      <Text className="text-gray-400">Esqueci minha senha</Text>
    </TouchableOpacity>
  )
}
