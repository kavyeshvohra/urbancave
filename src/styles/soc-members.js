import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`
export const Heading1 = styled.h2`
    text-align: center;
    flex: 1;
    text-decoration: underline;
`
export const Heading5 = styled.h5`
    margin-right: 1em;
    &.passwordheading
    {
        text-decoration: underline;
        font-size: 1em;
        & + div
        {
            background-color: #d3d3d3;
        }
    }
`
export const Heading4 = styled.h4`
    margin-bottom: 1.1em;
    text-align: center;
    text-decoration: underline;
`
export const Container1 = styled.div`
    & > table > tbody > tr > td:nth-child(1)
    {
        font-weight: 600;
    }
    .table2
    {
        font-weight: 600;
    }
    .rowDesign
    {
        vertical-align: baseline;
    }
    & > table > tbody > tr > td button
    {
        background: none;
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
export const ActionButton = styled.button`
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
    .actionStyle
    {
        font-size: 1.2em;
    }
`