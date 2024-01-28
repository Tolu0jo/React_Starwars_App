// favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Favorite {
  id: string;
  name: string;
}

interface FavoritesState {
  favorites: Favorite[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Favorite>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);
    },
  },
});
export const getFavorite =(state:RootState)=>state.favorites.favorites
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
