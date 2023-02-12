import React from 'react'

const Button = ({ children = 'BUTTON', border, ...otherProps }) => {
    return (
        <div
            className={`text-lg border ${
                border ? border : 'border-black'
            } cursor-pointer p-2 text-center link`}
            {...otherProps}
        >
            {children}
        </div>
    )
}

export default Button
