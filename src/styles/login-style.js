import styled from 'styled-components';
import Background from '../Images/login-background.png'

export const LoginForm = styled.div`
  border: 1px solid #fff;
  padding: 4rem 5.6rem;
  background-color: #fff;
  border-radius: 15px;
  width: 34em;
  height: 35em;
  display: flex;
  margin-left: 4.98em;
  flex-direction: column;
  box-shadow: -1px 1px 11px #00000014;
`
export const Form = styled.form`
  display: block;
  position: relative;
  &::after
  {
    display: block;
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: 1;
  }
`
export const FormGroup = styled.div`
  margin-bottom: 2.5em;
  border-bottom: 2px solid #000;
  width: 100%;
  display:flex;
  align-items: center;
  position: relative;
  transition: 0.3s all ease;
  padding-bottom: 0.125em;
  &.login-eye
  {
    position: absolute;
    top: 50%;
    left: 90%;
    cursor: pointer;
    pointer-events: all;
    font-size: 1.35rem;
    transform: translateY(-50%);    
  }
`
export const FocusText = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 30px;
  pointer-events: none;
  transition: 0.3s all ease;
  
  &::before
  {
    display: inline-block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;

    color: red;
  }

  &::after
  {
    font-size: 15px;
    color: #999999;
    line-height: 1.2;

    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0px;
    padding-left: 5px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    }
`

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 130% 1.2em;
  background-size: 70rem;
  background-color: #faf0f0;
  background-image: url(${Background});
/* 
  @media (max-width: 2000px) {

      background-image: none;
  } */
`
// export const Icons = styled.svg`
//   position: absolute;
//   top: 50%;
//   left: 0;
//   font-size: 1.35rem;
//   transform: translateY(-50%);
// `
// export const IconsOff = styled.svg`
//   position: absolute;
//   top: 50%;
//   left: 90%;
//   cursor: pointer;
//   pointer-events: all;
//   font-size: 1.35rem;
//   transform: translateY(-50%);
// `
// export const IconsOn = styled.svg`
//   display: none;
//   position: absolute;
//   top: 50%;
//   left: 90%;
//   cursor: pointer;
//   font-size: 1.35rem;
//   transform: translateY(-50%);
// `
export const DetailsForm = styled.input`
  display: block;
  width: 92%;
  height: 45px;
  background: transparent;
  padding: 0 5px;
  transition: 0.3s all ease;
  margin: 0 10px auto;
  font-size: 1rem;
  border:none;
  outline:none;

  &:focus + ${FocusText},
  &.text + ${FocusText}
  {
    transform: translate(-1.65em, -2.2rem) scale(1);
  }

`
export const Heading1 = styled.h1`
  padding-bottom: 10%;
  color: #3e444e;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.2rem;
`
export const FormGroupButton = styled.div`
  text-align: center;
  pointer-events: all;
`

export const FormGroupTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.875em;

  &,a
  {
    text-decoration: none;
    color: #0c2938;
  }
  &>a:hover
  {
    color: #a7a7a7;
  }
`

export const Button = styled.button`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 10px 0 10px 0;
  align-self: center;
  display: inline-block;
  cursor: pointer;
  border-radius: 15px;
  background-color: #3e444e;
  color: #faf0f0;
  outline: none;
  border: none;
  text-decoration: none;
  font-weight: bold;
  font-family: montserrat, sans-serif;
  box-shadow: -1px 1px 11px #00000014;
  transition: 0.3s all ease-in-out;
    
  &:hover, &:focus
  {
    /* background-color: #9FB1BCFF; */
    color: #595757;
    font-weight: bold;
    background-image: linear-gradient(240deg, #fcd2d2, #dddddd);
  }
`