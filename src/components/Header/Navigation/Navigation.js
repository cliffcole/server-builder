import React from 'react';
import classes from './Navigation.css';
import NavigationLinks from './NavigationLinks/NavigationLinks';

const navigation = (props) => {
    return (
        <nav className={classes.Navigation}>
            
            <NavigationLinks />
        </nav>
    )
}

export default navigation;