import React, { useState, useEffect } from 'react'

import axios from 'axios'

import ProductItem from './ProductItem'

const Products = ({ category, color, sort }) => {
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
                setProducts(result.data)
                setFilteredProducts(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [category])

    useEffect(() => {
        // category &&
        setFilteredProducts(products.filter((item) => item.color === color))
    }, [color])

    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createadAt - b.createadAt)
            )
        }
        if (sort === 'asc') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        }
        if (sort === 'desc') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <>
            <div className='flex flex-col md:flex-row md:flex-wrap gap-4 mb-4'>
                {filteredProducts.map((product) => (
                    <ProductItem product={product} key={product._id} />
                ))}
            </div>
        </>
    )
}

export default Products
