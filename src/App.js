import React from 'react'

import Home from './screens/Home'
import ProductList from './screens/ProductList'
import { Route, Routes } from 'react-router-dom'
import Pay from './screens/Pay'
import PaymentSuccessful from './screens/PaymentSuccessful'
import Product from './screens/Product'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pay' element={<Pay />} />
            <Route path='/success' element={<PaymentSuccessful />} />
        </Routes>
    )
}

export default App
