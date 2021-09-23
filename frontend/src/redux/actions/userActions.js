import * as typeAction from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: typeAction.USER_LOGIN_REQUEST })
  try {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/auth/login',
      { email, password },
      config
    )
    dispatch({
      type: typeAction.USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('authToken', JSON.stringify(data.token))
  } catch (error) {
    dispatch({
      type: typeAction.USER_LOGIN_FAIL,
      payload: error.response.data.error,
    })
  }
}
