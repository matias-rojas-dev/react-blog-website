import React from 'react'
import '../../assets/styles/settings.css'
export const Settings = () => {
    return (
        <div className="settings_container">
            <div className="settings_wrapper">
                <div className="settings_title">
                    <span className="settings_UpdateTitle">Update your account</span>
                    <span className="settings_DeleteTitle">Delete account</span>
                </div>
                <form className="settings_form">
                    <label>Profile picture</label>
                    <div className="settings_personal-data">
                        <img
                            className="settings_img"
                            src="https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/11/estructura-de-post-new.png"
                            alt="Post img blog"
                        />
                        <label
                            htmlFor="fileInput"
                        >
                            <i className="settings_icons far fa-user-circle"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="email" />
                    <label>Password</label>
                    <input type="password" />
                    <button
                        type="submit"
                        className="settings_button"
                    >Update</button>
                </form>
            </div>
        </div>
    )
}
