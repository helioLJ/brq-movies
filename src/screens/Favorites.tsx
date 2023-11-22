/* eslint-disable react-hooks/exhaustive-deps */
import { FlatList, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'

import { MovieCard } from '../components/Home/MovieCard'
import { RootState } from '../redux/store'
import { getFavoriteMovies } from '../api/getFavoriteMovies'
import { MovieType } from '../types/MovieType'
import { MovieCardSkeleton } from '../components/Home/MovieCardSkeleton'

export function Favorites() {
  const favoriteMovieIds = useSelector(
    (state: RootState) => state.favorite.favorites,
  )

  const { data, isLoading } = useQuery<MovieType[]>({
    queryKey: ['movies', { favoriteMovieIds }],
    queryFn: () => getFavoriteMovies(favoriteMovieIds),
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
