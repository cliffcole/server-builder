import React from 'react';
import classes from './Navigation.css';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import Brand from './../../Brand/Brand';
const navigation = (props) => {
    const myNavBar = [
        classes.navbar, 'navbar-expand-lg', 'navbar-dark', 'bg-dark'
    ]
    const collapseItem = [
        classes.bottomalign, 'collapse', 'navbar-collapse'
    ]
    return (
        <nav className={classes.Navigation}>
            
            {/* <NavigationLinks /> */}
            <nav className={myNavBar.join(' ')}>
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <Brand />
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                    
              <div className={collapseItem.join(' ')} id="navbarSupportedContent">
                <NavigationLinks />
              </div>
            </nav>
        </nav>
    )
}

export default navigation;