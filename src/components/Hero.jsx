import React, { useState } from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Hero = ({ sliderData }) => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex === 0 ? slideIndex : slideIndex - 1)
        } else {
            setSlideIndex(slideIndex === 0 ? slideIndex + 1 : slideIndex)
        }
        console.log(slideIndex)
    }

    return (
        <div className='relative mx-auto group transition-all'>
            {/* <div className='hidden group-hover:block absolute left-3 top-1/2 cursor-pointer rounded-full bg-gray-200 p-1 opacity-50'>
                <AiOutlineArrowLeft
                    size={'28px'}
                    onClick={() => handleClick('left')}
                />
            </div>
            <div className='hidden group-hover:block absolute right-3 top-1/2 cursor-pointer rounded-full bg-gray-200 p-1 opacity-50'>
                <AiOutlineArrowRight
                    size={'28px'}
                    onClick={() => handleClick('right')}
                />
            </div> */}
            <div>
                {sliderData &&
                    sliderData.map((slide) => {
                        const { id, title, img, desc, bg } = slide
                        return (
                            <div
                                key={id}
                                className={`flex items-center bg-[${bg}] h-[90vh] w-full justify-center
                                `}
                            >
                                {/* image */}
                                <div className='hidden md:block'>
                                    <img
                                        src={img}
                                        className='h-[90vh]'
                                        alt=''
                                    />
                                </div>
                                {/* info container */}
                                <div className='space-y-2'>
                                    <div className='text-6xl'>{title}</div>
                                    <div className='text-xl'>{desc}</div>
                                    <div className='text-lg border border-black cursor-pointer p-2 w-[120px] text-center'>
                                        SHOP NOW
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Hero
