import React, { useState } from 'react'

import { useParams } from 'react-router-dom'

import Layout from '../components/Layout'
import Products from '../components/Products'

const ProductList = () => {
    const { category } = useParams()
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('newest')

    const updateFilter = (e) => {
        const { value, name } = e.target
        setFilters({ ...filters, [name]: value })
    }

    return (
        <Layout title='Products'>
            <h1 className='mb-2 mt-8 text-center'>
                Products{category && ` (${category.toUpperCase()})`}
            </h1>

            <div className='flex justify-between mb-4'>
                <div>
                    <select
                        onChange={updateFilter}
                        name='color'
                        className='p-2 mr-2'
                        value={filters.color ? filters.color : 'Color'}
                    >
                        <option disabled>Color</option>
                        <option value='white'>White</option>
                        <option value='black'>Black</option>
                        <option value='yellow'>Yellow</option>
                        <option value='blue'>Blue</option>
                    </select>
                    <select
                        onChange={updateFilter}
                        name='size'
                        className='p-2'
                        value={filters.size ? filters.size : 'Size'}
                    >
                        <option disabled>Size</option>
                        <option value='xs'>XS</option>
                        <option value='s'>S</option>
                        <option value='m'>M</option>
                        <option value='l'>L</option>
                        <option value='xl'>XL</option>
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
                filters={filters}
                sort={sort}
            />
        </Layout>
    )
}

export default ProductList
