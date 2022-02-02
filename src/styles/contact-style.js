import styled from 'styled-components'

export const ContactBody = styled.div`
    background-color:#FFFEFE;
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction: row;
    column-gap: 4rem;
    align-items: center;
    justify-content: center;
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;
`

export const ContactHeading = styled.div`
    display: flex;
    flex-direction: column;
    color:#0C2938;
    font-size:3.5rem;
    font-weight: 700;
`
export const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
`

export const ContactFormName = styled.input.attrs({
    placeHolderColor: "#0c2938",
    fontWeight: "400",
    fontSize: "1.2rem"
})`
    width:20rem;
    border:none;
    border-radius:0.5rem;
    background-color: #FAF0F0;
    padding:1rem;
    font-size: 1.2rem;
    font-weight: 400;
    outline:none;
`

// export const ContactFormEmail = styled.input.attrs({
//     placeHolderColor: "#0c2938",
//     fontWeight: "400",
//     fontSize: "1.2rem"
// })`
//     width:20rem;
//     border:none;
//     border-radius:0.5rem;
//     background-color: #FAF0F0;
//     padding:1rem;
//     font-size: 1.2rem;
//     font-weight: 400;
//     outline:none;
// `

export const ContactFormMessage = styled.textarea.attrs({
    placeHolderColor: "#0c2938",
    fontWeight: "400",
    fontSize: "1.2rem"
})`
    resize:none;
    width:20rem;
    height:10rem;
    border:none;
    border-radius:0.5rem;
    background-color: #FAF0F0;
    padding:1rem;
    font-size: 1.2rem;
    font-weight: 400;
    outline:none;
`

// ::placeholder{
//     color:#0C2938;
//     font-weight: 400;
//     font-size: 1.2rem; 
// }

export const VerticalHr = styled.div`
    height: 85vh;
    width: 0.2rem;
    background-color: #FAB6B6;
`

export const ContactButton = styled.button`
    color:#0C2938;
    border:solid #BBE5FA;
    border-radius: 0.7rem;
    background-color: #F7FBFC;
    padding: 0.7rem;
    font-size: 1.25rem;
    font-weight: 600;
    width: 16rem;
    transition: 0.3s;

    &:hover
    {
        color: #fff;
        border-color:#0C2938;
        background-color: #0C2938;
    }
`

export const ContactExtraContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50rem;
`

export const ContactExtraModal = styled.div`
    width: 46rem;
    height: 20rem;
    background-color: #BBE5FA;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2.5rem;
`

export const ContactExtraModalHeading = styled.div`
    font-size: 2rem;
    font-weight: 400;
    color:#0C2938;
    width: 13rem;
`

export const ContactExtraModalDetails = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    margin-left: 4em;
`

export const ContactExtraModalText = styled.div`
    text-align: left;
    margin-left: 0.5rem;
`

export const ContactExtraModalImage = styled.img`
    width: 35rem;
    object-fit: contain;
`

export const ContactExtraModalButton = styled.button`
    color:#707A8A;
    border:solid #707A8A;
    border-radius: 0.7rem;
    background-color: #FFFEFE;
    border-color:#707A8A;
    padding: 0.7rem;
    font-size: 1rem;
    font-weight: 600;
    width: 10rem;
    transition: 0.3s;
    margin-top: 5rem;

    &:hover
    {
        color:#0C2938;
        border-color: #BBE5FA;
        background-color: #F7FBFC;        
    }
`

export const ContactExtraText = styled.div`
    text-align: left;
    width: 15rem;
    padding-top: 3rem;
    align-self: baseline;
    font-size: 1.3rem;
    margin-top: 2em;
`