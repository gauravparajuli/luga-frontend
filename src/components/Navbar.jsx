import React from 'react'

import { FiShoppingCart, FiHeart, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Annoucement from './Announcement'

const Navbar = () => {
    return (
        <>
            <Annoucement />
            <nav className='container py-2 mx-auto'>
                <div className='flex flex-col items-center gap-2 md:flex-row md:justify-between'>
                    <div className='text-center'>
                        <Link to='/'>
                            <h1>LUGA</h1>
                        </Link>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center border py-2  px-3 rounded-full'>
                            <input
                                type='text'
                                className='focus:outline-none border-none'
                                placeholder='search for product(s)'
                            />
                            <FiSearch className='h-6 w-6' />
                        </div>
                    </div>

                    <div className='flex space-x-4 items-center'>
                        <Link to='/'>HOME</Link>
                        <Link to='/shop'>SHOP</Link>
                        <Link to='/auth'>SIGN IN</Link>
                        <FiHeart className='h-6 w-6' />
                        <FiShoppingCart className='h-6 w-6' />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
