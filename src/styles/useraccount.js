import styled from 'styled-components'

export const UploadButton = styled.input`
    display: none;

    & ~ label
    {
        padding:15px;
        width: max-content;
        font-size: 0.8em;
        cursor: pointer;
        border-radius: 30px;
        background-color: #3e444e;
        color: #faf0f0;
        outline:none;
        text-decoration: none;
        font-weight: 300;
        font-family: montserrat, sans-serif;
        box-shadow: -1px 1px 11px #00000014;
        transition: 0.3s all ease-in-out;
        border: none;

        &:hover, &:focus
        {
             /* background-color: #9FB1BCFF; */
             color: #595757;
             font-weight:300;
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

export const ProfileDetails = styled.div`
  border: 1px solid #fff;
  padding: 4rem 4rem;
  background-color: rgba(250,182,182,0.5);
  border-radius: 15px;
  width: 70em;
  height: max-content;
  display: flex;
  margin-left: 4.98em;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 1.5em;
  column-gap: 1.49em;
  box-shadow: -1px 1px 11px #00000014;
`

export const UserSettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
`