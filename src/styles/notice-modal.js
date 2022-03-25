import styled from 'styled-components'

export const FileWrapper = styled.div`
    margin-bottom: 1.5em;
    & > .customFileStyle
    {
        &:hover > p
        {
            color: #aaa;
        }
        border: 2px dashed #fab0b0;
        padding: 50px;
        text-align:center;
        background-color: #eee;

        & > p
        {
            margin: 0;
            line-height: 25px;
        }
    }
`
export const DownloadButtonContainer = styled.div`
    & > .attachments-download
    {
        width:auto;
        display: flex;
        align-items: center;
        margin: 0;
        margin-top: 5px;
        justify-content: space-evenly;
        background: none;
        outline: none;
        border-radius: 10px;
        border: 0;
        padding: 8px 15px;
        transition: 0.2s ease-in all;
        background-color: #3e444e;
        color: #fab6b6;
        font-weight: 600;
        &:hover
        {
            background-image: linear-gradient(240deg,#fcd2d2,#dddddd);
            color: #000;
        }
        & > svg
        {
            margin: 0;
            margin-left: 5px;
        }
    }
`


// export const NoticeContainer = styled.div`
//     flex: 2;
//     margin-top: 2.5em;
//     position: relative;
//     margin-left: 19em;
// `
// export const NoticeInput = styled.input`
//     outline: none;
//     border:solid 2px#FEB6B6;
//     width:20rem;
//     height:2rem;
//     border-radius: 5px;
//     color:#0C2938;
//     font-size: 1rem;
//     padding:0rem 1rem;
// `
// export const NoticeInput1 = styled.input`
//     outline: none;
//     border:solid 2px #FEB6B6;
//     height:1.9rem;
//     width:20rem;
//     height:15rem;
//     border-radius: 5px;
//     resize: none;
//     color:#0C2938;
//     font-size: 1rem;
//     padding:1rem;
// `
// export const NoticeImage = styled.div`
//     width:2.5em;
//     object-fit: contain;
// `
// export const NoticeFileCont = styled.div`
//     display: flex;
//     flex-direction: column;
//     row-gap: 1rem;
//     align-items: baseline;
//     margin-top: 0.5rem;
// `

// export const NoticeFile = styled.div`
//     border:2px solid #FEB6B6;
//     border-radius: 5px;
//     width:100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-top: 0.2rem;
//     padding-top:1em;
// `
// export const NoticeUploadIcon = styled.div`
//     width:2.5rem;
//     object-fit: contain;
//     margin:2rem 0rem 1rem 0rem;
// `
// export const NoticeUploadText = styled.div`
//     margin:1rem;
//     width:15rem;
//     color:#707A8A;
//     text-align: center;
// `
// export const NoticeButtons = styled.div`
//     width:100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-top:1rem;
// `

// export const NoticePost = styled.button`
//     outline: none;
//     border:solid #FEB6B6 2px;
//     font-size: 1.3rem;
//     background-color: #FEFEFE;
//     color:#707A8A;
//     padding:0.3rem 0.5rem;
//     border-radius: 8px;

//     &:hover
//     {
//         border-color: #FAB6B6;
//         background-color: #FAF0F0;
//         color : #FEB6B6;
//     }
// `