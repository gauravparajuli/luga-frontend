import { loginFailure, loginStart, loginSuccess } from './user'
import { persistCartStart, persistCartSuccess, persistCartError } from './cart'
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

export const persistCart = async (dispatch, user, cart) => {
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
