//import '../styles/home.css';
import Images from '../images';
import * as HomeStyle from '../styles/home-style'
import { useState } from 'react';
import Slider from 'react-slick'
import Select from 'react-select'
import { SelectGroup, TextSpan } from '../styles/register-styles';
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear"
};

const Home = () => {
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px solid pink',
          color: state.isSelected ? '#FAB6B6' : '#000',
          padding: 10,
          backgroundColor: '#FAF0F0',
          "&:hover":
          {
              backgroundColor: '#fff',
          }
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
          width: 300,
        }),
        // singleValue: (provided, state) => {
        //   const opacity = state.isDisabled ? 0.5 : 1;
        //   const transition = 'opacity 300ms';
      
        //   return { ...provided, opacity, transition };
        // }
      }

    const roleoptions = [
        { value: 'Committee Member', label: 'Committee Member' },
        { value: 'Resident', label: 'Resident' },
        { value: 'Security Agency', label: 'Security Agency' },
        { value: 'Builder', label: 'Builder' },
        { value: 'Others', label: 'Others' },
    ]

    function inputChange(e) {
        if (e.target.value !== "") {
            e.target.classList.add('text');
        }
        else {
            e.target.classList.remove('text');
        }
    }
    const [logoImage, changeLogo] = useState(Images.urbancaveLogo);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            document.getElementById("navbar").classList.add("active");
            changeLogo(Images.UrbancaveLogoActive);
            // verticalBars.map((bar)=>{
            //     bar.style.backgroundColor='#fff';
            // });

        }
        else if (window.scrollY < 80) {
            document.getElementById("navbar").classList.remove("active");
            changeLogo(Images.urbancaveLogo);
            // verticalBars.map((bar) => {
            //     bar.style.backgroundColor = "#0C2938";
            // });
        }
    });

    return (
        <>
            <NavBar logo={logoImage} />
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
            <HomeStyle.Feature>
                <HomeStyle.HeadingContainer>
                    <HomeStyle.FeatureHeading>
                        <h1>Features</h1>
                    </HomeStyle.FeatureHeading>
                    <HomeStyle.FeatureDesc>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </HomeStyle.FeatureDesc>
                </HomeStyle.HeadingContainer>
                <HomeStyle.Container>
                    <HomeStyle.FeatureCont>
                        <Feature1
                            heading="Society Management"
                            info=" Ensure that every person, package or vehicle entering the community is authorised by a resident. Effective security measures can be convenient, too!"
                            image={Images.FeatureImg1}
                        />
                        <Feature1
                            heading="Report Generation"
                            info="Ensure that every person, package or vehicle entering the community is authorised by a resident. Effective security measures can be convenient, too!"
                            image={Images.DashAnalytics}
                        />
                    </HomeStyle.FeatureCont>
                    <HomeStyle.FeatureCont>
                        <Feature1
                            heading="Visitor Management"
                        info="Ensure that every person, package or vehicle entering the community is authorised by a resident. Effective security measures can be convenient, too!"
                            image={Images.People}
                        />
                        <Feature1
                            heading="All-In-One Tool"
                            info="Ensure that every person, package or vehicle entering the community is authorised by a resident. Effective security measures can be convenient, too!"
                            image={Images.Management}
                        />
                    </HomeStyle.FeatureCont>
                </HomeStyle.Container>
            </HomeStyle.Feature>

            <HomeStyle.LandingPageRegister>
                <HomeStyle.LandingPageImageCont>
                    <HomeStyle.LandingPageRegisterImage
                        src={Images.register}
                    />
                </HomeStyle.LandingPageImageCont>
                <HomeStyle.LandingPageFeatureInfo2>
                    <h1>
                        Switch To A Digital Environment
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe voluptas, harum distinctio omnis placeat illo
                        sapiente. Distinctio illo delectus ab dolor? Expedita
                        quos explicabo maxime, doloribus magni sapiente officia
                        porro?
                    </p>
                    <HomeStyle.LandingPageRegisterButtonContainer>
                    <HomeStyle.ButtonLink href='/register'><HomeStyle.LandingPageRegisterButton>Register Society</HomeStyle.LandingPageRegisterButton></HomeStyle.ButtonLink>
                    </HomeStyle.LandingPageRegisterButtonContainer>
                </HomeStyle.LandingPageFeatureInfo2>
            </HomeStyle.LandingPageRegister>
            <HomeStyle.LandingPageTestimonials>
                <h1>Testimonials</h1>
                    <HomeStyle.SliderCont>
                    <Slider {...settings} >
                        {/* <Carousel.Item interval={3000} className="item1"> */}
                        <div>
                            <Testimonial image={Images.Testimonial_Image1} name="Harry Styles" text="Urbancave best of class must for any society! Awesome Tools" society="Araksh Appartments"></Testimonial>
                        {/* </Carousel.Item> */}
                        </div>
                        <div>
                        {/* <Carousel.Item interval={3000} className='item1'> */}
                            <Testimonial name="Megha Thakkar" text="Urbancave best of class must for any society! Awesome Tools" society="Rhea Appartments" image={Images.Testimonial_Image2}></Testimonial>
                        {/* </Carousel.Item> */}
                        </div>
                        <div>
                        {/* <Carousel.Item interval={3000} className='item1'> */}
                            <Testimonial name="Nadini Seth" text="Urbancave best of class must for any society! Awesome Tools" society="Swati Appartments" image={Images.Testimonial_Image3}></Testimonial>
                        {/* </Carousel.Item> */}
                        </div>
                        <div>
                        {/* <Carousel.Item interval={3000} className='item1'> */}
                            <Testimonial name="Vetika Thakor" text="Urbancave best of class must for any society! Awesome Tools" society="Goyal Appartments" image={Images.Testimonial_Image2}></Testimonial>
                        {/* </Carousel.Item> */}
                        </div>
                    </Slider>
                    </HomeStyle.SliderCont>
            </HomeStyle.LandingPageTestimonials>
            <HomeStyle.ContactForm>
                <HomeStyle.FormContainer>
                <HomeStyle.ContactHeading>Get In Touch With Us!</HomeStyle.ContactHeading>
                <HomeStyle.Wrapper>
                    <HomeStyle.ContactFormGroup>
                        <HomeStyle.InputField type="text" onChange={inputChange}/>
                        <HomeStyle.FocusText data-placeholder="Name"/>
                    </HomeStyle.ContactFormGroup>
                    <SelectGroup style={{width: "47%"}} onChange={inputChange}>
                        <TextSpan style={{color: "#3e444e"}}>Your Role</TextSpan>
                        <Select options={roleoptions}></Select>
                    </SelectGroup>
                    <HomeStyle.ContactFormGroup>
                        <HomeStyle.InputField type="email" onChange={inputChange}/>
                        <HomeStyle.FocusText data-placeholder='Email'/>
                    </HomeStyle.ContactFormGroup>
                    <HomeStyle.ContactFormGroup>
                        <HomeStyle.InputField type="tel" onChange={inputChange}/>
                        <HomeStyle.FocusText data-placeholder='Phone Number (+91)'/>
                    </HomeStyle.ContactFormGroup>
                    <HomeStyle.ContactFormGroup>
                        <HomeStyle.InputField type="text" onChange={inputChange}/>
                        <HomeStyle.FocusText data-placeholder='Locality / Area'/>
                    </HomeStyle.ContactFormGroup>
                    <HomeStyle.ContactFormSubmit>
                        <HomeStyle.ContactButton>Submit</HomeStyle.ContactButton>
                    </HomeStyle.ContactFormSubmit>
                </HomeStyle.Wrapper>
                </HomeStyle.FormContainer>
            </HomeStyle.ContactForm>
            <HomeStyle.LandingPageFooter>
                <HomeStyle.LandingPageFooterCont>
                    <footer>
                        <p style={{color: "#FAB6B6", fontWeight: "700"}}><HomeStyle.LandingPageFooterInfoHighlight>© All rights reserved.</HomeStyle.LandingPageFooterInfoHighlight> Made by Urbancave</p>
                    </footer>
                </HomeStyle.LandingPageFooterCont>
            </HomeStyle.LandingPageFooter>
        </>
    );
}

