import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import UserItem from './UserItem/UserItem';

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
    return <div>
        {
            props.users.map(user => <div key={user.id} >
                <span>
                    <div className={s.user}>
                        <img src='https://fanibani.ru/images/wp-content/uploads/2021/06/na-avy-parni-35.jpg' />
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