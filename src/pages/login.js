import React from 'react'
import '../styles/login.css'
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { AiFillLock, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
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
    const changePass = () =>
    {
        let hiddenText = document.getElementById("pass");
        let iconClass = document.getElementsByClassName("icons-eye-off")[0];
        if(hiddenText.type === "password")
        {
            hiddenText.type = "text";
            iconClass.style.display = "none";
            document.getElementsByClassName("icons-eye-on")[0].style.display = "unset";
        }
        else
        {
            hiddenText.type = "password";
            iconClass.style.display = "unset";
            document.getElementsByClassName("icons-eye-on")[0].style.display = "none";
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
                            <input className = "details-form" type = "text" id = "name" name = "username" onChange={inputChange} tabIndex = "1" />
                            <span className = "focus-text" data-placeholder = "Email"></span>
                        </div>
                        <div className = "formGroup">
                            <input className = "details-form" type = "password" id = "pass" name = "password" onChange={inputChange} tabIndex = "2"/>
                            <span className = "focus-text" data-placeholder = "Password"></span>
                            <AiFillLock className = "icons" />
                            <AiFillEyeInvisible className = "icons-eye-off" onFocus = {changePass} tabIndex = "3"/>
                            <AiFillEye className = "icons-eye-on" onFocus = {changePass}/>
                        </div>
                        <div className = "formGroupButton">
                            <button type = "submit" name = "submit" tabIndex = "4">Login</button>
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
