import React from 'react'

import CategoryItem from './CategoryItem'

import { categories } from '../data'

const Categories = () => {
    return (
        <div className='container mx-auto flex h-[450px] justify-between space-x-5'>
            {categories.map((category) => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </div>
    )
}

export default Categories
