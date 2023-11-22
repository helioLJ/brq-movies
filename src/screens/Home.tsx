import { FlatList, ScrollView } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { MovieCard } from '../components/Home/MovieCard'
import { getMovies } from '../api/getMovies'
import { MovieType } from '../types/MovieType'

export function Home() {
  const { data } = useQuery<MovieType[]>({
    queryKey: ['movies'],
    queryFn: () => getMovies(),
  })

  return (
    <ScrollView
      horizontal={true}
      className="h-screen w-full bg-brqNeutral p-4 pt-8"
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <MovieCard item={item} />}
        testID="movies-flat-list"
      />
    </ScrollView>
  )
}
