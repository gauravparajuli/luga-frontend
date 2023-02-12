import React from 'react'

import Button from '../components/Button'

import { FiShoppingCart, FiHeart, FiSearch } from 'react-icons/fi'

const ProductItem = ({ product }) => {
    return (
        <div className='flex flex-col items-center bg-gray-200 h-[350px] w-[100vw] lg:w-[30vw] cursor-pointer hover:bg-gray-700/30 transition-colors'>
            <img src={product.imageUrl} className='h-[80%]' />
            <Button>ADD TO CART</Button>
        </div>
    )
}

export default ProductItem
