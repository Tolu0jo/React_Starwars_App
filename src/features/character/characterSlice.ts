import { createSlice } from "@reduxjs/toolkit"

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
      

    }

})