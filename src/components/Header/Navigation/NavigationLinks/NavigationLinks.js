import React from 'react';
import classes from './NavigationLinks.css';
import {NavLink} from 'react-router-dom';

const navigationLinks = (props) => {

    return(
            <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink 
                        to="/newrequest"
                        activeClassName="active"
                        className="nav-link"
                    >New Request </NavLink>
                     
                  </li>
                  <li className="nav-item">
                    <NavLink 
                        to="/checkstatus"
                        activeClassName="active"
                        className="nav-link"
                    >Check Status </NavLink>
                  </li>
                </ul>
        
    )
}

export default navigationLinks;