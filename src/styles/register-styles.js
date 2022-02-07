import styled from 'styled-components';

export const Heading4 = styled.h4`
text-align: center;
margin-bottom: 1em;
padding-bottom: 2em;
`;
export const EmHeading4 = styled.h4`
  margin-bottom: 2.2.em;
`
export const Heading1 = styled.h1`
  padding-bottom: 10%;
  color: #0c2938;
  font-size: 50px;
  text-align: center;
  font-weight: 700;
  margin-bottom: -4.4rem;
`;
export const RegisterCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-top: -0.2em;
  background-color: #faf0f0;
`;
export const RadioLabel = styled.label`
  display: flex !important;
  align-content: space-around;
  flex-wrap: wrap;
`
export const RegisterForm = styled.div`
  border: 1px solid #fff;
  padding: 2rem 4.6rem 4rem 4.6rem;
  background-color: #fff;
  border-radius: 15px;
  width: 65em;
  height: 44em;
  display: flex;
  flex-direction: column;
  box-shadow: -1px 1px 11px #00000014;
  /* overflow-y: scroll; */
`;

export const Span = styled.span`
    color: #FAB0B0;
    font-weight: 500;
    text-decoration: underline;
    &:hover
    {
      color: #595757;
      text-decoration-color: #595757;
    }
`

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
export const ButtonWrapper1 = styled.div`
  margin-top: -4.5%;
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
  background-color: #3e444e;
  color: #faf0f0;
  outline:none;
  text-decoration: none;
  font-weight: bold;
  font-family: montserrat, sans-serif;
  box-shadow: -1px 1px 11px #00000014;
  transition: 0.3s all ease-in-out;
  border: none;

  &:hover, &:focus
  {
    /* background-color: #9FB1BCFF; */
    color: #595757;
    font-weight: bold;
    background-image: linear-gradient(240deg, #fcd2d2, #dddddd);
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 2.5em;
  border-bottom: 2px solid #000;
  width: 30%;
  position: relative;
  transition: 0.3s all ease;
  padding-bottom: 0.125em;
  display: flex;
  align-items: center;
`;
export const InputWrapper = styled.form`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    column-gap: 2.5em;
    flex-wrap: wrap;
    margin-top: -2em;
`;
export const FormGroup1 = styled.div`
  margin-top: 1em;
  border-bottom: 2px solid #000;
  width: 100%;
  position: relative;
  transition: 0.3s all ease;
  padding-bottom: 0.125em;
`;
export const InputWrapper1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RegisterCont1 = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #faf0f0;

`;

export const RegisterForm1 = styled.div`
    background-color: #fff;
    border: 1px solid #fff;
    padding: 2rem 4.6rem;
    border-radius: 15px;
    width: 50em;
    height: auto;
    display: flex;
    flex-direction: column;
    box-shadow: -1px 1px 11px #00000014;
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
export const TextSpan1 = styled.span`
  display:inline-block;
  margin-top: 1.2em;
  cursor: pointer;
  font-weight: 600;

  &:hover
  {
    color: #595757;
    text-decoration: underline;
    text-decoration-color: #595757;
  }
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
export const ErrorMessage = styled.div`
  margin-top: -2.5em;
  display: none;
  width: 30%;
  background: #eee;
  padding: 10px;
  border-radius: 2%;
  margin-bottom: 1.2em;
  position: absolute;
  z-index: 9999999999;
`
export const ErrorMessageCont = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
`
export const ErrorMessageCont1 = styled.div`
  position: relative; 
`
export const ErrorMessage1 = styled.div`
  display: none;
  width: 30%;
  background: #eee;
  padding: 10px;
  border-radius: 2%;
  height: 10%;
  position: absolute;
  top: -2.5em;
  padding-bottom: 2.2em;
  z-index: 999999999999;
  transform: translateX(115%);
`;
export const ExistAccount = styled.div`
  font-size: 16px;
  display:flex;
  align-items:center;
  margin-top: 2.5rem;
  justify-content: center;
`;