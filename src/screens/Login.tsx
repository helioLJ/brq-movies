import { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { UsernameInput } from '../components/UsernameInput'
import { FormDataProps } from '../types/DataFormProps'
import BRQLogo from '../../assets/icon.png'
import { PasswordInput } from '../components/PasswordInput'
import { EnterButton } from '../components/EnterButton'

export function Login() {
  const [loginError, setLoginError] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>()

  function handleSignUp(data: FormDataProps) {
    if (data.username === 'user' && data.password === '123') {
      setLoginError(false)
      // route to /Home
      return
    }

    setLoginError(true)
  }

  return (
    <View className="w-full flex-1 items-center justify-center p-4">
      <Image source={BRQLogo} alt="BRQ Logo" />

      <UsernameInput
        control={control}
        errorMessage={errors.username?.message}
      />
      <PasswordInput
        control={control}
        errorMessage={errors.password?.message}
      />

      <Text
        className={`mt-5 text-red-500 ${
          loginError ? 'opacity-1' : 'opacity-0'
        }`}
      >
        Dados inválidos
      </Text>

      <EnterButton handleLogin={handleSubmit(handleSignUp)} />
    </View>
  )
}
