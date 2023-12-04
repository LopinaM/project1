import s from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';


function Navbar(props) {

    let Data = navData => navData.isActive ? s.active : s.item;
    return (
        <nav className={s.nav}>
            <h2>Navbar</h2>
            <div className={s.item}>
                <NavLink to="/profile" className={Data}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={Data}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={Data}>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/music" className={Data}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={Data} >Settings</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/friends" className={Data} ><h2>Friends</h2></NavLink>
            </div>
            <div>
                {props.friendsData}
            </div>

        </nav >
    )
}

export default Navbar;