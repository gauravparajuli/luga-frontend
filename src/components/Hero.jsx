import React, { useState } from 'react'

const Hero = ({ sliderData }) => {
    return (
        <div>
            {sliderData &&
                sliderData.map((slide) => {
                    const { id, title, img, desc, bg } = slide
                    return (
                        <div
                            key={id}
                            className={`flex items-center bg-[${bg}] h-[90vh] w-full justify-center`}
                        >
                            {/* image */}
                            <div className='hidden md:block'>
                                <img src={img} className='h-[90vh]' alt='' />
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
    )
}

export default Hero
