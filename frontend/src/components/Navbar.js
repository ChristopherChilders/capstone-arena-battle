import React from 'react';
import { Link } from 'react-router-dom';
import style from '../StyleSheets/Navbar.module.css'
class Navbar extends React.Component {
    render() {
        return (
            <div className={style.navBar}>
                <div className={style.navItems}>
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Registration</Link>
                </div>
            </div>
        )
    }

}
export default Navbar;