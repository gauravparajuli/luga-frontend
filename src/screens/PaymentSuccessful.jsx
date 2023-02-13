import React from 'react'

import CLink from '../components/CLink'

import Layout from '../components/Layout'

const PaymentSuccessful = () => {
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
