import styled from 'styled-components'

export const Society = styled.div`
    display: flex;
    /* justify-content: center; */
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
export const HeadingCont = styled.div`
    margin: 2em;

`
export const Row = styled.div`
`
export const Heading = styled.h1`
    text-align: center;
    text-decoration: underline;
`
export const SocietyCont = styled.div`
    margin: 2em;
    width: 20em;
    border: 2px dashed #eee;
    border-radius: 15px;
    position: relative;
    transition: 0.3s all ease-in-out 0s;
    box-shadow: -1px 1px 11px #00000014;
    &:hover
    {
        border-color: #FAB6B6;
    }
`
export const Content = styled.div`
    padding: 2em;
    border-radius: 0 0 15px 15px;
    transition: 1s all ease-in-out 0;
    cursor: pointer;
    & h3
    {
        font-size: 1.4em;
        text-align: center;
    }
    & p
    {
        text-align: center;
    }
    &:hover
    {
        background: rgba(255, 232, 232, 0.5);
        background: -webkit-linear-gradient(top left, rgba(255, 232, 232, 1.0), rgba(140, 147, 159, 1.0));
        background: -moz-linear-gradient(top left, rgba(255, 232, 232, 1.0), rgba(140, 147, 159, 1.0));
        background: linear-gradient(to bottom right, rgba(255, 232, 232, 0.5), rgba(140, 147, 159, 0.5));
    }

`
export const Image = styled.img`
width: 100%;
height: 10em;
border-radius: 15px 15px 0px 0px;
`