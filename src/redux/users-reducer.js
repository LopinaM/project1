const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS ';

let initialState = {
    usersData: [
        { id: 1, followed: false, name: 'Sasha' },
        { id: 2, followed: false, name: 'Kristina' },
        { id: 3, followed: true, name: 'Annya' },
        { id: 4, followed: true, name: 'Petya' },
        { id: 5, followed: false, name: 'Artur' }
    ]
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
            return { ...state, usersData: [...state.usersData, ...action.users] }
        }

        default:
            return state;

    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;