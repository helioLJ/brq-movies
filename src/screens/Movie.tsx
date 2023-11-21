import { useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { API_URL } from '../utils/API_URL'
import { api } from '../utils/axios'

const apiKey = process.env.EXPO_PUBLIC_API_KEY

export function Movie() {
  const { id } = useLocalSearchParams()

  const [data, setData] = useState<{ id: number; title: string }>()

  async function getMovie() {
    try {
      const { data } = await api.get(
        `${API_URL}movie/${id}?language=pt-BR&api_key=${apiKey}`,
      )
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <View className="h-screen w-full items-center justify-center bg-brqNeutral p-4">
      <Text className="text-4xl text-white">{id}</Text>
      {data && <Text className="text-4xl text-white">{data.title}</Text>}
    </View>
  )
}
