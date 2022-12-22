import React from 'react'

import { FiShoppingCart, FiHeart, FiSearch } from 'react-icons/fi'

const ProductItem = ({ product }) => {
    return (
        <div className='flex items-center bg-gray-200 h-[350px]'>
            <div>
                <FiHeart className='h-6 w-6' />
                <FiShoppingCart className='h-6 w-6' />
            </div>
            <img src={product.img} className='h-[75%]' />
        </div>
    )
}

export default ProductItem
