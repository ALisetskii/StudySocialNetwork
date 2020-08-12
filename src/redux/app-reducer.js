import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:

            return {
                ...state,
                initialized: true,

            }

        default:
            return state;
    }
}


export const initialisedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initialisedSuccess());
    })

}
/*export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(setInitializedSuccess());
};*/

export default appReducer;
