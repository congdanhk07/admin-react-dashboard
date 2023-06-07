import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {},
    extraReducers: {},
})
// Selector
export const selectValueDemo = (state) => state.demo.value

// Action creators are generated for each case reducer function
export const {} = demoSlice.actions

export default demoSlice.reducer
