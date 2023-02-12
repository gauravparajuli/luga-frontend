import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        devTools: true,
    },
})

export default store
