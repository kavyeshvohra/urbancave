import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 0.13rem;
    display: flex;
    flex-direction: column;
`

export const ContentContainer = styled.div`
    /* display: flex;
    flex-direction: column; */
    float: right;
    width:80.7vw;
    /* height:100vh; */
    overflow-y:scroll;
    margin-bottom: 1em;
    margin-top: 80px;
    scrollbar-width:initial;
    padding: 0 20px;
`

export const NavItems = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 2em;
`
export const NavContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: rgb(250,240,240);
    position: fixed;
    z-index: 1;
    & > .logo
    {
        width:15em;
        object-fit:contain;
    }
`
// export const AccountWrapper = styled.div`
//     position: absolute;

// `
export const Profile = styled.ul`
background: #eeeeee;
width: 350px;
left:auto;
right: 10px;
padding: 0;
top: 70px;
line-height: 40px;
border-radius: 15px;
box-shadow: 0px 2px 20px 0px;
outline: 0;
position: absolute;
list-style: none;
z-index: 1000;
margin:0;
&::after
{
    position: absolute;
    content: '';
    display: block;
    z-index: 1000;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent; 
    border-bottom: 8px solid #3e444e;
    top: -7px;
    left: 315px;
}

& > li
{
    cursor: pointer;
    padding: 10px 20px;

    &:hover
    {
        color: #fab6b6;
        background: rgb(112,122,138);
    }
    &:nth-child(1n+2)
    {
        display: flex;
        align-items: center;
        column-gap: 0.5em;
        font-weight: 600;
    }
    &:nth-child(4):hover
    {
        border-radius: 0px 0px 15px 15px; 
    }
}
& > li.header
{
    background:#3e444e;
    color: #fab0b0; 
    cursor: auto;
    border-radius: 15px 15px 0px 0px;
    box-shadow: 0px 2px 20px 0px;
    padding-top: 20px;
    &:hover
    {
        color: #fab0b0;
    }
    & > p
    {
        margin : 0;
        font-size: 0.86em;
        font-style: oblique;
    }
}
`