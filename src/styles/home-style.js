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
        color:rgba(12,41,56);
        background-color: rgb(250,240,240);
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items:center;
        font-weight: 700;
        width:100%;
        transition-duration: 0.5s;
    }
`
export const Logo = styled.img`
    cursor: pointer;
    width: 200px;
`
export const NavbarList = styled.ul`
    list-style-type: none;
    margin: 0;

`
export const SliderCont = styled.div`
    width: 70em;
`
export const NavbarItem = styled.li`
    display: inline-block;
    padding: 0px 20px;
    cursor: pointer;
    transition: 0.3s all ease 0s;
    &:hover{
        color: rgba(62,68,78,0.7);
    }
`

export const LandingPageIntro = styled.section`
    display: flex;
    flex-direction:row;
    padding:0rem 5rem;
    margin-bottom: 2em;
    align-items: center;
`

export const LandingPageIntroSlogan = styled.div`
    text-align: left;

    & h1
    {
        font-size: 2.8rem;
    }
`
export const ButtonLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease 0s;
`
export const Button = styled.button`
    padding: 10px 25px;
    background-color: #3e444e;
    border: none;
    color: #fff;
    transition: all 0.3s ease 0s;
    border-radius: 15px;
    cursor: pointer;
    font-weight: 700;

    &:hover
    {
        background-color: rgba(62,68,78, 0.3);
        color: #595757;
    }
`
export const LandingPageHouse1 = styled.img`
    width:50rem;
    object-fit: contain;
`
export const LandingPageFeature = styled.div`
    background-color: #fff;
    margin: 1.5em;
    margin-right: 3em;
    border:none;
    width: 22.2em;;
    height: inherit;
    border-radius:1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding:1.5em;
    transition: 0.3s all ease 0s;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
`

export const LandingPageFeatureImage = styled.img`
    width:10rem;
    
    //object-fit: contain;
`
export const Feature = styled.div`
    display: flex;
    flex-direction : row;
    align-items: center;
    /* height: 46em; */

`
export const HeadingContainer = styled.div`
    padding: 1em 3em;
`
export const Container = styled.div`


`
export const FeatureHeading = styled.div`
    & > h1
    {
        font-size: 4.2em;
        font-weight: 700;
    }
    padding-bottom: 2em;
`

export const FeatureDesc = styled.div`
    font-size: 1.2em;
    line-height: 1.8em;
`

export const FeatureCont = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
`
export const LandingPageFeature2 = styled.div`
`
export const LandingPageFeatureInfo2 = styled.div`
    padding-left: 10em;
    padding-right: 5em;

    & > h1
    {
        font-weight: 700;
        padding-bottom: 0.5em;
    }

    & > p
    {
        padding-bottom: 1em;
    }
`
export const LandingPageImageCont = styled.div`
    padding-left: 10em;
`
export const LandingPageFeatureInfo = styled.div`
    text-align: left;
    margin-top: 1em;
    margin-bottom: 1em;

    & > h4
    {
        font-size: 1.7em;
        margin-bottom: 1em;
    }
    & p
    {
        font-size: 1rem;
    }
`

export const LandingPageRegisterButtonContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-direction: row;
    justify-content: center;
`
export const LandingPageRegisterButton = styled.button`
    padding: 15px 25px;
    background-color: #3e444e;
    border: none;
    color: #fff;
    transition: all 0.3s ease 0s;
    border-radius: 15px;
    cursor: pointer;
    font-weight: 700;

    &:hover
    {
        background-color: rgba(62,68,78, 0.3);
        color: #595757;
    }
`

export const LandingPageRegister = styled.section`
    background-color: rgb(250,240,240);
    margin:8rem 0rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding:3rem 0rem;
    box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5);
`

export const LandingPageRegisterImage = styled.img`
    width: 25rem;
`
export const LandingPageTestimonials = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;
    padding-bottom: 10rem;

    & > h1
    {
        cursor: auto;
    }

`
export const TestimonialHeading = styled.div`
    width:auto;
    text-align: center;
    padding:0.8rem 1rem ;
    font-size: 1.4rem;
    font-weight: 600;
    color:#0C2938;
    margin-left: 0.7em;
`
export const TestimonialInfoContainer = styled.div`
    display:flex;
    flex-direction: row;
    margin-left: 2em;
    //margin-top: -10rem;
`
export const TestimonialImageContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: 100px;
    position: absolute;
    height: 100px;
`
// export const TestimonialImage = styled.img`
//     width:auto;
//     margin: 0 auto;
//     display: inline;
//     z-index: -1;
//     margin-left: -25%;
//     background-image: url
// `

export const TestimonialPara = styled.p`
    font-size: 0.7em;
    padding-top: 1em;
`
export const TestimonialInfo = styled.div`
    width:auto;
    background-color:#FAF0F0;
    color:#0C2938;
    font-weight: 500;
    margin-left:2.5rem;
    padding:2rem;
    border:none;
    border-radius:1rem;
    font-size: 1.5rem;
    /* text-align: center; */
`

export const SocietyName = styled.div`
    text-align: right;
    padding-top: 1em;

    & > h6
    {
        font-size: 0.5em;
    }
`
export const LandingPageFooter = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-bottom: 1rem;
    margin-top: -4rem;
`

export const LandingPageFooterInfoHighlight = styled.span`
    color:#FAB6B6;
`

export const LandingPageFooterCont = styled.div`
    margin: 0 auto;
`
// export const LandingTestimonialNavigation = styled.div`

// `