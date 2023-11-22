/* eslint-disable react-hooks/exhaustive-deps */
import { FlatList, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { api } from '../utils/axios'
import { API_URL } from '../utils/apiURL'
import { MovieCard } from '../components/Home/MovieCard'
import { apiKey } from '../utils/envVariables'
import { RootState } from '../redux/store'

export function Favorites() {
  const favoriteMovieIds = useSelector(
    (state: RootState) => state.favorite.favorites,
  )
  const [favoriteMovies, setFavoriteMovies] = useState<
    { id: number; poster_path: string }[]
  >([])

  async function getFavorites() {
    favoriteMovieIds.forEach(async (id) => {
      const { data } = await api.get(
        `${API_URL}movie/${id}?language=pt-BR&api_key=${apiKey}`,
      )
      setFavoriteMovies((prevState) => [...prevState, data])
    })
  }

  useEffect(() => {
    getFavorites()
  }, [])

  return (
    <ScrollView horizontal={true} className="h-screen w-full bg-brqNeutral p-4">
      {favoriteMovies && (
        <FlatList
          data={favoriteMovies}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <MovieCard item={item} />}
        />
      )}
    </ScrollView>
  )
}
