import React from 'react'

import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Layout from '../components/Layout'
import { sliderItems } from '../data'

const Home = () => {
    return (
        <>
            <Layout>
                <Hero sliderData={sliderItems} />
                <Categories />
                <h1 className='mb-2 mt-8'>Popular Products</h1>
                <Products />
            </Layout>
        </>
    )
}

export default Home
