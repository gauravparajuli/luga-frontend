import React from 'react'

import { useDispatch } from 'react-redux'
import {
    addProduct,
    removeProduct,
    decreaseProductQuantity,
} from '../store/cart'

const CartItem = ({ product }) => {
    return (
        <div>
            <ul>
                <li>{product.title}</li>
                <li>{product.price}</li>
                <li>{product.quantity}</li>
            </ul>
        </div>
    )
}

export default CartItem
