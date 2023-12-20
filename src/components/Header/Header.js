import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import cat from '../../assets/images/cat.jpg';

function Header(props) {
    return (
        <header className={s.header}>
            <img src={cat} />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header >
    )
}

export default Header;

