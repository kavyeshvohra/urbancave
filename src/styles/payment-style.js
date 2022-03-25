import styled from 'styled-components'

export const FilterWrapper = styled.div`
        margin-top: 2em;
`
export const Content = styled.div`
    margin-left: 1em;
    margin-top: 2em;
    border: 1px dashed #ccc;
    border-radius: 15px;
    padding: 15px;

    &:hover
    {
        border-color: #fab6b6;
    }
    .payment-heading > th
    {
        text-align: center;
    }
    .custom-layout > td:nth-child(8)
    {
        padding-top: 20px;
    }
    .custom-layout > td
    {
        padding-top: 25px;
        padding-bottom: 20px;
    }
    .buttonStyle
    {
        background: none;
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