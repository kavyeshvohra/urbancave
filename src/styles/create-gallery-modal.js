import styled from 'styled-components'

export const CreateGalleryModalContainer = styled.div`
    width:30rem;
    background-color: #fff;
    margin:5rem;
    border:solid 3px #FEB6B6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding:1rem 1.5rem;
    transform: scale(0.8);
`
export const CreateGalleryModalHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const CreateGalleryModalCaption = styled.div`
    font-size: 1.8rem;
    color:#707A8A;
    font-weight: 400;
`
export const CreateGalleryModalImg = styled.div`
    width:2.4rem;
    object-fit: contain;
`

export const CreateGalleryModalBody = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    width:70%;
    align-items: flex-start;
    row-gap: 1rem;
`

export const CreateGalleryModalLabel = styled.div`
    font-size: 1.2rem;
    margin-bottom:-0.8rem;
    font-weight:lighter;
`