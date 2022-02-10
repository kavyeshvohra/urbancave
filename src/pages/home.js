//import '../styles/home.css';
import Images from '../images';
import * as HomeStyle from '../styles/home-style'
import React,{ useState } from 'react';
import Slider from 'react-slick'
import Select  from 'react-select'
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
const successStyle = {
    display: 'none',
    width: '100%',
    marginTop: "-9.5em",
    color: "green",
    marginLeft: "15em",
    alignText: "center",
}


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

    const [role,setRole] = useState();

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
    const errorField = {
        position: 'absolute',
    }
    const validateForm = () => {
        
        const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value
        const area = document.getElementById("area").value;
        const isNumber = /\d/;
        let count = 0

        document.getElementById('errorRole').style.display = 'none';
        document.getElementById('errorName').style.display = 'none';
        document.getElementById('errorPhone').style.display = 'none';
        document.getElementById('errorArea').style.display = 'none';
        document.getElementById('errorEmail').style.display = 'none';
        document.getElementById('successDiv').style.display = 'none';
            

        if(role == null){
            document.getElementById('errorRole').style.display = 'block';
            count+=1;
        }

        if(isNumber.test(name) || name.length < 2)
        {
            document.getElementById('errorName').style.display = 'block';
            count+=1;
        }
        if(email.length < 5){
            document.getElementById('errorEmail').style.display = 'block';
            count+=1;
        }
        if( !emailReg.test(email))
        {
            document.getElementById('errorEmail').style.display = 'block';
            count+=1;
        }
        if(!isNumber.test(phone) && phone.length !=10)
        {
            document.getElementById('errorPhone').style.display = 'block';
            count+=1;
        }
        if(area.length == 0)
        {
            document.getElementById('errorArea').style.display = 'block';
            count+=1;
        }
        if(count == 0)
        {
            document.getElementById('successDiv').style.display = 'block';
        }
    }

    return (
        <>
            <NavBar logo={logoImage} />
            <HomeStyle.LandingPageIntro>
                <HomeStyle.LandingPageIntroSlogan>
                    <h1>Easy way to manage your society. </h1>
                    <span>
                    Welcome to Urbancave an online society managemant system.
                    It is an unique platform which can be used by different societies to manage their work. 
                    This platform expands transparency and aims to strengthen the bond among member and managing committee.  
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
                        <p>Our Urbancave portal can accommodate all kinds of maintenance bill settings as may be required by different societies. It’s an automated accounting & billing portal which promotes digitization of complete books of account. It have visitor management system which have contain all records of visitor visiting the society. It also have a feature to generate reports.</p>
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
                    Is your society still using old method maintaing books and having difficulties to maintain visitor and calculating maintainence? 
                    Here is the solution of all your problems Urbancave which is a online society managing system which will store all the data online 
                    so no need of maintaing books and it also have visitor management system so headache of visitors and it calculates maintainence and 
                    people can pay it from here only so not going door to door to collect it.
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
                            <Testimonial name="Megha Thakkar" text="Urbancave is the best website for managing any society!" society="Rhea Appartments" image={Images.Testimonial_Image2}></Testimonial>
                        {/* </Carousel.Item> */}
                        </div>
                        <div>
                        {/* <Carousel.Item interval={3000} className='item1'> */}
                            <Testimonial name="Nadini Seth" text="Urbancave is easy to use and looks so simple and stylish" society="Swati Appartments" image={Images.Testimonial_Image3}></Testimonial>
                        {/* </Carousel.Item> */}
                        </div>
                        <div>
                        {/* <Carousel.Item interval={3000} className='item1'> */}
                            <Testimonial name="Vetika Thakor" text="Urbancave reminds me to pay my maintaince bill on time it is the best!!" society="Goyal Appartments" image={Images.Testimonial_Image2}></Testimonial>
                        {/* </Carousel.Item> */}
                        </div>
                    </Slider>
                    </HomeStyle.SliderCont>
            </HomeStyle.LandingPageTestimonials>
            <HomeStyle.ContactForm>
                <HomeStyle.FormContainer>
                <HomeStyle.ContactHeading>Get In Touch With Us!</HomeStyle.ContactHeading>
                <HomeStyle.Wrapper>
                    <HomeStyle.ContactFormGroup id="field_1">
                        <HomeStyle.InputField required id="name" type="text" onChange={inputChange}/>
                        <HomeStyle.FocusText data-placeholder="Name"/>
                    </HomeStyle.ContactFormGroup>
                    <div id="errorName" style={{position: 'absolute',display: 'none',color: 'red',left:'23px',transform: 'translateY(230%)'}}> Invalid Name! </div>
                    <SelectGroup style={{width: "47%"}} onChange={inputChange}id="field_2">
                        
                        <TextSpan style={{color: "#3e444e"}}>Your Role</TextSpan>
                        <Select 
                            options={roleoptions} 
                            aria-errormessage = "Please select one of the option"
                            onChange={setRole} 
                            required
                        >
                        </Select>
                        <div id="errorRole" style={{position: 'absolute',display: 'none',color: 'red',left:'23px',transform: 'translateX(-15%)'}}> Please select a role! </div>
                        
                    </SelectGroup>
                    <HomeStyle.ContactFormGroup id="field_3">
                        <HomeStyle.InputField required id="email" type="email" onChange={inputChange}/>
                        <HomeStyle.FocusText data-placeholder='Email'/>
                    </HomeStyle.ContactFormGroup>
                    <div id="errorEmail" style={{position: 'absolute',display: 'none',color: 'red',top:'85px',left:'23px',transform: 'translateY(75px)'}}> Invalid Email! </div>
                    <HomeStyle.ContactFormGroup id="field_4">
                        <HomeStyle.InputField required id="phone" type="tel" onChange={inputChange}/>
                        <HomeStyle.FocusText data-placeholder='Phone Number (+91)'/>
                    </HomeStyle.ContactFormGroup>
                    <div id="errorPhone" style={{position: 'absolute',display: 'none',color: 'red',left:'402px',transform: 'translateY(163px)'}}> Invalid Phone! </div>
                    <HomeStyle.ContactFormGroup id="field_5">
                        <HomeStyle.InputField id="area" type="text" onChange={inputChange}/>
                        <HomeStyle.FocusText data-placeholder='Locality / Area'/>
                    </HomeStyle.ContactFormGroup>
                    <div id="errorArea" style={{position: 'absolute',display: 'none',color: 'red',top:'263px',transform: 'translateX(-145%)'}}> Invalid Area! </div>
                    <HomeStyle.ContactFormSubmit>
                        <HomeStyle.ContactButton onClick={validateForm}>Submit</HomeStyle.ContactButton>
                    </HomeStyle.ContactFormSubmit>
                    <div style={successStyle} id="successDiv">Thanks! We will get back to you shortly.</div>
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
            {/* <nav>
                <HomeStyle.NavbarList>
                    <HomeStyle.NavbarItem>Home</HomeStyle.NavbarItem>
                    <HomeStyle.NavbarItem>About Us</HomeStyle.NavbarItem>
                    <HomeStyle.NavbarItem>Services</HomeStyle.NavbarItem>
                    <HomeStyle.NavbarItem>Why Urbancave?</HomeStyle.NavbarItem>
                    <HomeStyle.NavbarItem>Contact Us</HomeStyle.NavbarItem>
                </HomeStyle.NavbarList>
            </nav> */}
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