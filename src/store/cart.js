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
                (item) => item._id === payload.product._id
            )
            if (index > -1) {
                state.products[index].quantity += 1
                state.totalQty += 1
                state.totalPrice += payload.product.price
            } else {
                // product is not in the card, add it to the cart
                state.totalQty += 1
                state.totalPrice += payload.product.price
                state.products.push(payload.product)
            }
        },

        decreaseProductQuantity: (state, { payload }) => {
            const index = state.products.findIndex(
                (item) => item._id === payload.id
            )
            if (index > -1 && state.products[index].quantity > 1) {
                state.totalQty -= 1
                state.totalPrice -= state.products[index].price
                state.products[index].quantity -= 1
            } else {
                // product count has reached 0, remove the product
                const removed = state.products.splice(index, 1)[0] // because splice returns an array of deleted elements
                state.totalQty -= removed.quantity
                state.totalPrice -= removed.quantity * removed.price
            }
        },

        removeProduct: (state, { payload }) => {
            const index = state.products.findIndex(
                (item) => item._id === payload.id
            )
            if (index > -1) {
                const removed = state.products.splice(index, 1)[0] // because splice returns an array of deleted elements
                state.totalQty -= removed.quantity
                state.totalPrice -= removed.quantity * removed.price
            }
        },
    },
})

export const { addProduct, decreaseProductQuantity, removeProduct } =
    cartSlice.actions

export default cartSlice.reducer
