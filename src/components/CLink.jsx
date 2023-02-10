import React from 'react'

import { Link } from 'react-router-dom'

// Custom Link with hover effect (underline)

const CLink = ({ children, underline = true, to }) => {
    return (
        <Link to={to} className={underline ? 'link' : ''}>
            {children}
        </Link>
    )
}

export default CLink
