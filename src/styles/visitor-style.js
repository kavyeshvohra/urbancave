import styled from "styled-components";
import cancel from '../Images/cancel.svg'
export const Container = styled.div`
   display: flex;
   flex-direction: row;
   column-gap: 6em;
   margin-top: 2em;
   flex-wrap: wrap;
   justify-content: center;
   row-gap: 2em;
   & > div
   {
       flex: 2;
   }
   .actionStyle
    {
        //font-size:1.5em;
        font-size: 1.2em;
    }
    .buttonStyle
    {
        margin-right: 0.2em;
        outline: none;
        text-decoration: none;
        border: 1px solid #fab6b6;
        border-radius: 2px;
        transition: 0.1s ease-in-out;
        &:hover
        {
            background-color: #fab0b0;
        }
        padding: 5px 10px;
    }
`
export const Item = styled.div`
   border: 2px dashed #fab6b6;
   display: flex;
   flex-direction: column;
   padding: 15px;
   max-width: 50%;
   align-items: center;
   row-gap: 1em;

`
export const Heading6 = styled.h6`
    margin-top: 0.5em;
`