import styled from 'styled-components'

export const FolderCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & > div
    {
        display: initial;
        flex: 0;
    }
    & > div > div
    {
        display: flex;
        flex-direction: column;
        width: 18em;
        margin: 2em;
        &:hover
        {
            background: linear-gradient(to bottom right,rgba(255,232,232,0.5),rgba(140,147,159,0.5));
        }
    }
    & > div > div > svg
    {
        align-self: center;
    }
    & > div > div > div
    {
        &:hover
        {
            background: none;
        }
        & > h3
        {
            margin: 0;
        }
    }
`
// export const 