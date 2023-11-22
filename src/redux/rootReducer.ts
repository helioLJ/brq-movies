import { combineReducers } from 'redux'
import favoriteSlice from './favoriteSlice'

const rootReducer = combineReducers({
  favorite: favoriteSlice,
})

export default rootReducer
