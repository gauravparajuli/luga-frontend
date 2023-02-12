import React, { useState, useEffect } from 'react'

import axios from 'axios'

import ProductItem from './ProductItem'

import { popularProducts } from '../data'

const Products = ({ category, filters, sort }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const result = await axios.get(
                    category
                        ? `https://luga-backend.vercel.app/api/v1/product?category=${category}`
                        : `https://luga-backend.vercel.app/api/v1/product`
                )
                console.log(result)
                setProducts(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [category])

    // useEffect(() => {
    //     // category &&
    //     setFilteredProducts(
    //         products.filter((item) =>
    //             Object.entries(filters).every(([key, value]) =>
    //                 item[key].includes(value)
    //             )
    //         )
    //     )
    // }, [products, category, filters])

    return (
        <>
            <div className='flex flex-col md:flex-row md:flex-wrap gap-4 mb-4'>
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </>
    )
}

export default Products
