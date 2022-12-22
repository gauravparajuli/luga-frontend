import React from 'react'

import ProductItem from './ProductItem'

import { popularProducts } from '../data'

const Products = () => {
    return (
        <div className='container mx-auto flex flex-wrap space-x-5'>
            {popularProducts.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </div>
    )
}

export default Products
