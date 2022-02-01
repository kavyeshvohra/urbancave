//import '../styles/home.css';
import Images from '../images';
import * as HomeStyle from '../styles/home-style'
import { useEffect, useState } from 'react';

const Home = () => {


    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            document.getElementById("navbar").classList.add("active");

            let verticalBars = document.getElementsByClassName("landingPageVr");
            // verticalBars.map((bar)=>{
            //     bar.style.backgroundColor='#fff';
            // });

        }
        else if (window.scrollY < 80) {
            document.getElementById("navbar").classList.remove("active");
            let verticalBars = document.getElementsByClassName("landingPageVr");
            console.log(verticalBars[0]);
            // verticalBars.map((bar) => {
            //     bar.style.backgroundColor = "#0C2938";
            // });
        }
    });



    let [current, setCurrent] = useState(0);
    const [photo, setPhoto] = useState([Images.man1, Images.visitor, Images.man1, Images.visitor]);
    const [data, setData] = useState([
        "Lorem ipsum dolor, sit amet consectetur adipisicing" +
        "elit. Dolor quo, veritatis sequi quam in esse sapiente" +
        "nam sed ipsam vero, ut eos. Temporibus corporis esse," +
        "unde vitae laboriosam modi",
        " Amet libero morbi venenatis ut est. Iaculis leo ultricies" +
        "nunc id ante adipiscing. Vel metus odio at faucibus ac." +
        "Neque id placerat et id ut. Scelerisque eu mi ullamcorper" +
        "sit urna. Est volutpat dignissim nec.",
        "hii",
        "hello hii",
    ]);


    //setInterval(changeTestimonials,3000);
    //setTimeout(changeTestimonials,2000);

    useEffect(() => {
        //changeTestimonials();
    });


    const changeTestimonials = async () => {



        if (current === photo.length) {
            setCurrent(0);
        } else {
            setCurrent(current++);
        }
        setTimeout(changeTestimonials, 1000);
    };


    //setInterval(changeTestimonials,5000);

    return (
        <>
            <NavBar />
            <HomeStyle.LandingPageIntro>
                <HomeStyle.LandingPageIntroSlogan>
                    <h1>Easy way to manage your society. </h1>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolor quo, veritatis sequi quam in esse sapiente
                        nam sed ipsam vero, ut eos. Temporibus corporis esse,
                        unde vitae laboriosam modi
                    </span>
                </HomeStyle.LandingPageIntroSlogan>
                <div>
                    <HomeStyle.LandingPageHouse1 src={Images.house1} />
                </div>
            </HomeStyle.LandingPageIntro>
            <Feature1
                info=" Amet libero morbi venenatis ut est. Iaculis leo ultricies
                    nunc id ante adipiscing. Vel metus odio at faucibus ac.
                    Neque id placerat et id ut. Scelerisque eu mi ullamcorper
                    sit urna. Est volutpat dignissim nec."
                image={Images.camera}
            />
            <Feature2
                info="Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. 
                    io at faucibus ac. Neque id placerat et id ut. Scelerisque eu mi ullamcorper sit urna. 
                    Est volutpat dignissim nec."
                image={Images.visitor}
            />
            <Feature1
                info="Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. 
                    io at faucibus ac. Neque id placerat et id ut. Scelerisque eu mi ullamcorper sit urna. 
                    Est volutpat dignissim nec."
                image={Images.security}
            />
            <Feature2
                info="Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. 
                    io at faucibus ac. Neque id placerat et id ut. Scelerisque eu mi ullamcorper sit urna. 
                    Est volutpat dignissim nec."
                image={Images.payment}
            />
            <HomeStyle.LandingPageRegister>
                <div>
                    <HomeStyle.LandingPageRegisterImage
                        src={Images.register}
                    />
                </div>
                <HomeStyle.LandingPageFeatureInfo>
                    <h1>
                        Is your Society / Community Digitally Connected and
                        Safe?
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe voluptas, harum distinctio omnis placeat illo
                        sapiente. Distinctio illo delectus ab dolor? Expedita
                        quos explicabo maxime, doloribus magni sapiente officia
                        porro?
                    </p>
                    <HomeStyle.LandingPageRegisterButton>
                        <button>+ &nbsp;&nbsp;&nbsp; Register Society</button>
                    </HomeStyle.LandingPageRegisterButton>
                </HomeStyle.LandingPageFeatureInfo>
            </HomeStyle.LandingPageRegister>
            <HomeStyle.LandingPageTestimonials>
                <Testimonials img={photo[current]} info={data[current]} />
                <div className="landingTestimonialNavigation">
                    <img
                        src={Images.less}
                        onMouseOver={(event) => {
                            event.target.src = Images.lightless;
                        }}
                        onMouseOut={(event) => {
                            event.target.src = Images.less;
                        }}
                        onClick={() => {
                            if (current === 0) {
                                setCurrent(photo.length - 1);
                            } else {
                                setCurrent(--current);
                            }
                        }}
                    />
                    <img
                        src={Images.more}
                        onMouseOver={(event) => {
                            event.target.src = Images.lightmore;
                        }}
                        onMouseOut={(event) => {
                            event.target.src = Images.more;
                        }}
                        onClick={() => {
                            if (current === photo.length - 1) {
                                setCurrent((current = 0));
                            } else {
                                setCurrent(++current);
                            }
                        }}
                    />
                </div>
            </HomeStyle.LandingPageTestimonials>
            <HomeStyle.LandingPageFooter>
                <HomeStyle.LandingPageFooterCont>
                    <HomeStyle.LandingPageFooterInfoHighlight>© All rights reserved.</HomeStyle.LandingPageFooterInfoHighlight>Made by Urbancave
                </HomeStyle.LandingPageFooterCont>
            </HomeStyle.LandingPageFooter>
        </>
    );
}

