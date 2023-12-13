import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from '../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => { dispatch(followAC(userID)); },
        unfollow: (userID) => { dispatch(unfollowAC(userID)); },
        setUsers: (users) => { dispatch(setUsersAC(users)); },
        setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)); },
        setTotalUsersCount: (totalCount) => { dispatch(setUsersTotalCountAC(totalCount)) }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;