import { useState, useEffect } from 'react'
import axios from 'axios'
import './PrivateScreen.scss'

const PrivateScreen = () => {
    const [error, setError] = useState('')
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const fetchPrivateDate = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem(
                        'authToken'
                    )}`,
                },
            }
            try {
                const { data } = await axios.get('/api/private', config)
                localStorage.setItem('user', JSON.stringify(data))
                const { username } = data
                setUserName(username)
            } catch (error) {
                console.log(error)
                localStorage.removeItem('authToken')
                setError('You are not authorized please login')
            }
        }
        fetchPrivateDate()
    }, [])

    return error ? (
        <span className="error-message">{error}</span>
    ) : (
        <h1>Welcome {userName}!</h1>
    )
}

export default PrivateScreen
