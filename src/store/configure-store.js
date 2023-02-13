import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart'
import userReducer from './user'
import orderReducer from './order'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        order: orderReducer,
    },
    devTools: true,
})

export default store
