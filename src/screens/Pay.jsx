import React, { useState, useEffect } from 'react'
import axios from 'axios'

import StripeCheckout from 'react-stripe-checkout'

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    'http://localhost:8000/api/v1/checkout/payment',
                    {
                        source: stripeToken.id,
                        amount: 2000,
                    },
                    {
                        headers: {
                            Authorization:
                                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzIzMDM5YzEyMWUwZGNhNDhlM2MxMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzM2NzUzNzcsImV4cCI6MTY3MzkzNDU3N30.O7wSItBwIqXS2PZZgy4NyzKcow4vsEREDS-7_tZVeI4',
                        },
                    }
                )
                console.log(res.data)
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
        <StripeCheckout
            name='Luga shop'
            billingAddress
            shippingAddress
            description='your total is $20'
            total={2000}
            token={onToken}
            stripeKey='pk_test_51M4I64JHoH6pbISrJ3wW3dFv1nMZ94en1D2C2XxLyU1PIQuZ3rUqUjSgnX92ULDtpApyqOU3U42Sv6n9R9vhO1cJ000tJyoG4G'
        >
            <div>Pay</div>
        </StripeCheckout>
    )
}

export default Pay
