import React from 'react'

const CategoryItem = ({ category }) => {
    const { img, title } = category
    return (
        <div className='relative group cursor-pointer h-[400px] w-[100vw]'>
            <img src={img} className='h-full w-full object-cover' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 flex flex-col justify-center text-white border w-1/3 h-1/3 bg-gray-900 opacity-50 group-hover:opacity-100 text-center tranisition-all'>
                {title}
                <br />
                SHOP NOW
            </div>
        </div>
    )
}

export default CategoryItem
