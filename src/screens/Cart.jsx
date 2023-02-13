import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import CartItem from '../components/CartItem'
import CLink from '../components/CLink'
import StripeCheckout from 'react-stripe-checkout'
import Button from '../components/Button'
import { Navigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { processOrder } from '../store/api-calls'

const Cart = () => {
    const { cart, user } = useSelector((state) => state)

    const dispatch = useDispatch()

    const [stripeToken, setStripeToken] = useState(null)

    const { totalPrice, totalQty, products } = cart

    const stripeTotal = totalPrice > 300 ? totalPrice - 50 : totalPrice

    useEffect(() => {
        if (!user.currentUser || totalPrice === 0) return // user should be logged in

        const makeRequest = async () => {
            try {
                await processOrder(dispatch, user, cart, {
                    source: stripeToken.id,
                    amount: stripeTotal * 100,
                })
                return <Navigate to='/success' />
            } catch (err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])

    const onToken = (token) => {
        setStripeToken(token)
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
                            <div>$ {stripeTotal}</div>
                        </div>
                        {user.currentUser && (
                            <StripeCheckout
                                name='Luga shop'
                                billingAddress
                                shippingAddress
                                description={`your total is $${stripeTotal}`}
                                total={stripeTotal * 100}
                                token={onToken}
                                stripeKey='pk_test_51M4I64JHoH6pbISrJ3wW3dFv1nMZ94en1D2C2XxLyU1PIQuZ3rUqUjSgnX92ULDtpApyqOU3U42Sv6n9R9vhO1cJ000tJyoG4G'
                            >
                                <Button>CHECKOUT WITH STRIPE</Button>
                            </StripeCheckout>
                        )}

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
