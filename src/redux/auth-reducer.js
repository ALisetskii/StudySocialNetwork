import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai_network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai_network/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null then captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload,

            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const getCatchaUrlSuccess = (captchaUrl) =>
    ({type: SET_USER_DATA, payload: {captchaUrl}})


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}

export const getCaptchaUrl = (url) => async (dispatch) => {

    let response = await securityAPI.getCaptcha(url)

    const captchaURL = response.data.url
    dispatch(getCatchaUrlSuccess(captchaURL));

}


export default authReducer;
