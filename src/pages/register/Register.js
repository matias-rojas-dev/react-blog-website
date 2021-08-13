import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/login.css'
export const Register = () => {
    return (
        <div className="login_container ">
            <div className="login_section animate__animated animate__fadeIn">
                <span className="login_title">Register</span>
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
                    <input
                        className="login_input"
                        type="password"
                        placeholder="Repeat Password"
                    />
                    <button
                        className="login_button"
                    >
                        Create account
                    </button>
                </form>
                <h2
                    className="login_button-register"
                >
                    Already have an account ?
                    <Link to="/login">
                        Login
                    </Link>
                </h2>
            </div>
        </div>
    )
}
