import React from 'react';
import classes from './Brand.css';
import Logo from './../../assets/your-logo.svg';

const brand = (props) => {
    return(
        
        <div className={classes.container}>
            <a href="/">
                <img className={classes.navbar-brand} src={Logo} alt="The Logo"/>
            </a>
        </div>
        
    )
}

export default brand;