//Components

//Navbar
const NavBar = (props) => {
    return (
        <HomeStyle.LandingPageNavbar id="navbar">
            <HomeStyle.Logo src={props.logo} />
            <nav>
                <HomeStyle.NavbarList>
                    <HomeStyle.NavbarItem>Home</HomeStyle.NavbarItem>
                    <HomeStyle.NavbarItem>About Us</HomeStyle.NavbarItem>
                    <HomeStyle.NavbarItem>Services</HomeStyle.NavbarItem>
                    <HomeStyle.NavbarItem>Why Urbancave?</HomeStyle.NavbarItem>
                    <HomeStyle.NavbarItem>Contact Us</HomeStyle.NavbarItem>
                </HomeStyle.NavbarList>
            </nav>
            <HomeStyle.ButtonLink href='/login'><HomeStyle.Button>Login / Register</HomeStyle.Button></HomeStyle.ButtonLink>
        </HomeStyle.LandingPageNavbar>
    );
}


//Feature 1
const Feature1 = (props) => {
    return (
        <HomeStyle.LandingPageFeature>
            <div className='featureImage'>
                <HomeStyle.LandingPageFeatureImage src={props.image} />
            </div>
            <HomeStyle.LandingPageFeatureInfo>
                <h4>{props.heading}</h4>
                <p>{props.info}</p>
            </HomeStyle.LandingPageFeatureInfo>
        </HomeStyle.LandingPageFeature>
    );
};


//Testimonials
const Testimonial = (props) => {
    return(
        <HomeStyle.TestimonialInfoContainer>
            <HomeStyle.TestimonialImageContainer style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover'}}>
                {/* <HomeStyle.TestimonialImage src={props.image}/> */}
            </HomeStyle.TestimonialImageContainer>
            <HomeStyle.TestimonialInfo>
                <HomeStyle.TestimonialHeading>{props.name}</HomeStyle.TestimonialHeading>
                <HomeStyle.TestimonialPara>{props.text}</HomeStyle.TestimonialPara>
                <HomeStyle.SocietyName>
                    <h6>~{props.society}</h6>
                </HomeStyle.SocietyName>
            </HomeStyle.TestimonialInfo>
        </HomeStyle.TestimonialInfoContainer>
    )
}

export default Home;