import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import cartReducer from './cart'
import userReducer from './user'
import orderReducer from './order'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'cart'], // only user slice and cart slice will be persisted
}

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
export default store
