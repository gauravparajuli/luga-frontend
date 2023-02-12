import React from 'react'
import Layout from '../components/Layout'
import CartItem from '../components/CartItem'
import Button from '../components/Button'

import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector((state) => state.cart)

    const { totalPrice, totalQty, products } = cart

    return (
        <Layout>
            <h1 className='mt-8 text-center'>Cart</h1>
            <h6 className='mb-2 text-center'>{totalQty} Item(s) in Cart.</h6>
            <div className='flex flex-col lg:flex-row gap-4 mb-4'>
                <div className='flex flex-col gap-2 border lg:w-[80vw]'>
                    {products.map((x) => (
                        <CartItem product={x} key={x._id} />
                    ))}
                </div>
                <div className='flex justify-center lg:w-[30vw] lg:h-[30vh] min-h-[200px]'>
                    <div className='bg-white border rounded-xl p-4'>
                        <h2>Order Summary</h2>
                        <div className='grid grid-cols-2 my-4'>
                            <div>TOTAL ITEMS</div>
                            <div>{totalQty}</div>
                            <div>TOTAL PRICE</div>
                            <div>$ {totalPrice}</div>
                        </div>
                        <Button>CHECKOUT WITH STRIPE</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart
