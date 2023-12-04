import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

function DialogItem(props) {
    return (
        <div className={s.dialog}>
            <img src='https://i.pinimg.com/originals/cc/08/ce/cc08cef45d301724801afb9d02fe7d6d.jpg' />
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;