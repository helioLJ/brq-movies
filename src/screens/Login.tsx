import { useState } from 'react'
import { Button, Image, Text, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { router } from 'expo-router'

import { UsernameInput } from '../components/UsernameInput'
import BRQLogo from '../../assets/icon.png'
import { PasswordInput } from '../components/PasswordInput'
import { EnterButton } from '../components/EnterButton'
import { ForgotMyPasswordButton } from '../components/ForgotMyPasswordButton'
import { DataFormProps } from '../types/DataFormProps'

export function Login() {
  const [loginError, setLoginError] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DataFormProps>()

  function handleSignUp(data: DataFormProps) {
    if (data.username === 'user' && data.password === '123') {
      setLoginError(false)
      router.replace('/home')
      return
    }

    setLoginError(true)
  }

  return (
    <View className="h-screen w-full items-center justify-center bg-brqNeutral p-4">
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
        className={`mb-4 text-red-500 ${
          loginError ? 'opacity-1' : 'opacity-0'
        }`}
      >
        Dados inválidos
      </Text>

      <Button title="home" onPress={() => router.replace('/home')} />
      <EnterButton handleLogin={handleSubmit(handleSignUp)} />
      <ForgotMyPasswordButton />
    </View>
  )
}
