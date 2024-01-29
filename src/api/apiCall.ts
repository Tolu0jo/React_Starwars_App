import axios from "axios";
import starWarsApi from "./api"
import { AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharactersAsync = createAsyncThunk(
    "characters/fetchCharactersAsync",
    async()=>{
        const response = await starWarsApi.get("/");

        return response.data
    }
)

export const fetchSearchedCharacterAsync = createAsyncThunk(
    "characters/fetchSearchedCharacterAsync",
    async(search:string)=>{
        const response = await starWarsApi.get(`/?search=${search}`);

        return response.data
    }
)

export const fetchSingleCharacter= createAsyncThunk(
    "characters/fetchSingleCharacter",
    async(id:string)=>{
        const response = await starWarsApi.get(`/${id}`)
      
        return response.data
      
    }
)

export const fetchCharactersByPage =createAsyncThunk(
    "characters/fetchCharactersByPage",
    async(url:string)=>{ 
        const response = await axios.get(url)

        return response.data
    }
)as unknown as any;

