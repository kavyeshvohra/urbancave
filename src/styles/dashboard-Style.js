import styled from "styled-components";
export const Name = styled.h2`
    /* font-size: 1rem; */
    font-weight: 400;
    text-align: left;
    margin-left: 2em;
    margin-bottom: 0em;
    margin-top: 1em;
`;
export const ChartCont = styled.div`
    width: 15em;
    margin: 1.2em 0 0 -0.5em;
`
export const Item = styled.div`
    border: 1px dashed #ccc;
    padding: 1em 2em 2em 2em;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    &:hover
    {
        border-color: #FAB6B6;
    }
`;
export const IconWrapper = styled.div``
export const Item2 = styled.div`
    border: 1px dashed #ccc;
    border-radius: 5px; 
    transition: 0.2s ease-in-out;
    width: 17.5em;
    height: 9.8em;
    //margin: 0 2em 0 2em;
    padding: 1em 0em 1em 2em;
    position:relative;
    &:hover
    {
        border-color: #FAB6B6;
    }
    /* @media (min-width: 1100px)
    {
        width: 40vw;
        //left: 280px;
    } */
`
export const HeadingContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
`
// export const Cont = styled.div`

// `

export const HeadName = styled.h5`
margin: 0;
font-size: 1em;
`
export const DashItemWrapper = styled.div`
    display: flex;
    column-gap: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    justify-content: space-evenly;
`
export const DashItemWrapper1 = styled.div`
    display: flex;
    justify-content: space-around;
    gap:1.5em;
    & > :nth-child(1)
    {
        flex-basis: 7%;
    }
    & > :nth-child(2)
    {
        flex-basis: 70%;
    }
    & > :nth-child(3),
    & > :nth-child(4)
    {
        flex-basis: 30%;
    }
    & > :nth-child(5)
    {
        flex-basis: 11%;
    }

    /* & > *
    {
        flex: 100%;
    } */
`
export const Area = styled.p`
    margin: 0;
    font-size: 1em;
`
// export const Table = styled.table`
//     width: 100%;
//     border-collapse: collapse;

//     & thead
//     {
//         background-color: #FFB0B0 !important;
//         border: 0.5px solid #eee;     
//     }
//         border: 0.5px solid #eee;
//     & thead, tr, th
//     {
//         font-weight: 500;
//         letter-spacing: 0.35px;
//         opacity: 1;
//         padding: 12px;
//         vertical-align: top;
//     }
//     & tbody tr td
//     {
//         letter-spacing: 0.35px;
//         font-weight: normal;
//         border-bottom: 0.5px solid #eee;
//     }
// `

export const Item3 = styled.div`
    height: 20em;
    border: 1px dashed #ccc;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    width: 17.5em !important;
    margin: 0 0 0 0;
    padding: 1em 2em 1em 2em;
    position:relative;
    &:hover
    {
        border-color: #FAB6B6;
    }
`
export const Item4 = styled.div`
    width: 30em;
    border: 1px dashed #ccc;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    margin: 0 0 0 0em;
    padding: 1em 0em 1em 2em;
    position:relative;
    &:hover
    {
        border-color: #FAB6B6;
    }
`
export const Icon = styled.span`
    font-size: 25px;
    line-height: 44px;
    padding: 0.5em;
`

export const Title = styled.h3`
    font-size: 1em;
    text-align: left;
    font-weight: 400;
    margin: 0.1rem;
    margin-bottom: 0.5rem;
`;
export const DashItemContainer = styled.div`
    width: 21vw;
`;
export const DashItemContainer1 = styled.div`
    width: 25.5vw;
`
export const DashItemContainer2 = styled.div`
    width: 25.5vw;
    flex: 1;
`

export const Payment = styled.div`
    font-size: 1em;
`
export const Date = styled.div`
    font-size: 1em;
`
export const Feature1Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2em 2em 2em 2em;
    justify-content: space-around;
`;
export const Feature2Container = styled.div`
    display: flex;
    column-gap: 3em;
    margin-left:4rem;
    margin-right: 4rem;
`
export const Feature3Container = styled.div`
    display:flex;
    flex-direction: row;
    column-gap: 2rem;
    justify-content: flex-start;
    margin-left:4rem;
    margin-right: 4rem;
    margin-bottom:4rem;
`
export const CarouselRow = styled.div`
    display:flex;
    flex-direction: row;
    column-gap: 5rem;
    justify-content: flex-start;
`
export const CarouselContainer = styled.div`
    max-width: 17.5em;
    /* @media (min-width: 1100px) {
        left: 280px;
        max-width: calc(40vw - 280px);
    } */
`
export const Metrics = styled.h1`
    font-weight: 400;
    text-align:left;
    margin: 0;
`;
export const ButtonWrapper = styled.button`
    margin-top: 2em;
    padding: 15px 50px 15px 50px;
    border-radius: 8px;
    cursor: pointer;
    border: 0px;
    background-color: #333B5D;
    color: #fff;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
`;
export const Wrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
`;
export const FeatureHeading = styled.h2`
    font-size: 2em;
    margin-top: 0.1em;
    margin-bottom: 0.1em;
    font-weight: 500;
    color: #333B5D;
`;
export const RecordWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const Transact_h3 = styled.h3`
    text-align: "center";
    font-weight: 500;
`;
export const Desc = styled.p`
    text-align: left;
    font-weight: 300;
    margin: 0;
    margin-top: 0.5rem;
`;
export const Icondiv = styled.div`
    position: absolute;
    top: 30px;
    right: 20px;
    background-color: #ccc;
    border-radius:50%;
    width: 50px;
    height: 50px;

`
export const Div = styled.div`
    display: flex;
    justify-content: space-between;;
    column-gap:1.5em;
`
export const SrNo = styled.div`
    font-size: 1em;0
`
export const Cont1 = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 6em;
`

export const Cont2 = styled.div``