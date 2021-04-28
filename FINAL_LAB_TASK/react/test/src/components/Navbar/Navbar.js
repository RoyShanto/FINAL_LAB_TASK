import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/add_event">Add Diary</Link></li>
                <li><Link to="/event_list">Diaries</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
