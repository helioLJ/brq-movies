/* eslint-disable react-hooks/exhaustive-deps */
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'

interface FavoriteButtonProps {
  movieId: number
}

export function FavoriteButton({ movieId }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>() // search movieId in the array state stored, if it's in, make it true

  async function favoriteMovie(movieId: number) {
    // if it's in favorites array, remove it, if it's not, add it
    setIsFavorite(!isFavorite)
  }

  useEffect(() => {
    favoriteMovie(movieId)
  }, [])

  return (
    <TouchableOpacity
      className={`${
        isFavorite ? 'bg-brqOrange/80' : 'bg-white/80'
      } flex h-6 w-6 items-center justify-center rounded-full`}
      onPress={() => console.log('oi')}
    >
      <MaterialIcons name="favorite" size={16} color="#16171B" />
    </TouchableOpacity>
  )
}
