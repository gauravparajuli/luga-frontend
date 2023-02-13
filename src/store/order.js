import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: 'order',
    initialState: { isProcessing: false, isError: false },
    reducers: {
        processOrderStart: (state) => {
            state.isProcessing = true
            state.isError = false
        },
        processOrderSuccess: (state) => {
            state.isProcessing = false
        },
        processOrderFailure: (state) => {
            state.isProcessing = false
            state.isError = true
        },
    },
})

export const { processOrderStart, processOrderSuccess, processOrderFailure } =
    orderSlice.actions

export default orderSlice.reducer
