import React from 'react'

import {
    FaFacebookSquare,
    FaYoutubeSquare,
    FaTwitterSquare,
    FaPinterestSquare,
    FaInstagramSquare,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer class='bg-black '>
            {/* flex  container */}
            <div class='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                {/* logo and social links */}
                <div class='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                    <div class='mx-auto my-6 text-center text-white md:hidden'>
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    {/* logo */}
                    <div>
                        <h1 className='text-4xl text-white'>LUGA</h1>
                    </div>
                    {/* social links */}
                    <div class='flex justify-center space-x-4'>
                        <a href='#'>
                            <FaFacebookSquare />
                        </a>

                        <a href='#'>
                            <FaYoutubeSquare />
                        </a>

                        <a href='#'>
                            <FaTwitterSquare />
                        </a>

                        <a href='#'>
                            <img
                                src='img/icon-pinterest.svg'
                                alt=''
                                class='h-8'
                            />
                        </a>

                        <a href='#'>
                            <FaInstagramSquare />
                        </a>
                    </div>
                </div>
                {/* list container */}
                <div class='flex justify-around space-x-32'>
                    <div class='flex flex-col space-y-3 text-white'>
                        <a href='#' class='hover:text-brightRed'>
                            Home
                        </a>
                        <a href='#' class='hover:text-brightRed'>
                            Pricing
                        </a>
                        <a href='#' class='hover:text-brightRed'>
                            Products
                        </a>
                        <a href='#' class='hover:text-brightRed'>
                            About
                        </a>
                    </div>
                    <div class='flex flex-col space-y-3 text-white'>
                        <a href='#' class='hover:text-brightRed'>
                            Careers
                        </a>
                        <a href='#' class='hover:text-brightRed'>
                            Community
                        </a>
                        <a href='#' class='hover:text-brightRed'>
                            Privacy Policy
                        </a>
                    </div>
                </div>

                {/* input container  */}
                <div class='flex flex-col justify-between'>
                    <form>
                        <div class='flex space-x-3'>
                            <input
                                type='text'
                                class='flex-1 px-4 rounded-full focus:outline-none'
                                placeholder='Updated in your inbox'
                            />
                            <button class='px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-400 focus:outline-none'>
                                Go
                            </button>
                        </div>
                    </form>
                    <div class='hidden text-white md:block'>
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
