import React from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Slider = () => {
    return (
        <div className='container relative mx-auto bg-gray-500 h-screen group'>
            <div className='hidden group-hover:block absolute left-5 top-1/2 cursor-pointer rounded-full bg-gray-200 p-1'>
                <AiOutlineArrowLeft size={'28px'} />
            </div>
            <div className='hidden group-hover:block absolute right-5 top-1/2 cursor-pointer rounded-full bg-gray-200 p-1'>
                <AiOutlineArrowRight size={'28px'} />
            </div>
        </div>
    )
}

export default Slider
