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
                {/* <Products /> */}
            </Layout>
        </>
    )
}

export default Home
