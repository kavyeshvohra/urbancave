import styled from 'styled-components'
import cancel from '../Images/cancel.svg'    
// export const CnfHeading = styled.div`
//     margin: 0.5rem 0rem 1rem 0rem;
//     fon-ize: 2rem;
//     tex-lign: left;
//     margi-eft: 1.5rem;
//     fon-eight: 400;
//     color:#3e444e;
// `
export const Wrapper = styled.div`
    display: flex;
`
// export const Span = styled.span`
//     position: absolute;
//     pointer-events: none;
//     transition: 0.3s all ease;
//     display: block;
//     width: 100%;
//     height: 100%;
//     top: -5px;
//     left: 35px;
//     &::after
//     {
//         content: attr(data-placeholder);
//         color: red;
//         display: block;
//         width: 100%;
//         position: absolute;
//         top: 16px;
//         left: 0px;
//         padding-left: 5px;

//         -webkit-transition: all 0.4s;
//         -o-transition: all 0.4s;
//         -moz-transition: all 0.4s;
//         transition: all 0.4s;
//     }
// `

export const MoreItemsContainer = styled.div`
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    width: 150px;
    top: 34px;
    left: 32em;
    box-shadow: 2px 1px 6px 0px;
    /* padding: 8px 15px; */
    & > ul
    {
        list-style: none;
        cursor: pointer;
        padding: unset;
        margin-bottom: 0px;
        & > li:hover
        {
            background: #fab6b6;
        }
        & > li
        {
            padding-left: 20px;
            padding-top: 10px;
            padding-right: 20px;
            padding-bottom: 10px;
            /* margin-top: 8px; */
        }
    }
`
export const ButtonContainer = styled.div`
    margin: 2em 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;

[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  width: 10px;
  background-image: url(${cancel});
  background-size: 10px 10px;
  background-repeat: no-repeat;
}
    input[type="search"] {
    border: none;
    white-space: wrap;
    border-radius: 5px 0px 0px 5px;
	background: #E9E9E9;
	overflow: hidden;
	text-overflow: clip;
	padding: 0.35em 0.75em;
	border: none;
	font-size: 1.1em;
	text-decoration: none;
	line-height: normal;
	max-height: 3em;
  
    flex: 2 0 250px;
    }

    input[type="search"]:focus {
        background: rgba(250, 182, 182, 0.1);
        color: black;
        transition: background 400ms ease-in-out;
        outline: none;
}
    .search-icon
    {
        background: none;
        padding: 5px 10px;
        transition: 0.2s ease-in all;
        background-color: #3e444e;
        color: #fab6b6;
        font-weight: 600;
        border: none;
    }
    .newTicket
    {
        display: flex;
        align-items: center;
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
            margin-right: 5px;
        }
    }
`
export const SocietyContainer = styled.div`
    //padding: 30px 50px 0 0;
    display: flex;
    flex-direction: column;
    width: 25%;
    background-color: #eee;
    height: 100vh;
    padding-top: 2.5em;
    position: fixed;
`
export const SocietyContent = styled.div`
    padding-bottom: 20px;
`
export const DeleteCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h2
    {
        margin-bottom: 1em;
        margin-top: .5em;
    }
    & > p
    {
        width: 80%;
        text-align: center;      
    }
`
export const SocList = styled.ul`
    list-style: none;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    color: rgb(112,122,138);
    & > li
    {
        padding: 15px 0 15px 20px;
        margin-bottom: 10px;
    }
    & > li:hover
    {
        color:rgba(250,182,182);   
    }
    & > li.active
    {
        background-color: rgba(250,182,182);
        color: rgb(112,122,138);
    }
    & > li.active:hover
    {
        color:rgb(112,122,138);   
    }

`
export const InputViewCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    width: 30%;
`
export const DetailWrapper =styled.div`
    display: flex;
    gap: 1em;
    flex-direction: column;
`
export const SocietyHead = styled.div`
    margin-bottom: 1.5em;
    text-align: center;
    color: #000;
    letter-spacing: 1px;
    padding-bottom: 20px;
    border-bottom: 2px solid #fab0b0;
`
export const ComplaintContainer = styled.div`
    flex: 2;
    margin-top: 2.5em;
    position: relative;
    margin-left: 24em;
`
export const MenuWrapper = styled.div`
    margin-left: 20px;
    border-bottom: 2px dashed #fab0b0;
`
export const MenuItems = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
    transition: 0.2s ease-in;
    color: #000;
    & > li
    {
        border-bottom: 2px solid transparent;
    }
    &>li:hover
    {
        color: rgba(112, 122, 138, 0.8);
        border-bottom: 2px solid #fab0b0;
    }
    & > li.active
    {
        color:#fab0b0;
    }
