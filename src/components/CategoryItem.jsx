import React from 'react'

const CategoryItem = ({ category }) => {
    const { img, title } = category
    return (
        <div>
            <img src={img} className='h-6 w-4' />
        </div>
    )
}

export default CategoryItem
