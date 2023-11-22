import { FlatList, ScrollView } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { MovieCard } from '../components/Home/MovieCard'
import { getMovies } from '../api/getMovies'
import { MovieType } from '../types/MovieType'
import { MovieCardSkeleton } from '../components/Home/MovieCardSkeleton'

export function Home() {
  const { data, isLoading } = useQuery<MovieType[]>({
    queryKey: ['movies'],
    queryFn: () => getMovies(),
  })

  return (
    <ScrollView className="h-screen w-full bg-brqNeutral p-4 pt-8">
      {isLoading ? (
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          renderItem={() => <MovieCardSkeleton />}
        />
      ) : (
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
