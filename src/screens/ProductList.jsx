import React from 'react'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'

const ProductList = () => {
    return (
        <Layout title='Products'>
            <h1 className='mb-2 mt-8 text-center'>Products</h1>

            <div className='flex justify-between mb-4'>
                <div>
                    <select className='p-2 mr-2'>
                        <option disabled selected value=''>
                            Color
                        </option>
                        <option value=''>White</option>
                        <option value=''>Black</option>
                        <option value=''>Yellow</option>
                        <option value=''>Blue</option>
                    </select>
                    <select className='p-2'>
                        <option disabled selected value=''>
                            Size
                        </option>
                        <option value=''>XS</option>
                        <option value=''>S</option>
                        <option value=''>M</option>
                        <option value=''>L</option>
                        <option value=''>XL</option>
                    </select>
                </div>
                <div>
                    <select className='p-2'>
                        <option selected value=''>
                            Newest
                        </option>
                        <option value=''>Price (Asc)</option>
                        <option value=''>Price (Desc)</option>
                    </select>
                </div>
            </div>
            <Products />
        </Layout>
    )
}

export default ProductList
