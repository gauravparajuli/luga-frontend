import axios from 'axios'

const BASE_URL = 'https://luga-backend.vercel.app/api/v1/'

const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTgzMDg0ZDY1NmU1Y2UwOTIxZDI4ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzYxNjE0OTUsImV4cCI6MTY3NjQyMDY5NX0.3mn54qEATb4Iz-62HyxuRb6XZ2nbZcx_29I8VSENVrg'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = (user) => {
    return axios.create({
        baseURL: BASE_URL,
        headers: { Authorization: `Bearer ${user.currentUser.accessToken}` },
    })
}
