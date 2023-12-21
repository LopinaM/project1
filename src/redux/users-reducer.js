import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS ';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE ';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT ';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING ';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS  ';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // usersData: [...state.usersData],
                usersData: state.usersData.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                // usersData: [...state.usersData],
                usersData: state.usersData.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            };
        case SET_USERS: {
            return { ...state, usersData: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        default:
            return state;

    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const togglefollowingProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        userAPI.getUsers(page, pageSize).then(data => {
            dispatch(setCurrentPage(page));
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}


export const follow = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowingProgress(true, userId));
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(togglefollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowingProgress(true, userId));
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(togglefollowingProgress(false, userId));
            });
    }
}

export default usersReducer; 