import React from 'react';
import classes from './Header.css';
import Navigation from './Navigation/Navigation';
import Brand from './../Brand/Brand';
const header = (props) => {

    return (
        <header className={classes.Header}>
            <Brand />
            <Navigation />
        </header>
    )
}

export default header;