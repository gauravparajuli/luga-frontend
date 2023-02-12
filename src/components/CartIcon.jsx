import React from 'react'
import { useSelector } from 'react-redux'

import { FiShoppingCart } from 'react-icons/fi'

const CartIcon = () => {
    const totalItems = useSelector((state) => state.cart.totalQty)
    return (
        <div className='flex items-center border p-2 gap-2'>
            <FiShoppingCart className='h-6 w-6 cursor-pointer' />
            {totalItems > 0 && <span>({totalItems})</span>}
        </div>
    )
}

export default CartIcon
