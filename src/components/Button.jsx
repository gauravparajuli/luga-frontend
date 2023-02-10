import React from 'react'

const Button = ({ children = 'BUTTON' }) => {
    return (
        <div className='text-lg border border-black cursor-pointer p-2 text-center link'>
            {children}
        </div>
    )
}

export default Button
