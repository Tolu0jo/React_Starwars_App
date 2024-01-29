import { createSlice } from "@reduxjs/toolkit"
import { fetchCharactersAsync, fetchCharactersByPage, fetchSearchedCharacterAsync, fetchSingleCharacter } from "../../api/apiCall"

const initialState ={
    characters:{},
    selectedCharacter:{},
    favorites:[],
    
}


const characterSlice:any=createSlice({
    name:"characters",
    initialState,
    reducers:{
        removeSelectedCharacter:(state)=>{
            state.selectedCharacter={}
        }
    },
    extraReducers:(builder)=>{
      builder.addCase(
        fetchCharactersAsync.fulfilled,(state,{payload})=>{
          console.log("fulfilled")
          return{...state,characters:payload}
        }
      ).addCase(
        fetchSearchedCharacterAsync.fulfilled,(state,{payload})=>{
            console.log("fulfilled")
            return{...state,characters:payload}
          }
      ).addCase(
        fetchSingleCharacter.fulfilled,(state,{payload})=>{
            console.log("fulfilled")
            return{...state,selectedCharacter:payload}
          }
      ).addCase(
        fetchCharactersByPage.fulfilled,(state,{payload})=>{
            return{...state,characters:payload} 
        }
      )

    }

})

export const {removeSelectedCharacter} = characterSlice.actions
export const getAllCharacters =(state:any)=>state.characters.characters
export const getSelectedCharacter =(state:any)=>state.characters.selectedCharacter
export default characterSlice.reducer;