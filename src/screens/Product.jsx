import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Product = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto flex justify-between'>
                {/* image container */}
                <div>
                    <img
                        src='https://i.ibb.co/S6qMxwr/jean.jpg'
                        className='h-[90%]'
                        alt=''
                    />
                </div>
                {/* product info container  */}
                <div>
                    <h3 className='text-3xl'>Denim Jumpsuit</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec venenatis, dolor in finibus malesuada, lectus
                        ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla
                        fermentum vestibulum ex, eget tristique tortor pretium
                        ut. Curabitur elit justo, consequat id condimentum ac,
                        volutpat ornare.
                    </p>
                    <p>$ 20</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product
