import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: { currentUser: null, isFetching: false, isError: false },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, { payload }) => {
            state.isFetching = false
            state.currentUser = payload
        },
        loginFailure: (state) => {
            state.isFetching = false
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
