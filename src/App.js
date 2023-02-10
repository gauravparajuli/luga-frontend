import React from 'react'

import Home from './screens/Home'
import ProductList from './screens/ProductList'
import { Route, Routes } from 'react-router-dom'
import Pay from './screens/Pay'
import PaymentSuccessful from './screens/PaymentSuccessful'
import Product from './screens/Product'
import Login from './screens/Login'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/shop' element={<ProductList />} />
            <Route path='/pay' element={<Pay />} />
            <Route path='/success' element={<PaymentSuccessful />} />
        </Routes>
    )
}

export default App
