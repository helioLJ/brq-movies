import { MovieType } from '../types/MovieType'
import { apiKey } from '../utils/envVariables'
import { API_URL } from './constants/apiURL'
import { api } from './constants/axios'

export async function getFavoriteMovies(
  favoriteMovieIds: number[],
): Promise<MovieType[]> {
  try {
    const promises = favoriteMovieIds.map(async (id) => {
      const { data } = await api.get(
        `${API_URL}movie/${id}?language=pt-BR&api_key=${apiKey}`,
      )
      return data
    })
    return Promise.all(promises)
  } catch (error) {
    console.log(`Erro ao chamar a API: ${error}`)
  }
}
