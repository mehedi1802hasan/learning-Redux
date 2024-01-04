// import { createSlice } from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit';
const initialState ={
    count : 0
}
// console.log(initialState,',,,,')

const counterSlice= createSlice({
name:"counter",
initialState,
reducers: {
    increment:(state)=>{
            state.count =state.count + 1;
        },
        decrement:(state)=>{
            state.count =state.count - 1;
        },
        incrementByValue:(state,actions)=>{
            state.count = state.count + actions.payload
        }

},


})
export const {increment,decrement,incrementByValue}=counterSlice.actions;
export default counterSlice.reducer;

// NOTE: See The Mistake Line::: reducers /// reducer ----- export default counterSlice.reducers; 