`
export const ComplaintDesc = styled.textarea`
    cursor: text;
    width: 100%;
    padding: 8px;
    resize: none;
    border-radius: 5px;
    border: 2px solid #000;
`

export const ComplaintInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    max-height: 15rem;
    /* align-items: center; */
    /* width: inherit; */
    /* border: #FAB6B6 solid 0.14rem; */
    background-color: rgba(112,122,138,0.2);
    height: 15rem;
    border-radius: 0.5rem;
    padding-top: 8px;
    padding-left: 30px;
    padding-right:20px;
    padding-bottom: 20px;
`

export const ComplaintInfoHeading = styled.div`
    font-size: 1rem;
    padding: 0.4rem;
    width: 24.52rem;
    height: fit-content;
    text-align: left;
    border-bottom:solid #FAB6B6;
    color:#3e444e;
    font-size: 1rem;
    pointer-events: none;
`

export const ComplaintInfoDetails = styled.div`
    & > h2
    {
        text-align: left;
    }
    & > p
    {
        white-space: normal;
        text-overflow: ellipsis;
    }
`

export const ComplaintRegisterButton = styled.button`
    color:#707A8A;
    border:solid #707A8A;
    border-radius: 0.7rem;
    background-color: #FFFEFE;
    padding: 0.7rem;
    font-size: 1.25rem;
    width: 16rem;
    transition: 0.3s;

    &:hover
    {
        color: #FAB6B6;
        border-color: #FAB6B6;
        background-color: #FAF0F0;
    }
`

export const ComplaintHistoryContainer = styled.div`
    margin: 2em 4em;
    /* display: flex;
    flex-direction: column;
    margin-left: 0.2em;
    width: 95%; */
`

export const ComplaintHistoryHeaderContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 1rem;
`

export const ComplaintHistoryHeader = styled.div`
    margin: 0.5em 0em;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    /* margin-left: 1.5rem; */
    font-weight: 400;
    color:#3e444e;
    width: 100%;
    max-width: 100%;
    padding-top: .25em;
    gap: 1em;
    & > svg
    {
        font-size: 18px;
    }
    & > h5
    {
        flex: 1;
        margin: 0;
        font-style: italic;
        color: #F89E9E;
    }
    & > button
    {
        padding-bottom: 2px;
        border: none;
        border-radius: 5px;
        width: 35px;
        background: none;
        border: 2px solid #fab0b0;
        transition: 0.2s ease-in;
        &:hover
        {
            background-color: #fab0b0;
        }
    }
`

export const ComplaintFooterInfo = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    gap: 1em;
    & > h6
    {
        margin: 0;
    }
`
export const ComplaintTicketControls = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    color:#3e444e;
    font-weight: 500;
    transition-duration: 200ms;
`

export const ComplaintTicketContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: center;
    width: 12rem;
    padding: 1rem;
    border: #FAB6B6 solid 0.14rem;
    background-color: #FFF;
    border-radius: 0.5rem;
    transition-duration: 200ms;

    &:hover
    {
        background-color: #FAF0F0;
    }
    &:hover + ${ComplaintTicketControls}
    {
        color: #FAB6B6;
    }
`

// .complaintTicketContent: hover.complaintTicketControls{
//     color: #FAB6B6;
// }

export const ComplaintTicketHeading = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color:#3e444e;
`

export const ComplaintTicketStatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 0.2rem;
`

export const ComplaintTicketStatusImage = styled.img`
    width: 1rem;
    object-fit: contain;
`

export const ComplaintTicketStatus = styled.div`
    color:#4BD02A;
    font-weight: 500;
`



// export const ComplaintTicketControlImage = styled.image`
//     width: 0.6rem;
//     object-fit: contain;
// `

export const ContentMatter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    row-gap: 1rem;
`