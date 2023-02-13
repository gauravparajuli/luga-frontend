import React, { useEffect, useState } from 'react'
import TextBox from '../components/TextBox'
import Button from '../components/Button'
import CLink from '../components/CLink'

import { useDispatch, useSelector } from 'react-redux'

import { loginUser } from '../store/api-calls'

const Login = () => {
    useEffect(() => {
        document.title = 'Login'
    }, [])

    const dispatch = useDispatch()
    const { isFetching, isError } = useSelector((state) => state.user)

    const [user, setUser] = useState({ email: '', password: '' })

    const updateUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&dl=artur-luczka-loAfOVk1eNc-unsplash.jpg&w=2400&q=80&fm=jpg&crop=entropy&cs=tinysrgb)`,
            }}
            className='h-[100vh] bg-cover flex items-center justify-center'
        >
            <div className='flex flex-col bg-white'>
                <div className='flex flex-col items-center justify-center bg-white text-lg p-4 gap-4'>
                    <h1 className='text-center'>LOGIN</h1>
                    <TextBox
                        name='email'
                        placeholder='Email'
                        type='text'
                        onChange={updateUser}
                    />
                    <TextBox
                        name='password'
                        placeholder='Password'
                        type='password'
                        onChange={updateUser}
                    />
                </div>
                <div className='p-4 flex flex-col'>
                    <ul className='mb-2'>
                        <li>
                            <CLink to='#'>Forgot your password?</CLink>
                        </li>
                        <li>
                            <CLink to='/signup'>Create new account</CLink>
                        </li>
                        <li>
                            <CLink to='/'>{'<<'} Home</CLink>
                        </li>
                    </ul>
                    <Button
                        onClick={() => loginUser(dispatch, user)}
                        disabled={isFetching}
                    >
                        Login
                    </Button>
                    {isError && (
                        <span className='text-red-500'>
                            Something went wrong, please try again later
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
