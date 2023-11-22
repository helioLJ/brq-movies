/* eslint-disable react-hooks/exhaustive-deps */
import { FlatList, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'

import { MovieCard } from '../components/Home/MovieCard'
import { RootState } from '../redux/store'
import { getFavoriteMovies } from '../api/getFavoriteMovies'
import { MovieType } from '../types/MovieType'

export function Favorites() {
  const favoriteMovieIds = useSelector(
    (state: RootState) => state.favorite.favorites,
  )

  const { data } = useQuery<MovieType[]>({
    queryKey: ['movies', { favoriteMovieIds }],
    queryFn: () => getFavoriteMovies(favoriteMovieIds),
  })

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
