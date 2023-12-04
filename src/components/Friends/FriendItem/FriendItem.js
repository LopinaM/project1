import { NavLink } from 'react-router-dom';
import s from './../Friends.module.css';

function FriendItem(props) {
    return (
        <div className={s.friend}>
            <img src='https://fanibani.ru/images/wp-content/uploads/2021/06/na-avy-parni-35.jpg' />
            <NavLink to={"/friends/" + props.id}>{props.name}</NavLink>
        </div>

    )
}

export default FriendItem;