import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg';
import React from 'react';

class Users extends React.Component {

    constructor(props) {
        super(props);
        // alert('new');
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }


    render() {
        return <div>

            {
                this.props.users.map(user => <div key={user.id} >
                    <span>
                        <div className={s.user}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                        </div>
                        <div>{user.followed
                            ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>{user.name}</span>
                        <span></span>
                    </span>
                </div>)
            }
        </div >
    }

}

export default Users;