import styled from 'styled-components'

export const GalleryHeader = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: center; */
    /* margin:0 2em; */
`

export const GalleryCaption = styled.div`
    font-size: 2em;
    color:#707A8A;
`

export const GalleryButtons = styled.div`
    display:flex;
    flex-direction: row;
    margin-top:2em;
    margin-left:2em;
    column-gap: 1em;
    justify-content: space-between;
    margin-right:9.5em;
`

export const GalleryButtonControls = styled.button`
    border:0.08em rgb(198, 198, 198) solid;
    border-radius:5px;
    padding:0.4em 0.5em;
    background-color: #FFFEFE;
    outline: none;
    color:#707A8A;

    &:hover{
        border-color: #FAB6B6;
        color:#FAB6B6;
        background-color: #FFFEFE;
    }

`