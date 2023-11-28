import s from './Navbar.module.css';
import { NavLink, Link, Outlet } from 'react-router-dom';
// console.log(s);
function Navbar() {
    return (
        <nav className={s.nav}>
            <h2>Navbar</h2>
            <div className={s.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/music">Music</Link>
            </div>
            <div className={s.item}>
                <Link to="/settings">Settings</Link>
            </div>
            {/* <main>
                <Outlet />
            </main> */}

        </nav >
    )
}

export default Navbar;