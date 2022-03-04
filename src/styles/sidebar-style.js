import styled from "styled-components";


export const SideBarContainer = styled.div`
    position: fixed;
    width: 370px;
    overflow-y:auto;
    max-width: 18.279em;
    height:100vh;
    padding-top:2em;
    margin-top: 80px;
    box-shadow:inset -1px -1px 8px 0px rgb(250 240 240);
`
export const MenuListItem = styled.li`
    display:flex;
    align-items: center;
    color: #707A8A;
    cursor: pointer;
    font-size: 1.181em;
    padding: 0em 2em 1em 1em;
    margin-bottom: 0.6em;
    text-align: left;
    position: relative;
    &:hover
    {
        color: #FAB6B6;
    }
    /* &:hover > svg 
    {

    } */
    & > svg
    {
        margin-right:0.7em;
    }
    &::before {
        content: ' ';
        position: absolute;
        left: 0;
        border-radius: 0% 45% 45% 0%;
        width: 2.5em;
        /* visibility: hidden; */
        height: 3rem;
        background-color: #FAF0F0;
        z-index: -1;
        opacity: 0;
        transition: all 0.3s;
    }
    &:hover::before {
        opacity: 1;
    }
`
export const LogoContainer = styled.div`
    margin: 3em 1em 3em 0;
`
export const MenuItems = styled.ul`
    text-decoration: none;
    list-style-type: none;
    font-weight: 400;
    padding: 0;
`