//Components

//Navbar
const NavBar = () => {
    return (
        <HomeStyle.LandingPageNavbar id="navbar">
            <HomeStyle.LandingPageBrand>
                <HomeStyle.LandingPageLogo>Logo</HomeStyle.LandingPageLogo>
                <HomeStyle.LandingPageVr></HomeStyle.LandingPageVr>
                <HomeStyle.LandingPageCompanyName>Urban Cave</HomeStyle.LandingPageCompanyName>
            </HomeStyle.LandingPageBrand>
            <HomeStyle.LandingPageVr></HomeStyle.LandingPageVr>
            <div>Home</div>
            <HomeStyle.LandingPageVr></HomeStyle.LandingPageVr>
            <div>About Us</div>
            <HomeStyle.LandingPageVr></HomeStyle.LandingPageVr>
            <div>Service</div>
            <HomeStyle.LandingPageVr></HomeStyle.LandingPageVr>
            <div>Why Urbancave?</div>
            <HomeStyle.LandingPageVr></HomeStyle.LandingPageVr>
            <div>Contact Us</div>
            <HomeStyle.LandingPageVr></HomeStyle.LandingPageVr>
            <div>Sign In</div>
            <HomeStyle.LandingPageVr></HomeStyle.LandingPageVr>
            <div>Register society</div>
        </HomeStyle.LandingPageNavbar>
    );
}


//Feature 1
const Feature1 = (props) => {
    return (
        <HomeStyle.LandingPageFeature>
            <div>
                <HomeStyle.LandingPageFeatureImage src={props.image} />
            </div>
            <HomeStyle.LandingPageFeatureInfo>
                <h3>{props.info}</h3>
            </HomeStyle.LandingPageFeatureInfo>
        </HomeStyle.LandingPageFeature>
    );
};


//feature 2
const Feature2 = (props) => {
    return (
        <HomeStyle.LandingPageFeature>
            <HomeStyle.LandingPageFeatureInfo>
                <h3>{props.info}</h3>
            </HomeStyle.LandingPageFeatureInfo>
            <div>
                <HomeStyle.LandingPageFeatureImage src={props.image} />
            </div>
        </HomeStyle.LandingPageFeature>
    );
};


//Testimonals
const Testimonials = (props) => {
    return (
        <>
            <HomeStyle.TestimonialHeading>Testimonials</HomeStyle.TestimonialHeading>
            <HomeStyle.TestimonialInfoContainer>
                <HomeStyle.TestimonialImage src={props.img} />
                <HomeStyle.TestimonialInfo>{props.info}</HomeStyle.TestimonialInfo>
            </HomeStyle.TestimonialInfoContainer>
        </>
    );
}

//functions

export default Home;