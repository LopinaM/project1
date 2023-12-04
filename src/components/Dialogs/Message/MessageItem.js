import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

function MessageItem(props) {
    return (<div className={s.dialog}> {props.message}</div >)
}

export default MessageItem;