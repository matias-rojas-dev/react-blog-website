import React from 'react'
import '../../assets/styles/login.css'
export const Login = () => {
    return (
        <div className="login_container">
            <span className="login_title">Login</span>
            <form className="login_form">
                <label>Email</label>
                <input
                    className="login_input"
                    type="text"
                    placeholder="Email"
                />
                <label>Password</label>
                <input
                    className="login_input"
                    type="password"
                    placeholder="Password"
                />
                <button
                    className="login_button"
                >
                    Login
                </button>
            </form>
            <h2
                className="login_button-register"
            >
                Register
            </h2>
        </div>
    )
}
