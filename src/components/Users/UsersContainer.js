import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => { dispatch(followAC(userID)); },
        unfollow: (userID) => { dispatch(unfollowAC(userID)); },
        setUsers: (users) => { dispatch(setUsersAC(users)); },

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;