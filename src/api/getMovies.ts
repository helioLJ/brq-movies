import { MovieType } from '../types/MovieType'
import { apiKey } from '../utils/envVariables'
import { API_URL } from './constants/apiURL'
import { api } from './constants/axios'

export async function getMovies(): Promise<MovieType[]> {
  try {
    const { data } = await api.get(
      `${API_URL}movie/popular?language=pt-BR&page=1&api_key=${apiKey}`,
    )

    return data.results
  } catch (error) {
    console.log(`Erro ao chamar a API: ${error}`)
  }
}
