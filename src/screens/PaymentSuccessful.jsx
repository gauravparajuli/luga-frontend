import React from 'react'

import { useDispatch } from 'react-redux'
import { resetCart } from '../store/cart'

import CLink from '../components/CLink'

import Layout from '../components/Layout'

const PaymentSuccessful = () => {
    const dispatch = useDispatch()
    dispatch(resetCart())

    return (
        <Layout title='Payment Successfull'>
            <div className='flex flex-col text-lg lg:text-4xl items-center justify-center mt-40'>
                <span>Your payment was received successfully!</span>
                <span>We will get back to you soon.</span>
                <CLink to='/'>{'<'} Go back to home</CLink>
            </div>
        </Layout>
    )
}

export default PaymentSuccessful
