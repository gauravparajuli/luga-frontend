import React from 'react'

import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addProduct } from '../store/cart'

const ProductItem = ({ product }) => {
    const dispatch = useDispatch()

    const addProductToCart = (productItem) => {
        console.log('adding to cart')
        const { _id, title, price, imageUrl } = productItem
        dispatch(
            addProduct({
                product: { _id, title, price, imageUrl, quantity: 1 },
            })
        )
    }

    return (
        <div className='flex flex-col'>
            <div className=' bg-gray-200 h-[350px] w-[100vw] lg:w-[30vw] cursor-pointer hover:bg-gray-700/30 transition-colors'>
                <Link
                    to={`/product/${product._id}`}
                    className=' flex items-center justify-center h-full'
                >
                    <img src={product.imageUrl} className='h-[80%] ' />
                </Link>
            </div>
            <Button onClick={() => addProductToCart(product)}>
                ADD TO CART
            </Button>
        </div>
    )
}

export default ProductItem
