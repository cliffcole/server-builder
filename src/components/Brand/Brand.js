import React from 'react';
import classes from './Brand.css';
import Logo from './../../assets/the-logo.svg';

const brand = (props) => {
    return(
        
        <div className={classes.Brand}>
            <a href="/">
                <img className={classes.BrandImg} src={Logo} alt="The Logo"/>
            </a>
        </div>
        
    )
}

export default brand;