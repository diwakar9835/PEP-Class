import { createSlice } from "@reduxjs/toolkit"

const inintialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: inintialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})


// now we have to export action and the reducers from counterSlice

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer