import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { router } from 'expo-router'

export function HomeHeader() {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <View className="flex h-40 w-full items-start bg-brqNeutral pt-10">
      <View className="w-full flex-row items-center justify-between px-6">
        <Text className="text-2xl text-white">BRQ Movies</Text>
        <TouchableOpacity
          className={`${
            showDropdown ? 'bg-brqOrange' : ''
          } relative  rounded-full`}
          onPress={() => {
            setShowDropdown(!showDropdown)
          }}
        >
          <MaterialIcons
            name="more-vert"
            size={24}
            color={`${showDropdown ? 'black' : 'gray'}`}
          />
          {showDropdown && (
            <TouchableOpacity
              className="absolute right-0 top-[30px] flex h-[44px] w-[117px] flex-row rounded-md bg-brqTertiary p-3 shadow-md"
              onPress={() => router.replace('/')}
            >
              <MaterialIcons name="logout" size={20} color="white" />
              <Text className="ml-2 text-white">Sair</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}
