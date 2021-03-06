import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";

import { AuthContext } from '../../context/auth-context';
import "./NavLinks.css";

const NavLinks = props => {
    const auth = useContext(AuthContext);
    const userId = auth.userId;
    
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>ALL USERS</NavLink>
            </li>
            {auth.isLoggedIn && <li>
                <NavLink to={`/${auth.userId}/places`} exact>MY PLACES</NavLink>
            </li>}
            {auth.isLoggedIn && <li>
                <NavLink to="/places/new" exact>ADD PLACE</NavLink>
            </li>}
            {!auth.isLoggedIn ? 
            <li>
                <NavLink to="/auth" exact>AUTHENTICATE</NavLink>
            </li> 
            : 
            <li>
                <NavLink onClick={auth.logout} to="/" exact>LOGOUT</NavLink>
            </li>
            }
        </ul>
    )
}

export default NavLinks;