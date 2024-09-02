import { createContext } from 'react'
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
 token: token ? token : null,
 user: null,
}

const API_URL = 'http://localhost:3000'

export const UserContext = createContext(initialState)