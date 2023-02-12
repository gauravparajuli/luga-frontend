import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { addProduct } from '../store/cart'

import { publicRequest } from '../request-methods'

const Product = () => {
    const dispatch = useDispatch()

    const addProductToCart = (productItem) => {
        const { _id, title, price, imageUrl } = productItem
        dispatch(
            addProduct({
                product: { _id, title, price, imageUrl, quantity: 1 },
            })
        )
    }

    const { productId } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = async () => {
            // const response = await publicRequest.get(`product/${productId}/`)
            try {
                // const response = await axios.get(
                //     `https://luga-backend.vercel.app/api/v1/product/${productId}`
                // )
                const response = await publicRequest(`product/${productId}`)
                if ((response.status = 200)) {
                    setProduct(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }

        getProduct()
    }, [])

    return (
        <>
            <Layout>
                {product && (
                    <>
                        <h1 className='mb-2 mt-8 text-center'>
                            {product.title}
                        </h1>
                        <div className='flex flex-col md:flex-row'>
                            {/* image container */}
                            <div className='md:w-[60vw]'>
                                <img
                                    src={product.imageUrl}
                                    className='h-[80vh]'
                                    alt=''
                                />
                            </div>
                            {/* product info container  */}
                            <div className='flex flex-col gap-4 text-lg justify-center'>
                                <ul>
                                    <li>Description: {product.description}</li>
                                    <li>
                                        Color:{' '}
                                        <span className='uppercase'>
                                            {product.color}
                                        </span>
                                    </li>
                                    <li>
                                        Size:{' '}
                                        <span className='uppercase'>
                                            {product.size}
                                        </span>
                                    </li>
                                    <li>Price: ${product.price}</li>
                                </ul>
                                <div className='md:w-[200px] my-4'>
                                    <Button
                                        onClick={() =>
                                            addProductToCart(product)
                                        }
                                    >
                                        ADD TO CART
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Layout>
        </>
    )
}

export default Product
