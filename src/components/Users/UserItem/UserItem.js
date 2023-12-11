import { NavLink } from 'react-router-dom';
import s from './../Users.module.css';

function UserItem(props) {
    return (
        <div className={s.friend}>
            <img src='https://fanibani.ru/images/wp-content/uploads/2021/06/na-avy-parni-35.jpg' />
            <NavLink to={"/users/" + props.id}>{props.name}</NavLink>
        </div>

    )
}

export default UserItem;