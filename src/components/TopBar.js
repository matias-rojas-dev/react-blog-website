import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/topbar.css'
import { MobileMenu } from '../helpers/MobileMenu';

export const TopBar = () => {
    const [user, setUser] = useState(true);

    const handleLogout = () => {
        setUser(false);
    };
    return (
        <div className="topbar_top">
            <div className="topbar_left">
                <i className="topbar_topIcon fab fa-facebook-square"></i>
                <i className="topbar_topIcon fab fa-twitter-square"></i>
                <i className="topbar_topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topbar_center">
                <ul className="topbar_topList">
                    <Link to="/" className="topbar_topList-item">HOME</Link>
                    <Link to="/about" className="topbar_topList-item">ABOUT</Link>
                    <Link to="/contact" className="topbar_topList-item">CONTACT</Link>
                    {
                        user ? (
                            <>
                                <Link to="/write" className="topbar_topList-item">WRITE</Link>
                                <Link to="/settings" className="topbar_topList-item">SETTINGS</Link>
                                <Link to="/" onClick={handleLogout} className="topbar_topList-item">LOGOUT</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="topbar_topList-item">LOGIN</Link>
                                <Link to="/register" className="topbar_topList-item">REGISTER</Link>
                            </>
                        )
                    }


                </ul>
            </div>
            <div className="topbar_right">
                {
                    user &&
                    <img
                        className="topbar_topRight-img"
                        src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
                        alt="Imagén de banner"
                    />

                }
                <i className="topbar_topRight-search fas fa-search"></i>
            </div>
            <MobileMenu user={user} />

        </div>
    )
}
