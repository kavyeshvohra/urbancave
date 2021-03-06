import React, { useState } from 'react'
import * as LStyle from '../styles/login-style'
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillLock, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Images from '../images';
import image from '../Images/woman2.jpg';
import { Cookies } from 'react-cookie';


const Login = (props) => {

    
    useEffect(()=>{
        if (props.userCookies != null){
            navigate("dashboard");
        }
    },[props.userCookies]);

    // useEffect( async ()=>{
    //     console.log(0);
    //     const fname = "sidhraj";
    //     const lname = "mori";
    //     const dob = "2001-09-01";
    //     const email = "sid@gmail.com";
    //     const phone = 9876543210;
    //     const phoneA = 9876543210;
    //     const pass = "sid@12345";
    //     const confPass = "sid@12345";
    //     const houseName = "B7";

    //     //const houseType=document.getElementById("houseType");
    //     //const userType=document.getElementById("userType");
        
    //     // const file = Images.camera;
    //     const file = image;

    //     const data={
    //         fname,
    //         lname,
    //         dob,
    //         email,
    //         phone,
    //         phoneA,
    //         pass,
    //         confPass,
    //         houseName,
    //         file
    //     };

    //     const url="http://localhost:8080/register";
    //     const options={
    //         method:"POST",
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //         body:JSON.stringify(data)
    //     }
    //     const response = await fetch(url,options);
    //     const res = await response.json();
    //     console.log(res);

    // });

    const navigate = useNavigate();
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

    const validateCreds = async ()=>{
        
        document.getElementById("errorLogin").innerText="Invalid Email";
        document.getElementById("errorPassword").innerText="Invalid Password";
        document.getElementById("errorLogin").style.display = "none";
        document.getElementById("errorPassword").style.display = "none";
        const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        
        const passwordReg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        const email=document.getElementById("email").value ;
        const password = document.getElementById("password").value;
        let count=0;

        if(!emailReg.test(email)){
            console.log("email not valid.");
            document.getElementById("errorLogin").style.display = "block";
            count+=1;
        }
        if(!passwordReg.test(password)){
            console.log("password not valid.")
            document.getElementById("errorPassword").style.display = "block";
            count+=1;
        }
        if(count==0){
            const data={"email":email,"password":password};
            const url="http://192.168.1.67:8080/login";
            const options={
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(data)
            }
            const response = await fetch(url,options);
            const res = await response.json();
            /*
                const res = await response.json();
                if(res.error){
                    //error didplay;
                }
                else{
                    
                }
             */
            if(res.jwtToken){

                props.changeCookies('user',res.jwtToken);
                props.changeCookies('userName',res.userName);
                props.changeCookies('userType',res.userType);
                props.changeCookies('society',res.society);
                // props.changeUserType(res.userType);
                navigate("/dashboard");
            }
            // if(res=="User is authenticated"){
            //     props.changeCookies('user',)
            //     navigate("/dashboard");
            // }
            // else if(res=="Password is incorrect"){
            //     document.getElementById("errorPassword").innerText="Password is incorrect";
            //     document.getElementById("errorPassword").style.display = "block";
            // }
            // else if(res=="User not found"){
            //     document.getElementById("errorLogin").innerText="User not found";
            //     document.getElementById("errorLogin").style.display = "block";
            // }
            // console.log(response);
            // console.log(response.headers);
            // console.log(res);
        }
    }

    useEffect(()=>{
        document.getElementById("submit").addEventListener("click",(e)=>{
            e.preventDefault();
            // document.getElementById("errorDiv").innerHTML="";
            validateCreds();
        });        
    });

    const errStyle={
        width:'100%',
        marginTop:"-1.5em",
        marginBottom: "1.5em",
        color:"red",
        alignText:"center",
        display: 'none',
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
                            <LStyle.DetailsForm type="text" id="email" name="username" defaultValue="sid@gmail.com" onChange={inputChange} tabIndex="1" />
                            {/* <LStyle.FocusText data-placeholder="Email" /> */}
                        </LStyle.FormGroup>
                        <div style={errStyle} id="errorLogin">Invalid Email</div>
                        <LStyle.FormGroup>
                            <AiFillLock className="login-field-icons" style={iconStyle} />
                            <LStyle.DetailsForm type={isPasswordVisible ? "text" : "password"} defaultValue="Aa@01234" id="password" name="password" onChange={inputChange} tabIndex="2" />
                            {/* <LStyle.FocusText data-placeholder="Password" /> */}
                            {isPasswordVisible ? (<AiFillEye onClick={changePass} className='login-eye' style={iconStyle}/>) : <AiFillEyeInvisible onClick={changePass} className='login-eye' style={iconStyle}/>}
                            {/* <AiFillEyeInvisible tabIndex="3" />
                            <AiFillEye className="login-field-eye-on" onFocus={changePass} onClick={changePass} /> */}
                            
                        </LStyle.FormGroup>
                        <div style={errStyle} id="errorPassword">Invalid Password</div>
                        <LStyle.FormGroupButton>
                            <LStyle.Button id="submit" name="submit" tabIndex="4" >Login</LStyle.Button>
                        </LStyle.FormGroupButton>
                        <LStyle.FormGroupTwo>
                            <Link to="/forgotpassword">Forgot password?</Link>
                            <Link to="/register">Sign Up!</Link>
                        </LStyle.FormGroupTwo>
                    </LStyle.Form>
                </LStyle.LoginForm>
            </LStyle.LoginContainer>
        </>
    )

}


export default Login