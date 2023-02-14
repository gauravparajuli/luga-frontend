import { loginFailure, loginStart, loginSuccess } from './user'
import {
    persistCartStart,
    persistCartSuccess,
    persistCartError,
    resetCart,
} from './cart'
import {
    processOrderStart,
    processOrderSuccess,
    processOrderFailure,
} from './order'
import { publicRequest, userRequest } from '../request-methods'

export const loginUser = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

const persistCart = async (dispatch, user, cart) => {
    dispatch(persistCartStart())
    const processedCart = cart.products.map((item) => ({
        productId: item._id,
        unitPrice: item.price,
        quantity: item.quantity,
    }))
    try {
        const response = await userRequest(user).patch('cart/cartitems', {
            products: processedCart,
        })
        if (response.status === 200) dispatch(persistCartSuccess())
    } catch (error) {
        console.log(error)
        dispatch(persistCartError())
    }
}

export const processOrder = async (dispatch, user, cart, order) => {
    // before processing order, persist the order to database first
    persistCart(dispatch, user, cart)

    dispatch(processOrderStart())
    try {
        const response = await userRequest(user).post('checkout/payment', order)
        if (response.status === 200) dispatch(processOrderSuccess())
    } catch (error) {
        console.log(error)
        dispatch(processOrderFailure())
    }
}
