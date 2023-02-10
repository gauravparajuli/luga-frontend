import React from 'react'

import ProductItem from './ProductItem'

import { popularProducts } from '../data'

const Products = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row md:flex-wrap gap-4 mb-4'>
                {popularProducts.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </>
    )
}

export default Products
