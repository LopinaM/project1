import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import UserItem from './UserItem/UserItem';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg';

function Users(props) {
    // let usersElement =
    //     props.users.map(user => <UserItem name={user.name} key={user.id} />);

    // return (
    //     <div className={s.users}>
    //         <div className={s.usersItems}>
    //             {usersElement}
    //         </div>
    //     </div>
    // )
    debugger;
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items);
        });

        // props.setUsers([
        //     { id: 1, followed: false, name: 'Sasha' },
        //     { id: 2, followed: false, name: 'Kristina' },
        //     { id: 3, followed: true, name: 'Annya' },
        //     { id: 4, followed: true, name: 'Petya' },
        //     { id: 5, followed: false, name: 'Artur' },
        // ])
    }
    debugger;
    return <div>
        {
            props.users.map(user => <div key={user.id} >
                <span>
                    <div className={s.user}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </div>
                    <div>{user.followed
                        ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>{user.name}</span>
                    <span></span>
                </span>
            </div>)
        }
    </div>
}

export default Users;