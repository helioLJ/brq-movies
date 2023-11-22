import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import { useRef, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { DataFormProps } from '../types/DataFormProps'

interface PasswordInputProps {
  control: Control<DataFormProps>
  errorMessage: string
}

export function PasswordInput({ control, errorMessage }: PasswordInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const inputRef = useRef<TextInput>(null)

  return (
    <View className="mb-4 w-[380px] flex-col items-center px-4">
      <View
        className={`relative mb-4 flex h-14 w-full flex-row items-center justify-between rounded-md border-b bg-brqTertiary px-4 ${
          isFocused || inputValue
            ? 'border-brqOrange'
            : errorMessage
              ? 'border-red-500'
              : 'border-white'
        }`}
      >
        <MaterialIcons name="lock" size={24} color="white" />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Informe oa senha',
            pattern: {
              message: 'Apenas números são permitidos',
              value: /^[0-9]+$/,
            },
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                className={`color-white h-full w-full px-4`}
                value={value}
                onChangeText={(text) => {
                  setInputValue(text)
                  onChange(text)
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                ref={inputRef}
              />

              <Text
                onPress={() => inputRef.current.focus()}
                className={`pointer-events-none absolute left-14 text-zinc-300 transition-transform ${
                  isFocused || inputValue
                    ? '-translate-y-4 text-xs text-brqOrange'
                    : ''
                }`}
              >
                Senha
              </Text>

              <TouchableOpacity
                className="-translate-x-12"
                onPress={() => {
                  onChange('')
                  setInputValue('')
                }}
              >
                <MaterialIcons name="highlight-off" size={24} color="white" />
              </TouchableOpacity>
            </>
          )}
        />
      </View>
      <Text className=" text-red-500">{errorMessage} </Text>
    </View>
  )
}
