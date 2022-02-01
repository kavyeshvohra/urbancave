import '../styles/contact.css';
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
        <div className="contactBody">
            <div className="contactContainer">
                <div className="contactHeading">Contact Us</div>
                <div className="contactForm">
                    <input className="contactFormName" placeholder="Name" />
                    <input className="contactFormEmail" placeholder="Email" />
                    <textarea className="contactFormMessage" placeholder="Message" />
                </div>
                <button className="contactButton" >Send Message</button>
            </div>
            <div className="verticalHr"></div>
            <div className="contactExtraContainer">
                <div className="contactExtraModal">
                    <div className="contactExtraModalDetails">
                        <div className="contactExtraModalHeading">
                            Lorem Epsum
                        </div>
                        <div className="contactExtraModalText">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                        <button className="contactExtraModalButton">
                            Register Here
                        </button>
                    </div>
                    <img
                        src={Images.house2}
                        className="contactExtraModalImage"
                    ></img>
                </div>
                <div className="ContactExtraText">
                    URBANCAVE.... <br/>
                    Cheesy slogan One more Cheesy slogan
                </div>
            </div>
        </div>
    );
}

export default Contact;