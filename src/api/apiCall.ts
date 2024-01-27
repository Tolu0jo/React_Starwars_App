// https://swapi.dev/api/people/?search=r2
import axios from "axios";
import starWarsApi from "./api"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharactersAsync = createAsyncThunk(
    "characters/fetchCharactersAsync",
    async()=>{
        const response = await starWarsApi.get("/people");

        return response.data
    }
)

export const fetchSearchedCharacterAsync = createAsyncThunk(
    "characters/fetchSearchedCharacterAsync",
    async(search:string)=>{
        const response = await starWarsApi.get(`/people/?search=${search}`);

        return response.data
    }
)

export const fetchSingleCharacter= createAsyncThunk(
    "characters/fetchSingleCharacter",
    async(url:string)=>{
        const response = await axios.get(url)
        return response.data
    }
)