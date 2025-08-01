import { createSlice, type PayloadAction, } from '@reduxjs/toolkit'

export type Recipe = {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strCategory: string
  strArea: string
  strSource: string
  strMeasure1?: string
}

interface FavoriteState {
  favorites: Recipe[]
}

const storedFavorites = localStorage.getItem('favorites')
const initialState: FavoriteState = {
  favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Recipe>) => {
      const exists = state.favorites.find(item => item.idMeal === action.payload.idMeal)
      if (!exists) {
        state.favorites.push(action.payload)
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
      }
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(item => item.idMeal !== action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
  },
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
