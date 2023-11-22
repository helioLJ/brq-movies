import { FlatList, ScrollView } from 'react-native'
import { api } from '../utils/axios'
import { API_URL } from '../utils/apiURL'
import { useEffect, useState } from 'react'
import { MovieCard } from '../components/MovieCard'
import { apiKey } from '../utils/envVariables'

export function Home() {
  const [data, setData] = useState<{ id: number; poster_path: string }[]>()

  async function getMovies() {
    try {
      const { data } = await api.get(
        `${API_URL}movie/popular?language=pt-BR&page=1&api_key=${apiKey}`,
      )
      setData(data.results)
    } catch (error) {
      console.log(`Erro ao chamar a API: ${error}`)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <ScrollView horizontal={true} className="h-screen w-full bg-brqNeutral p-4">
      {data && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <MovieCard item={item} />}
        />
      )}
    </ScrollView>
  )
}
