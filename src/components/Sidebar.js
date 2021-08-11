import React from 'react'
import '../assets/styles/sidebar.css'

export const Sidebar = () => {
    return (
        <div className="sidebar_container">
            <div className="sidebar_item">
                <span className="sidebar_item-title">
                    About me
                </span>
                <img
                    className="sidebar_item-img"
                    src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                    alt="Sidebar img"
                />
            </div>

            <div className="sidebar_item">
                <span className="sidebar_item-title">
                    Categories
                </span>
                <ul className="sidebar_list">
                    <li className="sidebar_listItem">
                        Life
                    </li>
                    <li className="sidebar_listItem">
                        Music
                    </li>
                    <li className="sidebar_listItem">
                        Sports
                    </li>
                    <li className="sidebar_listItem">
                        Tech
                    </li>
                </ul>
            </div>

            <div className="sidebar_item">
                <span className="sidebar_item-title">
                    Follow us
                </span>
                <div className="sidebar_social">
                    <i className="sidebar_icons fab fa-facebook-square"></i>
                    <i className="sidebar_icons fab fa-twitter-square"></i>
                    <i className="sidebar_icons fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
