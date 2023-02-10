import React from 'react'

import CategoryItem from './CategoryItem'

import { categories } from '../data'

const Categories = () => {
    return (
        <>
            <h1 className='mb-2 mt-8'>Categories</h1>
            <div className='flex flex-col lg:flex-row justify-between gap-4'>
                {categories.map((category) => (
                    <CategoryItem category={category} key={category.id} />
                ))}
            </div>
        </>
    )
}

export default Categories
