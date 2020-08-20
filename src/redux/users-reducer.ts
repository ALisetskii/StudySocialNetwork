import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../untils/object-helpers";
import {UserType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,  // Array of usersid
};

export type InitialStateType = typeof initialState
const usersReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case FOLLOW:

            return {
                ...state,

                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                /*  users: state.users.map(u => {
                      if (u.id === action.userId) {
                          return {...u, followed: true}
                      }
                      return u;
                  })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                /* users: state.users.map(u => {
                     if (u.id === action.userId) {
                         return {...u, followed: false}
                     }
                     return u;
                 })*/
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

type followSuccessActionType = {
    type: typeof FOLLOW,
    userId:number
}
export const followSuccess = (userId:number):followSuccessActionType => ({type: FOLLOW, userId})

type unfollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId:number
}
export const unfollowSuccess = (userId:number):unfollowSuccessActionType => ({type: UNFOLLOW, userId})

type setUsersActionType = {
    type: typeof SET_USERS,
    users:Array<UserType>
}
export const setUsers = (users:Array<UserType>):setUsersActionType => ({type: SET_USERS, users})

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage:number
}
export const setCurrentPage = (currentPage:number):setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})

type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count:number
}
export const setTotalUsersCount = (totalUsersCount:number):setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching:boolean
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})


export const toggleFollowingProgress = (isFetching:boolean, userId:number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const requestUsers = (currentPage:number, pageSize:number) => {
    return async (dispatch:any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));

    }
}

const followUnfollowFlow = async (dispatch:any, userId:number, apiMethod:any, actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId:number) => {
    return async (dispatch:any) => {
        let apiMethod = usersAPI.follow.bind(usersAPI)
        await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)


    }
}
export const unfollow = (userId:number) => {
    return async (dispatch:any) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI)
        await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)


    }
}

export default usersReducer;
