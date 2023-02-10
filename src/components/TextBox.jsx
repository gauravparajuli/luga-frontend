import React from 'react'

const TextBox = ({ type, placeholder, ...otherProps }) => {
    return (
        <input
            type={type}
            className='border focus:border-green-600 focus:outline-none pl-2'
            placeholder={placeholder}
            {...otherProps}
        />
    )
}

export default TextBox
