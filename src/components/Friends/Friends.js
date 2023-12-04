import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

function Friends(props) {
    let friendsElement =
        props.state.friendsData.map(friend => <FriendItem name={friend.name} id={friend.id} />);

    return (
        <div className={s.friends}>
            <div className={s.friendsItems}>
                {friendsElement}
            </div>
        </div>
    )
}

export default Friends;