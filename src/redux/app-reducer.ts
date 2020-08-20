import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


export type  InitialStateType = {
    initialized: boolean,
}

let initialState: InitialStateType = {
    initialized: false
    //globalError: null, доделать дисптч и отображение ошибки thunk->dispatch(показать->thunk(спрятать ерор по таймауту)
};

const appReducer = (state = initialState, action: InitialisedSuccessActionType): InitialStateType => {
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

export type InitialisedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS,
}
export const initialisedSuccess = (): InitialisedSuccessActionType => ({type: INITIALIZED_SUCCESS})


export const initializeApp = () => (dispatch: any) => {
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
