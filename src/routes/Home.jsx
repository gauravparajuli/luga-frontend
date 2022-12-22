import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
    return (
        <>
            <Navbar />
            {/* <Slider /> */}
            <Categories />
            <Products />
            <Footer />
        </>
    )
}

export default Home
