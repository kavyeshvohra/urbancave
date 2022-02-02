import '../styles/home.css';
import Images from '../images';
import { useEffect , useState } from 'react';

const Home=()=>{

        
    window.addEventListener("scroll", () => {
        if(window.scrollY>80){
            document.getElementById("navbar").classList.add("active");
            document.getElementById("navbar").classList.remove("landingPageNavbar");

            let verticalBars=document.getElementsByClassName("landingPageVr");
            // verticalBars.map((bar)=>{
            //     bar.style.backgroundColor='#fff';
            // });

        }
        else if(window.scrollY<80){
            document.getElementById("navbar").classList.add("landingPageNavbar");
            document.getElementById("navbar").classList.remove("active");
            let verticalBars = document.getElementsByClassName("landingPageVr");
            console.log(verticalBars[0]);
            // verticalBars.map((bar) => {
            //     bar.style.backgroundColor = "#0C2938";
            // });
        }
    });

    

    let [current,setCurrent] = useState(0);
    const [photo, setPhoto] = useState([Images.man1, Images.visitor,Images.man1, Images.visitor]);
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

    useEffect(()=>{
        //changeTestimonials();
    });

        
    const changeTestimonials=async ()=>{
        
        

        if (current === photo.length) {
            setCurrent(0);
        } else {
            setCurrent(current++);
        }
        setTimeout(changeTestimonials,1000);
    };
    
    
    //setInterval(changeTestimonials,5000);

    return (
        <>
            <NavBar />
            <section className="landingPageIntro">
                <div className="landingPageIntroSlogan">
                    <h1>Easy way to manage your society. </h1>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolor quo, veritatis sequi quam in esse sapiente
                        nam sed ipsam vero, ut eos. Temporibus corporis esse,
                        unde vitae laboriosam modi
                    </span>
                </div>
                <div>
                    <img className="landingPageHouse1" src={Images.house1} />
                </div>
            </section>
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
            <section className="landingPageRegister">
                <div>
                    <img
                        className="landingPageRegisterImage"
                        src={Images.register}
                    />
                </div>
                <div className="landingPageFeatureInfo">
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
                    <div className="landingPageRegisterButton">
                        <button>+ &nbsp;&nbsp;&nbsp; Register Society</button>
                    </div>
                </div>
            </section>
            <section className="landingPageTestimonials">
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
            </section>
            <section className="landingPageFooter">
                <div>
                    <span className="landingPageFooterInfoHighlight">© All rights reserved.</span>Made by Urbancave
                </div>
            </section>
        </>
    );
}

//Components

//Navbar
const NavBar=()=>{
    return (
        <header id="navbar" className="landingPageNavbar">
            <div className="LandingPageBrand">
                <div className="landingPageLogo">Logo</div>
                <div className="landingPageVr"></div>
                <div className="landingPageCompanyName">Urban Cave</div>
            </div>
            <div className="landingPageVr"></div>
            <div>Home</div>
            <div className="landingPageVr"></div>
            <div>About Us</div>
            <div className="landingPageVr"></div>
            <div>Service</div>
            <div className="landingPageVr"></div>
            <div>Why Urbancave?</div>
            <div className="landingPageVr"></div>
            <div>Contact Us</div>
            <div className="landingPageVr"></div>
            <div>Sign In</div>
            <div className="landingPageVr"></div>
            <div>Register society</div>
        </header>
    );
}


//Feature 1
const Feature1 = (props) => {
    return (
        <section className="landingPageFeature">
            <div>
                <img className="landingPageFeatureImage" src={props.image} />
            </div>
            <div className="landingPageFeatureInfo">
                <h3>{props.info}</h3>
            </div>
        </section>
    );
};


//feature 2
const Feature2 = (props) => {
    return (
        <section className="landingPageFeature">
            <div className="landingPageFeatureInfo">
                <h3>{props.info}</h3>
            </div>
            <div>
                <img className="landingPageFeatureImage" src={props.image} />
            </div>
        </section>
    );
};


//Testimonals
const Testimonials=(props)=>{
    return (
        <>
            <div className="testimonialHeading">Testimonials</div>
            <div className="testimonialInfoContainer">
                <img className="testimonialImage" src={props.img} />
                <div className="testimonialInfo">{props.info}</div>
            </div>
        </>
    );
}

//functions

export default Home;