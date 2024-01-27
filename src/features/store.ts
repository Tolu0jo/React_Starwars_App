import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./character/characterSlice"
export const store =configureStore({
    reducer:{
        characters:charactersReducer
    }
})

export type AppDispatch = typeof store.dispatch