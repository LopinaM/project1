import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div className={s.user}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {

                                props.togglefollowingProgress(true, user.id);

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                    { withCredentials: true })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }
                                        props.togglefollowingProgress(false, user.id);
                                    });

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {

                                props.togglefollowingProgress(true, user.id);

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, { withCredentials: true })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                        props.togglefollowingProgress(false, user.id);
                                    });

                            }}>Follow</button>}
                    </div>
                </span>

                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
            </div >)
        }
    </div >

}


export default Users; 