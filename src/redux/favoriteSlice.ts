import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload)
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload)
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer
