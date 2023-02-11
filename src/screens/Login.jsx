import React, { useEffect } from 'react'
import TextBox from '../components/TextBox'
import Button from '../components/Button'
import CLink from '../components/CLink'

const Login = () => {
    useEffect(() => {
        document.title = 'Login'
    }, [])

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
                    <TextBox placeholder='Email' type='text' />
                    <TextBox placeholder='Password' type='password' />
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
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Login
