import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
    name:'Peter'
}
const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        changeByValue:(state,action)=>{
            state.value=action.payload
        },
        changeByName:(state,action)=>{
            state.name=action.payload
        }
    }
})

export const {increment,decrement,changeByName,changeByValue}=counterSlice.actions

export default counterSlice.reducer