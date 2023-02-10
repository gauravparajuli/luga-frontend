import React from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'

const Product = () => {
    const { productId } = useParams()
    return (
        <>
            <Layout>
                <h1 className='mb-2 mt-8 text-center'>Denim Jeans</h1>
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* image container */}
                    <div>
                        <img
                            src='https://i.ibb.co/S6qMxwr/jean.jpg'
                            className='h-[90%]'
                            alt=''
                        />
                    </div>
                    {/* product info container  */}
                    <div className='flex flex-col gap-4 text-lg'>
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec venenatis, dolor in finibus malesuada,
                            lectus ipsum porta nunc, at iaculis arcu nisi sed
                            mauris. Nulla fermentum vestibulum ex, eget
                            tristique tortor pretium ut. Curabitur elit justo,
                            consequat id condimentum ac, volutpat ornare.
                        </p>
                        <p className='font-bold'>$ 20</p>
                        <div className='md:w-[200px] my-4'>
                            <Button>ADD TO CART</Button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Product
