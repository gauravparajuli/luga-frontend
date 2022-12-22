import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

const Home = () => {
    return (
        <>
            <Navbar />
            {/* <Slider /> */}
            <Categories />
            <Footer />
        </>
    )
}

export default Home
