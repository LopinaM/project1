import s from './Navbar.module.css';
// console.log(s);
function Navbar() {
    return (
        <nav className={s.nav}>
            <div><a className={`${s.item} ${s.active}`}>Profile</a></div>
            <div><a className={`${s.item} ${s.active}`}>News</a></div>
            <div><a className={`${s.item} ${s.active}`}>Messages</a></div>
            <div><a className={`${s.item} ${s.active}`}>Music</a></div>
            <div><a className={`${s.item} ${s.active}`}>Settings</a></div>
        </nav >
    )
}

export default Navbar;