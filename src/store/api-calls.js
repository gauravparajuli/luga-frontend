import { loginFailure, loginStart, loginSuccess } from './user'

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
