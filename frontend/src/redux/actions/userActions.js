import * as actionTypes from '../constants/userConstants'
import axios from 'axios'

const axiosClient = axios.create()

export const login = (email, password) => async (dispatch) => {
    dispatch({ type: actionTypes.USER_LOGIN_REQUEST })
    const config = {
        header: {
            'Content-Type': 'application/json',
        },
    }

    try {
        const { data } = await axiosClient.post(
            '/api/auth/login',
            { email, password },
            config
        )
        dispatch({
            type: actionTypes.USER_LOGIN_SUCCESS,
            payload: data,
        })
        localStorage.setItem('authToken', data.token)
    } catch (error) {
        dispatch({
            type: actionTypes.USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
