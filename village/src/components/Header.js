import React, {Fragment} from 'react';
import {NavLink, Link} from 'react-router-dom';


const Header = () => {

    return (
        <Fragment>

            <header>
                <h1><Link to='/'>Smurf Village</Link></h1>
            </header>
        
            <nav className='header-links'>
                <NavLink to='./add-smurf' className=''>Add Smurf</NavLink>
                <NavLink to='./smurfs' className=''>See All Smurfs</NavLink>
            </nav>

      </Fragment>
    )
}

export default Header