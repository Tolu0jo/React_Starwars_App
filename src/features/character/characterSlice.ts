import { createSlice } from "@reduxjs/toolkit"
import { fetchCharactersAsync, fetchSearchedCharacterAsync, fetchSingleCharacter } from "../../api/apiCall"

const initialState ={
    characters:{},
    selectedCharacter:{},
    favorites:[],
    pending:false,
}


const characterSlice =createSlice({
    name:"characters",
    initialState,
    reducers:{

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
      )

    }

})

export const getAllCharacters =(state:any)=>state.characters.characters
export const getSelectedCharacter =(state:any)=>state.characters.selectedCharacter
export default characterSlice.reducer;