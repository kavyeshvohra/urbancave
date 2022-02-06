import React, { useState } from 'react'
import * as LStyle from '../styles/login-style'
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillLock, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const iconStyle = {
        width: "1.5em",
        height: "1.5em",
    };

    function inputChange(e) {
        if (e.target.value !== "") {
            e.target.classList.add('text');
        }
        else {
            e.target.classList.remove('text');
        }
    }

    const changePass = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    return (
        <>
            <LStyle.LoginContainer>
                <LStyle.LoginForm>
                    <LStyle.Heading1>
                        Sign In
                    </LStyle.Heading1>
                    <LStyle.Form>
                        <LStyle.FormGroup>
                            <FaUserCircle className='login-field-icons' style={iconStyle} />
                            <LStyle.DetailsForm type="text" id="name" name="username" onChange={inputChange} tabIndex="1" />
                            <LStyle.FocusText data-placeholder="Email" />
                        </LStyle.FormGroup>
                        <LStyle.FormGroup>
                            <AiFillLock className="login-field-icons" style={iconStyle} />
                            <LStyle.DetailsForm type={isPasswordVisible ? "text" : "password"} id="pass" name="password" onChange={inputChange} tabIndex="2" />
                            <LStyle.FocusText data-placeholder="Password" />
                            {isPasswordVisible ? (<AiFillEye onClick={changePass} className='login-eye' style={iconStyle}/>) : <AiFillEyeInvisible onClick={changePass} className='login-eye' style={iconStyle}/>}
                            {/* <AiFillEyeInvisible tabIndex="3" />
                            <AiFillEye className="login-field-eye-on" onFocus={changePass} onClick={changePass} /> */}
                        </LStyle.FormGroup>
                        <LStyle.FormGroupButton>
                            <LStyle.Button type="submit" name="submit" tabIndex="4">Login</LStyle.Button>
                        </LStyle.FormGroupButton>
                        <LStyle.FormGroupTwo>
                            <Link to="/">Forgot password?</Link>
                            <Link to="/register">Sign Up!</Link>
                        </LStyle.FormGroupTwo>
                    </LStyle.Form>
                </LStyle.LoginForm>
            </LStyle.LoginContainer>
        </>
    )
}
export default Login