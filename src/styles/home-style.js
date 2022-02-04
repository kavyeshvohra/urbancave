import styled from 'styled-components'

export const LandingPageNavbar = styled.header`
    padding: 1.25rem;
    color: #0C2938;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 700;
    transition-duration: 0.5s;

    &.active
    {
        position:fixed;
        top:0px;
        z-index: 1;
        padding:1.25rem;
        color:#ffffff;
        background-color:#0C2938 ;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items:center;
        font-weight: 700;
        width:100%;
        transition-duration: 0.5s;
    }
`
export const LandingPageBrand = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    column-gap: 1rem;
`


export const LandingPageIntro = styled.section`
    display: flex;
    flex-direction:row;
    padding:0rem 5rem;
    align-items: center;
`

export const LandingPageIntroSlogan = styled.div`
    text-align: left;

    & h1
    {
        font-size: 2.8rem;
    }
`

export const LandingPageHouse1 = styled.img`
    width:50rem;
    object-fit: contain;
`
export const LandingPageFeature = styled.section`
    background-color: #BBE5FA;
    margin: 15vh 4rem 4rem 4rem;
    border:none;
    border-radius:1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding:2.5rem;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
`

export const LandingPageFeatureImage = styled.img`
    width:25rem;
    object-fit: contain;
`

export const LandingPageFeatureInfo = styled.div`
    width:40rem;
    text-align: left;

    & h3
    {
        font-size: 2rem;
    }
    & h1
    {
        font-size: 3rem;
        width: 39rem;
    }
    & p
    {
        font-size: 1rem;
    }
`

export const LandingPageRegisterButton = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-direction: row;
    justify-content: center;

    & button
    {
        background-color: #0C2938;
        color:#ffffff;
        border:none;
        padding:0.7rem 1rem;
        font-size: 1rem;
        font-weight: bold;
        border:none;
        border-radius:1rem;   
    }
`

export const LandingPageRegister = styled.section`
    background-color: #BBE5FA;
    margin:8rem 0rem;
    display: flex;
    flex-direction: row;
    align-items: cente r;
    justify-content: space-evenly;
    padding:3rem 0rem;
    box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5);
`

export const LandingPageRegisterImage = styled.img`
    width: 35rem;
    object-fit: contain;
`
export const LandingPageTestimonials = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;
    padding-bottom: 10rem;
`
export const TestimonialHeading = styled.div`
    border:solid #BBE5FA;
    width:fit-content;
    padding:0.8rem 1rem ;
    font-size: 5rem;
    color:#0C2938;
`
export const TestimonialInfoContainer = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: -10rem;
`

export const TestimonialImage = styled.img`
    width:15rem;
    object-fit: contain;
    z-index: -1;
`
export const TestimonialInfo = styled.div`
    width:30rem;
    background-color:#BBE5FA ;
    color:#0C2938;
    font-weight: 500;
    margin-top:15rem;
    margin-left:-3.5rem;
    padding:3rem;
    border:none;
    border-radius:1rem;
    font-size: 1.5rem;
    text-align: left;
    padding:4rem;
`
export const LandingPageFooter = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-bottom: 1rem;
    margin-top: -4rem;
`

export const LandingPageFooterInfoHighlight = styled.span`
    color:#53BAED;
`

export const LandingPageLogo = styled.div`
`
export const LandingPageFooterCont = styled.div`
    margin: 0 auto;
`
// export const LandingTestimonialNavigation = styled.div`

// `