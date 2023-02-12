import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        totalQty: 0,
        totalPrice: 0,
    },
    reducers: {
        addProduct: (state, { payload }) => {
            // find if the product is already in the cart
            const index = state.products.findIndex(
                (item) => item._id === payload._id
            )
            if (index) {
                state.products[index].quantity += 1
                state.totalQty += 1
                state.totalPrice += payload.price
            } else {
                // product is not in the card, add it to the cart
                state.totalQty += 1
                state.totalPrice += payload.price
                state.products.push(payload)
            }
        },

        decreaseProductQuantity: (state, { payload }) => {
            const index = state.products.findIndex(
                (item) => item._id === payload._id
            )
            if (index) {
                state.totalQty -= 1
                state.totalPrice -= state.products[index].price
                state.products[index].quantity -= 1
            }
        },

        removeProduct: (state, { payload }) => {
            const index = state.products.findIndex(
                (item) => item._id === payload._id
            )
            if (index) {
                state.products.pop(index)
            }
        },
    },
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer
