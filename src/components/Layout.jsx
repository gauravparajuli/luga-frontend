import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <section className='container mx-auto'>{children}</section>
            <Footer />
        </>
    )
}

export default Layout
