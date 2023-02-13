import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: 'user',
    initialState: { isProcessing: false, isError: false },
    reducers: {
        processOrderStart: (state) => {
            state.isProcessing = true
        },
        processOrderSuccess: (state, { payload }) => {
            state.isProcessing = false
            state.currentUser = payload
        },
        loginFailure: (state) => {
            state.isProcessing = false
            state.isError = true
        },
        logoutUser: (state) => {
            state.currentUser = null
        },
    },
})

export const { loginFailure, loginStart, loginSuccess, logoutUser } =
    userSlice.actions

export default userSlice.reducer
