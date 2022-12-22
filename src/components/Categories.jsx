import React from 'react'

import CategoryItem from './CategoryItem'

import { categories } from '../data'

const Categories = () => {
    return (
        <div className='container mx-auto flex justify-between space-x-5'>
            {categories.map((category) => (
                <CategoryItem category={category} />
            ))}
        </div>
    )
}

export default Categories
