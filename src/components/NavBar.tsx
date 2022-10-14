import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar:React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-3">
                <NavLink to="#" className="center navic brand-logo">Todo List
                    <i className="material-icons">access_alarms</i>
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;