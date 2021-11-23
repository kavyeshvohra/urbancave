import React from 'react'
import '../styles/login.css'
const login = () => {
    return (
        <>
            <div className = "loginContainer">
                <div className = "loginForm">
                    <h1>
                        Welcome Back
                    </h1>
                    <form method = "POST">
                        <input type = "text" id = "name" name = "username" placeholder = "Username"/><br/><br/>
                        <input type = "password" id = "pass" name = "password" placeholder = "Password"/><br/><br/>
                    </form>
                        <a href = "/">Forgot password?</a> Get help signing in.
                        <hr />
                        <button type = "submit" name = "submit">Login</button>
                        <br/>
                        <br/>
                        <a href = "/">Don't have an Account?</a> Register Here!
                </div>
                <div className = "showCase">
                    <div className = "showCaseContainer">
                    </div>
                </div>
            </div>
        </>
    )
}
export default login
