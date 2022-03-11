import styled from 'styled-components'
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
export const ButtonContainer = styled.div`
    margin: 2em 4em;

    & > button
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
`
export const SocietyContent = styled.div`
    padding-bottom: 20px;
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
export const SocietyHead = styled.div`
    margin-bottom: 2.5em;
    text-align: center;
    color: #000;
    letter-spacing: 1px;
`
export const FilterContainer = styled.div`
    flex: 2;
    margin-top: 2.5em;
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
export const ComplaintSubject = styled.select`
    width: 25.3rem;
    height: fit-content;
    outline: none;
    color:#3e444e;
    border: #FAB6B6 solid 0.14rem;
    background-color: #FFFEFE;
    font-size: 1rem;
    padding: 0.25rem;
    border-radius: 0.5rem;
`

export const ComplaintInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    /* border: #FAB6B6 solid 0.14rem; */
    background-color: rgba(112,122,138,0.2);
    height: 15rem;
    border-radius: 0.5rem;
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

export const ComplaintInfoDetails = styled.textarea`
    font-size: 1rem;
    padding: 0.25rem;
    width: 24.40rem;
    text-align: left;
    outline: none;
    border: none;
    background-color: #FFFEFE;
    resize: none;
    color:#3e444e;
    height: 13rem;

    &::placeholder{
        color:#676767;
        font-size: 1rem;
        
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
    font-size: 2rem;
    margin: 0.5em 0em;
    display: flex;
    justify-content: space-around;
    align-items:center;
    text-align: left;
    margin-left: 1.5rem;
    font-weight: 400;
    color:#3e444e;
    width: 50%;
`

export const ComplaintHistoryCategory = styled.select`
    width: rem;
    height: fit-content;
    outline: none;
    color:#3e444e;
    border: #FAB6B6 solid 0.14rem;
    background-color: #FFFEFE;
    font-size: 1rem;
    padding: 0.25rem;
    border-radius: 0.5rem;
`

export const ComplaintTicketContainer = styled.div`
    margin-top: 4rem;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    row-gap: 1em;
    justify-content: space-evenly;
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