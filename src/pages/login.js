import React from 'react'
import '../styles/login.css'
import { FaUserCircle } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
const login = () => {
    function inputChange (e) {
        if(e.target.value !== "")
        {
            e.target.classList.add('text');
        }
        else
        {
            e.target.classList.remove('text');
        }
    }
    return (
        <>
            <div className = "loginContainer">
                <div className = "loginForm">
                    <h1>
                        Sign In
                    </h1>
                    <form>
                        <div className = "formGroup">
                            <FaUserCircle className = "icons"/>
                            <input className = "details-form" type = "text" id = "name" name = "username" onChange={inputChange}/>
                            <span className = "focus-text" data-placeholder = "Email"></span>
                        </div>
                        <div className = "formGroup">
                            <AiFillLock className = "icons" />
                            <input className = "details-form" type = "password" id = "pass" name = "password" onChange={inputChange}/>
                            <span className = "focus-text" data-placeholder = "Password"></span>
                        </div>
                        <div className = "formGroupButton">
                            <button type = "submit" name = "submit">Login</button>
                        </div>
                        <div className = "formGroupTwo">
                            <a href = "/">Forgot password?</a>
                            <a href = "/">Sign Up!</a>
                        </div>                    
                    </form>
                </div>
            </div>
        </>
    )
}
export default login
