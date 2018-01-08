import React from 'react';
import classes from './Header.css';
import Navigation from './Navigation/Navigation';
import Brand from './../Brand/Brand';
const header = (props) => {

    return (
        <header className={classes.container}>
            {/* <Brand />
            <Navigation />  */}
            <Navigation />
            

        </header>
    )
}

export default header;