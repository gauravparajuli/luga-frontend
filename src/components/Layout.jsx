import React, { useEffect } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ title, children }) => {
    useEffect(() => {
        document.title = title
            ? `${title} - Luga Clothing Store`
            : 'Luga Clothing Store'
    }, [])
    return (
        <>
            <Navbar />
            <section className='container mx-auto'>{children}</section>
            <Footer />
        </>
    )
}

export default Layout
