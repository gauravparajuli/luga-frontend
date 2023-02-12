import React, { useState } from 'react'

import { useParams } from 'react-router-dom'

import Layout from '../components/Layout'
import Products from '../components/Products'

const ProductList = () => {
    const { category } = useParams()
    const [color, setColor] = useState('')
    const [sort, setSort] = useState('newest')

    return (
        <Layout title='Products'>
            <h1 className='mb-2 mt-8 text-center'>
                {category
                    ? `${category.charAt(0).toUpperCase()}${category.slice(1)}`
                    : 'Products'}
            </h1>

            <div className='flex justify-between mb-4'>
                <div>
                    <select
                        onChange={(e) => setColor(e.target.value)}
                        name='color'
                        className='p-2 mr-2'
                        value={color ? color : 'Color'}
                    >
                        <option disabled>Color</option>
                        <option value='white'>White</option>
                        <option value='black'>Black</option>
                        <option value='yellow'>Yellow</option>
                        <option value='blue'>Blue</option>
                    </select>
                </div>
                <div>
                    <select
                        className='p-2'
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option selected value='newest'>
                            Newest
                        </option>
                        <option value='asc'>Price (Asc)</option>
                        <option value='desc'>Price (Desc)</option>
                    </select>
                </div>
            </div>
            <Products
                category={category ? category : ''}
                color={color}
                sort={sort}
            />
        </Layout>
    )
}

export default ProductList
