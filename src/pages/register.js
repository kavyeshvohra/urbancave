import React, { useState } from 'react'
import Select from 'react-select'
import Axios from 'axios'

import {VscError,VscCheck} from "react-icons/vsc";
import {AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { Heading4, Heading1, RegisterCont, RegisterForm, FormGroup, InputWrapper, Detailsform, ButtonWrapper, FocusHtml, Detailsformdate, SelectGroup, TextSpan, Checkbox, CheckGroup, ButtonSubmit, RadioLabel, ErrorMessage, ErrorMessage1} from '../styles/register-styles';

const Register = () => {
    // const url = ""
    // const[data,setData] = useState({
    //     fname: "",
    //     lname: "",
    //     dob: ""
    // })
    //const [step, changeStep] = useState("step1");
    const errorIcon = {
        display: 'inline-block',
        fill: 'red'
    }
    const validIcon = {
        display: 'none',
        fill: 'green'
    }
    const eyeOn = {
        display: 'unset',
        position: 'absolute',
        top: '50%',
        left: '90%',
        cursor: 'pointer',
        fontSize: '1.35rem',
        transform: 'translateY(-50%)'
    }
    const options = [
        { value: 'Society-Admin', label: 'Society Admin' },
        { value: 'Society-Member', label: 'Society Member' },
    ]
    const houseoptions = [
        { value: '1BHK', label: '1BHK' },
        { value: '2BHK', label: '2BHK' },
        { value: '3BHK', label: '3BHK' },
        { value: '4BHK', label: '4BHK' },
        { value: 'Other', label: 'More than 4BHK' },
    ]
    // useEffect(() => {
    //     if (step == "step1") {
    //         console.log("step1");
    //     }
    //     else if (step == "step2") {
    //         console.log("step2");
    //     }
    // });

    const [passInputType,passInput] = useState("password");
    const [confirmpassInputType, changeconfInputType] = useState("password");
    // const [eyeIcon,changeEye] = useState("icons-eye-off");
    // const handleChangeInput=()=>{
    //     console.log("HI");
    //     if(inputType==="password"){
    //         changeInputType("text");
    //         //changeEye("icons-eye-on");
    //     }
    //     else{
    //         changeInputType("password");
    //         //changeEye("icons-eye-off");
    //     }
    // }
    return (

            <>
                <RegisterCont>
                    <RegisterForm>
                        <Heading1>
                            Hello, Member!
                        </Heading1>
                        <Heading4>Enter your details and start using our amazing services!</Heading4>
                        <form>
                            <InputWrapper>
                                <FormGroup>
                                    <Detailsform type="text" id="fname" required name="fname" onChange={inputChange} requried />
                                    <FocusHtml data-placeholder="First Name" />
                                </FormGroup>
                                <FormGroup>
                                        <Detailsform type="text" id="lname" name="lname" onChange={inputChange} required />
                                        <FocusHtml data-placeholder="Last Name" />
                                </FormGroup>
                                <FormGroup>
                                        <Detailsformdate type="date" id="datepicker" name="dateofbirth" onChange={inputChange} required />
                                        <FocusHtml data-placeholder="Date Of Birth" />
                                </FormGroup>
                                <FormGroup>
                                        <Detailsform type="email" name="email" onChange={inputChange} required />
                                        <FocusHtml data-placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                        <Detailsform type="text" name="phonenum" maxLength="10" onChange={inputChange} required />
                                        <FocusHtml data-placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup>
                                        <Detailsform type="text" name="altphonenum" maxLength="10" onChange={inputChange} />
                                        <FocusHtml data-placeholder="Alternate Phone Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Detailsform type={passInputType} id="pwd" name="password" minLength = "8" required onChange={validation}/>
                                    <FocusHtml data-placeholder="Password" />
                                   {passInputType == 'password' ? (<AiFillEyeInvisible id = "pwd-off-eye" className ="icons-eye-off" onClick={()=>passInput('text')} />):(<AiFillEye id="" style={eyeOn}  onClick={()=>passInput('password')}/>   )} 
                                                                
                                </FormGroup>
                                <FormGroup>
                                    <Detailsform id="confpwd" type={confirmpassInputType} name="conf-password" minLength= "8" required onChange={confirmPassChange}/>
                                    <FocusHtml data-placeholder='Confirm Password'/>
                                    {confirmpassInputType == 'password' ? (<AiFillEyeInvisible id = "pwd-off-eye" className ="icons-eye-off" onClick={()=>changeconfInputType('text')} />):(<AiFillEye id="" style={eyeOn}  onClick={()=>changeconfInputType('password')}/>   )}
                                </FormGroup>
                                <CheckGroup>
                                        <Checkbox type="radio" id="ansMale" name="genderState" value="Male" required/>
                                        <RadioLabel htmlFor="ansMale">Male</RadioLabel>
                                        <Checkbox type="radio" id="ansFemale" name="genderState" value="female" />
                                        <RadioLabel htmlFor="ansFemale">Female</RadioLabel>
                                        <Checkbox type="radio" id="ansOther" name="genderState" value="other" />
                                        <RadioLabel htmlFor="ansOther">Other</RadioLabel>
                                        <TextSpan>Gender</TextSpan>
                                </CheckGroup>
                                <ErrorMessage id="message">
                                        <h4 style={{marginBottom: "5px"}}>Passwords must contain:</h4>
                                        <p id="letter" className="invalid"><VscError className='errorIcon' style={errorIcon}/><VscCheck className='validIcon' style={validIcon}/> A <b>lowercase</b> letter</p>
                                        <p id="capital" className="invalid"><VscError className='errorIcon' style={errorIcon}/><VscCheck className='validIcon' style={validIcon}/> A <b>capital (uppercase)</b> letter</p>
                                        <p id="number" className="invalid"><VscError className='errorIcon' style={errorIcon}/><VscCheck className='validIcon' style={validIcon}/> A <b>number</b></p>
                                        <p id="special" className="invalid"><VscError className='errorIcon' style={errorIcon}/><VscCheck className='validIcon' style={validIcon}/> A <b>special character</b></p>
                                        <p id="length" className="invalid"><VscError className='errorIcon' style={errorIcon}/><VscCheck className='validIcon' style={validIcon}/> Minimum <b>8 characters</b></p> 
                                </ErrorMessage>
                                <FormGroup>
                                        <Detailsform type="text" name="housename" onChange={inputChange} />
                                        <FocusHtml data-placeholder="House Name" />
                                </FormGroup>
                                <ErrorMessage1 id="messageCheck">
                                        <p id="passCheck" className="invalid"><VscError className='errorIcon' style={errorIcon}/><VscCheck className='validIcon' style={validIcon}/> Password's Match</p>
                                </ErrorMessage1>
                                <SelectGroup>
                                        <Select options={houseoptions}/>
                                        <TextSpan>House Type</TextSpan>
                                </SelectGroup>
                                <SelectGroup>
                                        <Select options={options} />
                                        <TextSpan>User Type</TextSpan>
                                </SelectGroup>
                                <CheckGroup>
                                        <Checkbox type="radio" id="ansYes" name="rentState" value="yes" />
                                        <RadioLabel htmlFor="ansYes">Yes</RadioLabel>
                                        <Checkbox type="radio" id="ansNo" name="rentState" value="no" />
                                        <RadioLabel htmlFor="ansYes">No</RadioLabel>
                                        <TextSpan>Rented Appartment?</TextSpan>
                                </CheckGroup>
                                <SelectGroup>
                                        <Detailsform type="file" name="file" />
                                        <TextSpan>Upload Profile Image</TextSpan>
                                </SelectGroup>
                                </InputWrapper>
                                <ButtonWrapper>
                                    <ButtonSubmit name="submit">Register</ButtonSubmit>
                                </ButtonWrapper>
                            </form>
                        </RegisterForm>
                    </RegisterCont>
                </>
            );

        // else if (step == "step1") {
        //     return (
        //         <>
        //             <div className="loginContainer">
        //                 <div className="loginForm">
        //                     <h1>
        //                         Sign In
        //                     </h1>
        //                     <div className="formGroup">
        //                         <FaUserCircle className="icons" />
        //                         <input className="details-form" type="text" id="name" name="username" onChange={inputChange} tabIndex="1" />
        //                         <span className="focus-text" data-placeholder="Email"></span>
        //                     </div>
        //                     <div className="formGroup">
        //                         <input className="details-form" type="password" id="pass" name="password" onChange={inputChange} tabIndex="2" />
        //                         <span className="focus-text" data-placeholder="Password"></span>
        //                         <AiFillLock className="icons" />
        //                         <AiFillEyeInvisible className="icons-eye-off" onClick={changePass} onFocus={changePass} tabIndex="3" />
        //                         <AiFillEye className="icons-eye-on" onFocus={changePass} onClick={changePass} />
        //                     </div>
        //                     <div className="formGroupButton">
        //                         <button name="submit" tabIndex="4">Login</button>
        //                     </div>
        //                     <div className="formGroupTwo">
        //                         <a href="/">Forgot password?</a>
        //                         <a href="/register">Sign Up!</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </>
        //     );
        // }
        // else
        // {
        //     let hiddenText = document.getElementById('confpwd');
        //     let iconClass = document.getElementsByClassName("icons-eye-off")[0];
        //     if (hiddenText.type == "password") {
        //         hiddenText.type = "text";
        //         iconClass.style.display = "none";
        //         document.getElementsByClassName("icons-eye-on")[0].style.display = "unset";
        //     }
        //     else {
        //         hiddenText.type = "password";
        //         iconClass.style.display = "unset";
        //         document.getElementsByClassName("icons-eye-on")[0].style.display = "none";
        //     }
        // }

    function inputChange(e) {
        if (e.target.value !== "") {
            e.target.classList.add('text');
        }
        else {
            e.target.classList.remove('text');
        }
    }
    function confirmPassChange(e){
        inputChange(e);
        let input = document.getElementById('pwd');
        let reInput = document.getElementById('confpwd');
        const check = document.getElementById('passCheck');
        reInput.onkeydown = function(){
            document.getElementById('messageCheck').style.display= "block";
        }
        reInput.onblur = function(){
            document.getElementById('messageCheck').style.display = "none";
        }
        reInput.onkeyup = function(){
            if(reInput.value.match(input.value))
            {
                check.children[1].style.display = "inline-block";
                check.children[0].style.display = "none";
            }
            else
            {
                check.children[0].style.display = "inline-block";
                check.children[1].style.display = "none";
            }
        }
    }
    function validation(e){
        inputChange(e);
        let input = document.getElementById('pwd');
        const letter = document.getElementById('letter');
        const capital = document.getElementById('capital');
        const length = document.getElementById('length');
        const number = document.getElementById('number');
        const special = document.getElementById('special')
        
        input.onkeydown = function(){
            document.getElementById('message').style.display= "block";
        }
        input.onblur = function(){
            document.getElementById('message').style.display = "none";
        }
        input.onkeyup = function(){
            let lowerCase = /[a-z]/g;
            if(input.value.match(lowerCase)){
                letter.children[1].style.display = "inline-block";
                letter.children[0].style.display ="none";
            }
            else
            {
                letter.children[0].style.display = "inline-block";
                letter.children[1].style.display="none";
            }

            let upperCase = /[A-Z]/g;
            if(input.value.match(upperCase)){
                capital.children[1].style.display = "inline-block";
                capital.children[0].style.display = "none";
            }
            else
            {
                capital.children[0].style.display = "inline-block";
                capital.children[1].style.display = "none";
            }

            let numbers = /[0-9]/g;
            if(input.value.match(numbers)){
                number.children[1].style.display = "inline-block";
                number.children[0].style.display = "none";
            }
            else{
                number.children[0].style.display = "inline-block";
                number.children[1].style.display = "none";
            }

            let spchars = /[!-)]/g;
            if(input.value.match(spchars)){
                special.children[1].style.display = "inline-block";
                special.children[0].style.display = "none";
            }
            else{
                special.children[0].style.display = "inline-block";
                special.children[1].style.display = "none";
            }
            if(input.value.length >= 8)
            {
                length.children[1].style.display = "inline-block";
                length.children[0].style.display = "none";
            } 
            else
            {
                length.children[0].style.display = "inline-block";
                length.children[1].style.display = "none";
            }
        }
         
    }

    // const onClickHandler = () => {
    //     const data = new FormData()
    //     data.append('file', this.state.selectFile)
    // }

}

export default Register;