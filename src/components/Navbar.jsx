import React from 'react'

import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import CLink from './CLink'
import CartIcon from './CartIcon'

import { useSelector, useDispatch } from 'react-redux'

import Annoucement from './Announcement'

const Navbar = () => {
    const user = useSelector((state) => state.user.currentUser)

    return (
        <>
            <Annoucement />
            <nav className='sticky top-0 container py-2 mx-auto bg-white z-10'>
                <div className='flex flex-col items-center gap-2 md:flex-row md:justify-between'>
                    <div className='text-center'>
                        <CLink underline={false} to='/'>
                            <h1>LUGA</h1>
                        </CLink>
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
                        <CLink to='/'>HOME</CLink>
                        <CLink to='/products'>SHOP</CLink>
                        <CLink to={user ? '/logout' : '/login'}>
                            {user ? 'SIGN OUT' : 'SIGN IN'}
                        </CLink>
                        <Link to='/cart'>
                            <CartIcon />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
