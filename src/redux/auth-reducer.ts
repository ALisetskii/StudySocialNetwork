import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai_network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai_network/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null   // if null then captcha is not required
};
export type InitialStateType = typeof initialState
const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
        case SET_USER_DATA:

            return {
                ...state,
               // userId:'1sfgdsfg11', // почему нет ошибки?!
                ...action.payload,

            }

        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})


type GetCatchaUrlSuccessActionType = {
    type: typeof SET_USER_DATA
    payload: { captchaUrl: string }
}
export const getCatchaUrlSuccess = (captchaUrl: string): GetCatchaUrlSuccessActionType =>
    ({type: SET_USER_DATA, payload: {captchaUrl}})


export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {

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

export const logout = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}

export const getCaptchaUrl = () => async (dispatch: any) => {

    let response = await securityAPI.getCaptcha()

    const captchaURL = response.data.url
    dispatch(getCatchaUrlSuccess(captchaURL));

}


export default authReducer;
