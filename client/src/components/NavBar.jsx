import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return(
        <div className="NavBar">
            <Link to="/">Hacker News</Link>
            <Link to="/submit">submit</Link>
        </div>
    );
}

export default NavBar;