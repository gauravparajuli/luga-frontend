import React from 'react'

import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'

const ProductList = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <h2 className='text-4xl'>Dresses</h2>

                <div className='flex justify-between'>
                    <div>
                        <select>
                            <option disabled selected value=''>
                                Color
                            </option>
                            <option value=''>White</option>
                            <option value=''>Black</option>
                            <option value=''>Yellow</option>
                            <option value=''>Blue</option>
                        </select>
                        <select>
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
                        <select>
                            <option selected value=''>
                                Newest
                            </option>
                            <option value=''>Price (Asc)</option>
                            <option value=''>Price (Desc)</option>
                        </select>
                    </div>
                </div>
            </div>
            <Products />
            <Footer />
        </>
    )
}

export default ProductList
