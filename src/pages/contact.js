import * as ContactStyle from '../styles/contact-style'
import Images from '../images';

const Contact=()=>{

    const apiCall= async () => {
        let response = await fetch("http://localhost:8080/UrbanCave/index");
        const data= await response.text();
        console.log(data);
    }

    const apiPostCall = async ()=>{
        let url="http://localhost:8080/UrbanCave/index";
        let options={
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify({
                userName:"sid",
                password:"123",
            }),
            data:"hello",
        }

        let response = await fetch(url,options);
        console.log(await response.text());
    }

    const testApi = (event)=>{

    }

    return (
        <ContactStyle.ContactBody>
            <ContactStyle.ContactContainer>
                <ContactStyle.ContactHeading>Contact Us</ContactStyle.ContactHeading>
                <ContactStyle.ContactForm>
                    <ContactStyle.ContactFormName placeholder="Name" />
                    <ContactStyle.ContactFormName placeholder="Email" />
                    <ContactStyle.ContactFormMessage placeholder="Message" />
                </ContactStyle.ContactForm>
                <ContactStyle.ContactButton>Send Message</ContactStyle.ContactButton>
            </ContactStyle.ContactContainer>
            <ContactStyle.VerticalHr></ContactStyle.VerticalHr>
            <ContactStyle.ContactExtraContainer>
                <ContactStyle.ContactExtraModal>
                    <ContactStyle.ContactExtraModalDetails>
                        <ContactStyle.ContactExtraModalHeading>
                            Lorem Epsum
                        </ContactStyle.ContactExtraModalHeading>
                        <ContactStyle.ContactExtraModalText>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </ContactStyle.ContactExtraModalText>
                        <ContactStyle.ContactExtraModalButton>
                            Register Here
                        </ContactStyle.ContactExtraModalButton>
                    </ContactStyle.ContactExtraModalDetails>
                    <ContactStyle.ContactExtraModalImage
                        src={Images.house2}
                    />
                </ContactStyle.ContactExtraModal>
                <ContactStyle.ContactExtraText>
                    URBANCAVE.... <br/>
                    Cheesy slogan One more Cheesy slogan
                </ContactStyle.ContactExtraText>
            </ContactStyle.ContactExtraContainer>
        </ContactStyle.ContactBody>
    );
}

export default Contact;