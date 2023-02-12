import React from 'react'

import Home from './screens/Home'
import ProductList from './screens/ProductList'
import { Route, Routes, Navigate } from 'react-router-dom'
import Pay from './screens/Pay'
import PaymentSuccessful from './screens/PaymentSuccessful'
import Product from './screens/Product'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Cart from './screens/Cart'

const App = () => {
    const user = true
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route
                path='/login'
                element={user ? <Navigate to='/' /> : <Login />}
            />
            <Route path='/cart' element={<Cart />} />
            <Route
                path='/signup'
                element={user ? <Navigate to='/' /> : <Signup />}
            />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/products/:category' element={<ProductList />} />
            <Route path='/pay' element={<Pay />} />
            <Route path='/success' element={<PaymentSuccessful />} />
        </Routes>
    )
}

export default App
