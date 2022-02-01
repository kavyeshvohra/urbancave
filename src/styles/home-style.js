import styled from 'styled-components'

export const LandingPageNavbar = styled.header`
    padding: 1.25rem;
    color: #0C2938;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 700;
    transition-duration: 0.5s;

    & .active
    {
        position:fixed;
        top:0px;
        z-index: 1;
        padding:1.25rem;
        color:#ffffff;
        background-color:#0C2938 ;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items:center;
        font-weight: 700;
        width:100%;
        transition-duration: 0.5s;
    }
`