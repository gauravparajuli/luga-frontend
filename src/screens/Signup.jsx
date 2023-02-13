import React, { useEffect, useState } from 'react'
import TextBox from '../components/TextBox'
import Button from '../components/Button'
import CLink from '../components/CLink'
import { publicRequest } from '../request-methods'

const Signup = () => {
    useEffect(() => {
        document.title = 'Signup'
    }, [])

    const initial = { username: '', email: '', password: '' }

    const [user, setUser] = useState(initial)

    const updateUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const signupUser = async () => {
        try {
            const response = await publicRequest.post('auth/signup', user)
            if (response.status === 201) alert('Registration successful.')
            setUser(initial)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&dl=artur-luczka-loAfOVk1eNc-unsplash.jpg&w=2400&q=80&fm=jpg&crop=entropy&cs=tinysrgb)`,
            }}
            className='h-[100vh] bg-cover flex items-center justify-center'
        >
            <div className='flex flex-col bg-white '>
                <div className='flex flex-col items-center justify-center bg-white text-lg p-4 gap-4'>
                    <h1 className='text-center'>SIGNUP</h1>
                    <TextBox
                        name='username'
                        value={user.username}
                        placeholder='Username'
                        type='text'
                        onChange={updateUser}
                    />
                    <TextBox
                        name='email'
                        value={user.email}
                        placeholder='Email'
                        type='text'
                        onChange={updateUser}
                    />
                    <TextBox
                        name='password'
                        value={user.password}
                        onChange={updateUser}
                        placeholder='Password'
                        type='password'
                    />
                </div>
                <div className='p-4 flex flex-col'>
                    <ul className='mb-2'>
                        <li>
                            <CLink to='/'>{'<<'} Home</CLink>
                        </li>
                    </ul>
                    <Button onClick={signupUser}>Signup</Button>
                </div>
            </div>
        </div>
    )
}

export default Signup
