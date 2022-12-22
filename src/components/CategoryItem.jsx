import React from 'react'

const CategoryItem = ({ category }) => {
    const { img, title } = category
    return (
        <div className='relative group'>
            <img src={img} className='h-[75%]' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 flex flex-col align-items border w-1/3 h-1/3 bg-gray-900 opacity-50 group-hover:opacity-100'>
                {title}
                <br />
                SHOP NOW
            </div>
        </div>
    )
}

export default CategoryItem
