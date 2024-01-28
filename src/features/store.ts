import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./character/characterSlice"
import favoritesReducer from "./favorite/favoriteSlice"
export const store =configureStore({
    reducer:{
        characters:charactersReducer,
        favorites: favoritesReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch