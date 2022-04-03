import styled from 'styled-components'

export const UploadButton = styled.input`
    display: none;

    & ~ label
    {
        padding: 10px;
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
        &:disabled
        {
             background-color: #ccc;
             color: #000;
             cursor: auto;
             &:hover
             {
               background-image: none;
             }
        }
    }

`