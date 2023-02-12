import React from 'react'

import { useDispatch } from 'react-redux'
import Button from '../components/Button'
import {
    addProduct,
    removeProduct,
    decreaseProductQuantity,
} from '../store/cart'

const CartItem = ({ product }) => {
    const dispatch = useDispatch()

    const handleClick = (sign) => {
        if (sign === '+') {
            dispatch(addProduct({ product }))
        } else {
            dispatch(decreaseProductQuantity({ id: product._id }))
        }
    }

    return (
        <div className='flex flex-col lg:flex-row lg:items-center border rounded-lg'>
            <div className='lg:h-[250px] lg:w-[250px]'>
                <img src={product.imageUrl} alt='' />
            </div>
            <div className='flex justify-center mb-2'>
                <ul className='space-y-2 lg:ml-8'>
                    <li>{product.title}</li>
                    <li>
                        {product.quantity} x ${product.price} = $
                        {product.quantity * product.price}
                    </li>
                    <li></li>
                    <li className='flex gap-5'>
                        <Button onClick={handleClick}>-</Button>
                        <span className='py-2'>{product.quantity}</span>
                        <Button onClick={() => handleClick('+')}>+</Button>
                        <Button
                            onClick={() =>
                                dispatch(removeProduct({ id: product._id }))
                            }
                        >
                            Remove
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CartItem
