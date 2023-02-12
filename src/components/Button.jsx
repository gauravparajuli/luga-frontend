import React from 'react'

const Button = ({ children = 'BUTTON', ...otherProps }) => {
    return (
        <div
            className='text-lg border border-black cursor-pointer p-2 text-center link'
            {...otherProps}
        >
            {children}
        </div>
    )
}

export default Button
