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

import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from './store/user'

const Logout = () => {
    const dispatch = useDispatch()
    dispatch(logoutUser())
    return <Navigate to='/' />
}

const App = () => {
    const user = useSelector((state) => state.user.currentUser)
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route
                path='login'
                element={user ? <Navigate to='/' /> : <Login />}
            />
            <Route path='logout' element={<Logout />} />
            <Route path='cart' element={<Cart />} />
            <Route
                path='signup'
                element={user ? <Navigate to='/' /> : <Signup />}
            />
            <Route path='product/:productId' element={<Product />} />
            <Route path='products'>
                <Route index element={<ProductList />} />
                <Route path=':category' element={<ProductList />} />
            </Route>
            <Route path='pay' element={<Pay />} />
            <Route path='success' element={<PaymentSuccessful />} />
        </Routes>
    )
}

export default App
