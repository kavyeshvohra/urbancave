import styled from 'styled-components';

export const Heading4 = styled.h4`
text-align: center;
margin-bottom: 2.2em;
`;
export const Heading1 = styled.h1`
  padding-bottom: 10%;
  color: #0c2938;
  font-size: 50px;
  text-align: center;
  margin-bottom: -2.4rem;
`;
export const RegisterCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
export const RadioLabel = styled.label`
  display: flex !important;
  align-content: space-around;
  flex-wrap: wrap;
`
export const RegisterForm = styled.div`
  border: 1px solid #fff;
  padding: 2rem 4.6rem;
  background-color: #fff;
  border-radius: 15px;
  width: 65em;
  height: 40em;
  display: flex;
  flex-direction: column;
  box-shadow: -1px 1px 11px #00000014;
  overflow: auto;
`;
export const SelectGroup = styled.div`
  width: 30%;
  position: relative;
  transition: 0.3s all ease;
  padding-bottom: 0.125em;
  margin-bottom: 1.5em;
  margin-top: 1.2em;
`;
export const CheckGroup = styled.div`
  width: 30%;
  position: relative;
  transition: 0.3s all ease;
  padding-bottom: 0.125em;
  margin-bottom: 2.5em;
  margin-top: 1.2em;
  display: flex;
`;
export const ButtonWrapper = styled.div`
  margin-top: -1.5%;
  margin-bottom: -15px;
  text-align: center;
`;
export const ButtonSubmit = styled.button`
  width: 30%;
  margin: 0 auto;
  margin-top: 15px;
  padding: 15px 0 15px 0;
  align-self: center;
  display: inline-block;
  cursor: pointer;
  border-radius: 15px;
  background-color: #0c2938;
  color: #fff;
  font-weight: bold;
  font-family: montserrat, sans-serif;
  box-shadow: -1px 1px 11px #00000014;
  transition: 0.3s all ease-in-out;

&:hover,
&:focus {
  background-color: #fff;
  color: #000;
  font-weight: bold;
  background-image: linear-gradient(14deg, #d7d7d7, #dddddd);
}
`;
export const FormGroup = styled.div`
  margin-bottom: 2.5em;
  border-bottom: 2px solid #000;
  width: 30%;
  position: relative;
  transition: 0.3s all ease;
  padding-bottom: 0.125em;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Detailsform = styled.input`
  padding: 8px;
  display: flex;
  height: 45px;
  width: 100%;
  margin: unset;
  outline: none;
  border: none;
  &:focus + span,
  &.text + span {
  transform: translate(0em,-2.4rem) scale(1);
}
`;
export const Detailsformdate = styled.input`
  padding: 8px;
  display: flex;
  margin: unset;
  height: 45px;
  width: 100%;
  cursor: pointer;
  outline: none;
  border: none;
  &:in-range::-webkit-datetime-edit-year-field, 
  &:in-range::-webkit-datetime-edit-month-field, 
  &:in-range::-webkit-datetime-edit-day-field, 
  &:in-range::-webkit-datetime-edit-text { 	visibility: hidden; }
  &:focus + span,
  &.text + span {
  transform: translate(0em,-2.4rem) scale(1);
}
`;
export const Checkbox = styled.input`
  width: 15%;
  margin: 8px 0 8px 0;
  cursor: pointer;
  pointer-events:all;
  padding:0;
  align-items:left;
`;
export const TextSpan = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: -1.7em;
  color: #999999;
`;
export const FocusHtml = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  pointer-events: none;
  transition: 0.3s all ease;
  &::after{
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
`;