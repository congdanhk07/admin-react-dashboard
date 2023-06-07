import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: null,
    currentRoute: true,
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        activeSidebar: (state, action) => {
            return {
                ...state,
                open: action.payload,
            }
        },
        activeCurrentRoute: (state, action) => {
            return {
                ...state,
                currentRoute: action.payload,
            }
        },
    },
    extraReducers: {},
})
// Selector
export const selectToggleSidebar = (state) => state.common.open
export const selectCurrentRoute = (state) => state.common.currentRoute

// Action creators are generated for each case reducer function
export const { activeSidebar, activeCurrentRoute } = commonSlice.actions

export default commonSlice.reducer
