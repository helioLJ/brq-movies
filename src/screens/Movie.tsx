/* eslint-disable react-hooks/exhaustive-deps */
import { useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { ImageBackground, ScrollView, Text, View } from 'react-native'
import { API_URL } from '../utils/API_URL'
import { api } from '../utils/axios'

const apiKey = process.env.EXPO_PUBLIC_API_KEY

interface Movie {
  id: number
  title: string
  poster_path: string
  overview: string
}

export function Movie() {
  const { id } = useLocalSearchParams()
  const [data, setData] = useState<Movie>()

  async function getMovie() {
    try {
      const { data } = await api.get(
        `${API_URL}movie/${id}?language=pt-BR&api_key=${apiKey}`,
      )
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(`Erro ao chamar a API: ${error}`)
    }
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <ScrollView className="h-screen w-full bg-brqNeutral">
      {data && (
        <>
          <View className="h-[500px] w-full">
            <ImageBackground
              source={{
                uri: 'https://image.tmdb.org/t/p/w500/' + data.poster_path,
              }}
              className="flex-1"
            />
          </View>
          <View className="px-4 py-8">
            <Text className="text-3xl font-bold text-white">{data.title}</Text>
            <Text className="mt-4 text-sm font-bold text-brqOrange">
              SINOPSE
            </Text>
            <Text className="mt-4 text-base text-white">{data.overview}</Text>
          </View>
        </>
      )}
    </ScrollView>
  )
}
