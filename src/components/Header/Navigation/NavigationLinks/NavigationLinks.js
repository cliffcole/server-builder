import React from 'react';
import classes from './NavigationLinks.css';
const navigationLinks = (props) => {
    return(
        <div className={classes.NavigationLinks}>
            <ul>
                <li>
                    <a href="#">Request Build</a>
                </li>
                <li>
                    <a href="#">Check Status</a>
                </li>
            </ul>
        </div>
    )
}

export default navigationLinks;