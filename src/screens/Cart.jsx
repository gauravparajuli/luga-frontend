import React from 'react'
import Layout from '../components/Layout'
import CartItem from '../components/CartItem'
import Button from '../components/Button'
import CLink from '../components/CLink'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Cart = () => {
    const { cart, user } = useSelector((state) => state)

    const { totalPrice, totalQty, products } = cart

    const handleCheckout = () => {
        if (!user.currentUser || totalPrice === 0) return // user should be logged in
    }

    return (
        <Layout title='Cart'>
            <h1 className='mt-8 text-center'>Cart</h1>
            <h6 className='mb-2 text-center'>{totalQty} Item(s) in Cart.</h6>
            <h5 className=''>
                <CLink to='/products'>{'<'} Continue Shopping</CLink>
            </h5>
            <div className='flex flex-col lg:flex-row gap-4 mb-4'>
                <div className='flex flex-col gap-2 lg:w-[80vw]'>
                    {products.map((x) => (
                        <CartItem product={x} key={x._id} />
                    ))}
                </div>
                <div className='flex justify-center lg:w-[30vw] lg:h-[30vh] min-h-[230px]'>
                    <div className='bg-white border rounded-xl p-4'>
                        <h2>Order Summary</h2>
                        <div className='grid grid-cols-2 my-4'>
                            <div>TOTAL ITEMS</div>
                            <div>{totalQty}</div>
                            <div>TOTAL PRICE</div>
                            <div>$ {totalPrice}</div>
                            <div>TO PAY</div>
                            <div>
                                ${' '}
                                {totalPrice > 300
                                    ? totalPrice - 50
                                    : totalPrice}
                            </div>
                        </div>
                        <Button onClick={handleCheckout}>
                            CHECKOUT WITH STRIPE
                        </Button>
                        {!user.currentUser && (
                            <span className='text-xs text-red-500'>
                                Please login to checkout.
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart
