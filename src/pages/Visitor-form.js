import React from 'react'
import { LoginForm } from '../styles/login-style'
import Select from 'react-select'
import { Detailsform1,TextSpan ,Form, Heading1, Heading4, RegisterCont, FormGroup, FocusHtml, ButtonWrapper, ButtonSubmit, SelectGroup } from '../styles/register-styles'
import { useParams } from "react-router";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function inputChange(e) {
  if (e.target.value !== "") {
      e.target.classList.add('text');
  }
  else {
      e.target.classList.remove('text');
  }
}
const FormStyle={
  width: "100%",
}
// const exitTime =[
//   {value:"1", label: "1 Hour"},
//   {value:"2", label: "2 Hour"},
//   {value:"3", label: "3 Hour"},
//   {value:"4", label: "4 Hour"},
//   {value:"5", label: "5 Hour"},
//   {value:"6", label: "6 Hour"},
//   {value:"7", label: "7 Hour"},
//   {value:"8", label: "8 Hour"},
//   {value:"9", label: "9 Hour"},
//   {value:"10", label: "10 Hour"},
//   {value:"11", label: "11 Hour"},
//   {value:"12", label: "12 Hour"},
//   {value:"13", label: "13 Hour"},
//   {value:"14", label: "14 Hour"},
//   {value:"15", label: "15 Hour"},
//   {value:"16", label: "16 Hour"},
//   {value:"17", label: "17 Hour"},
//   {value:"18", label: "18 Hour"},
//   {value:"19", label: "19 Hour"},
//   {value:"20", label: "20 Hour"},
//   {value:"21", label: "21 Hour"},
//   {value:"22", label: "22 Hour"},
//   {value:"23", label: "23 Hour"},
//   {value:"24+", label: "> 24 Hour"},
// ]
const ButtonStyle={
  width: "50%",
}
const VisitorForm = (props) => {

  const param = useParams();
  const navigate = useNavigate();
  
  const [userCookies,setUserCookies] = useCookies();
  
  console.log(param.id);
  console.log(userCookies);


  useEffect(()=>{
    // if(param.id != props.visitorLink){
    //   navigate("*");
    // }
  })

  return (
    <RegisterCont>
            <LoginForm style={{height: "max-content"}}>
                <Heading1 style={{marginBottom: '0em'}}> Hello, Visitor!</Heading1>
                <Heading4>Please fill out your details!</Heading4>
                <Form>
                     <FormGroup className='inputGroup' style={FormStyle}>
                        <Detailsform1 type="text" id="hname" name="visitor_fname" onChange={inputChange}/>
                        <FocusHtml data-placeholder='First Name'/>
                     </FormGroup>
                     <FormGroup className='inputGroup' style={FormStyle}>
                        <Detailsform1 type="text" id="hname" name="visitor_lname" onChange={inputChange}/>
                        <FocusHtml data-placeholder='Last Name'/>
                     </FormGroup>
                     <FormGroup className='inputGroup' style={FormStyle}>
                        <Detailsform1 type="text" id="hname" name="visitor_phone" onChange={inputChange}/>
                        <FocusHtml data-placeholder='Phone Number (+91)'/>
                     </FormGroup>
                     {/* <SelectGroup style={FormStyle}>
                       <TextSpan>Exit Time</TextSpan>
                       <Select options={exitTime}/>
                     </SelectGroup> */}
                    <ButtonWrapper>
                      <ButtonSubmit style={ButtonStyle}>Submit</ButtonSubmit>
                    </ButtonWrapper>
                </Form>
            </LoginForm>
    </RegisterCont>
  )
}

export default VisitorForm