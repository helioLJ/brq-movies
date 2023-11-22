import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'

import {
  addToFavorites,
  removeFromFavorites,
} from '../../../redux/favoriteSlice'
import { RootState } from '../../../redux/store'

export function FavoriteButton({ movieId }) {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorite.favorites)
  const isFavorite = favorites.includes(movieId)

  const handleFavoriteToggle = () => {
    console.log(favorites)
    if (isFavorite) {
      dispatch(removeFromFavorites(movieId))
    } else {
      dispatch(addToFavorites(movieId))
    }
  }

  return (
    <TouchableOpacity
      className={`${
        isFavorite ? 'bg-brqOrange/80' : 'bg-white/80'
      } flex h-8 w-8 items-center justify-center rounded-full`}
      onPress={handleFavoriteToggle}
    >
      <MaterialIcons name="favorite" size={16} color="#16171B" />
    </TouchableOpacity>
  )
}
