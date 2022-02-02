import styled from 'styled-components'
// export const CnfHeading = styled.div`
//     margin: 0.5rem 0rem 1rem 0rem;
//     fon-ize: 2rem;
//     tex-lign: left;
//     margi-eft: 1.5rem;
//     fon-eight: 400;
//     color:#3e444e;
// `

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
    width: 25rem;
    border: #FAB6B6 solid 0.14rem;
    background-color: #FFFEFE;
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
    display: flex;
    flex-direction: column;
    margin-left: 0.2em;
    width: 95%;
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
    margin: 0.5rem 0rem 1rem 0rem;
    font-size: 2rem;
    text-align: left;
    margin-left: 1.5rem;
    font-weight: 400;
    color:#3e444e;
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
    width: 9rem;
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