import ContentHeader from "./contentheader";
import '../../styles/useraccount.css';
import Images from "../../images";
import { Heading1 } from "../../styles/register-styles";
import {Heading, HeadingCont} from '../../styles/societies'
import { TestimonialImageContainer } from '../../styles/home-style'
import Profile from '../../Images/Photo.jpg'
import {ContactContainer} from '../../styles/contact-style'
import {UploadButton} from '../../styles/useraccount.js'

const UserAccount=(props)=>{
    function inputChange(e) {
        if (e.target.value !== "") {
            e.target.classList.add('text');
        }
        else {
            e.target.classList.remove('text');
        }
    }
    return(
        <>
            <HeadingCont>
                <Heading>User Account</Heading>
            </HeadingCont>
            <ContactContainer style={{marginTop: '2em'}}>
                <TestimonialImageContainer style={{backgroundImage: `url(${Profile})`, backgroundSize: 'cover',position: "relative"}}/>
                <UploadButton type="file" accept="image/jpg" id="profile-upload-lbl"></UploadButton>
                <label for="profile-upload-lbl">Change Picture</label>
            </ContactContainer>
        </>
    )
}

console.log(File)
export default UserAccount;