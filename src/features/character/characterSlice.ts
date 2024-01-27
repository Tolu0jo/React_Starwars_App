import { createSlice } from "@reduxjs/toolkit"
import { fetchCharactersAsync } from "../../api/apiCall"

const initialState ={
    characters:{},
    selectedCharacter:{},
    searchedCharacter:{},
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
          return{...state,data:payload}
        }
      )

    }

})

export const getAllCharacters =(state:any)=>state.characters.data

export default characterSlice.reducer;