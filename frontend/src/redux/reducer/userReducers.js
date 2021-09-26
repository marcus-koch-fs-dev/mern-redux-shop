import * as actionTypes from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_REQUEST:
            return { loading: true }
        case actionTypes.USER_LOGIN_SUCCESS:
            return { loading: false, userData: action.payload }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case actionTypes.USER_LOGOUT:
            return { userData: action.payload }
        default:
            return state
    }
}

// pwreset

// update

// register
