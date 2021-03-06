import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/login.css'
export const Login = () => {
    return (
        <div className="login_container ">
            <div className="login_section animate__animated animate__fadeIn">
                <span className="login_title">Login</span>
                <form className="login_form">
                    <input
                        className="login_input"
                        type="text"
                        placeholder="Email"
                    />
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
                    <Link to="/register">
                        Create a new account
                    </Link>
                </h2>
            </div>
        </div>
    )
}
