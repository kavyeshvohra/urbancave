import ContentHeader from "./contentheader";
import '../../styles/useraccount.css';
import Images from "../../images";
import '../../styles/gallery.css';

import * as HomeStyle from '../../styles/home-style' ;
import * as RegisterStyle from '../../styles/register-styles' ;




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
        <ContentHeader text="Account Info"/>
        <div className="accountPageContainer">
            <div className="accountPageProfileContainer">
                <img src={Images.userIcon}/>
                <div Style={"display:flex;flexDirection:row;"}>
                    <button className="galleryButtonControls">Edit</button>
                </div>
            </div>
        </div>
        
        <div className="accountInfoContainer">
            {/* <div className="credContainer">
                <div className="inputContainer">
                    <div className="inputLabel">    Username:</div>
                    <input type="text" className="accountText"/>
                </div>
                <div className="inputContainer">
                    <div className="inputLabel">    Password:</div>
                    <input type="password" className="accountText"/>
                </div>    
            </div>
            
            <div className="credContainer">
                <div className="inputContainer">
                    <div className="inputLabel">    First Name:</div>
                    <input type="text" className="accountText"/>
                </div>
                <div className="inputContainer">
                    <div className="inputLabel">    Last Name:</div>
                    <input type="text" className="accountText"/>
                </div>
            </div>
            <div className="inputContainer">
                <div className="inputLabel">Date of Birth:</div>
                <input type="date" className="accountText"/>
            </div>
            <div className="credContainer">
                
                <div className="inputContainer">
                    <div className="inputLabel">    Phone number:</div>
                    <input type="text" className="accountText"/>
                </div>
                <div className="inputContainer">
                    <div className="inputLabel">    Phone number * :</div>
                    <input type="text" className="accountText"/>
                </div>
            </div> */}
            <div className="accountFormContainer">
                <HomeStyle.ContactFormGroup>
                    <HomeStyle.InputField type="email" onChange={inputChange} readOnly />
                    <HomeStyle.FocusText data-placeholder="Email"/>
                </HomeStyle.ContactFormGroup>
                <HomeStyle.ContactFormGroup>
                    <HomeStyle.InputField type="text" onChange={inputChange}/>
                    <HomeStyle.FocusText data-placeholder="Password"/>
                </HomeStyle.ContactFormGroup>
                <HomeStyle.ContactFormGroup>
                    <HomeStyle.InputField type="text" onChange={inputChange}/>
                    <HomeStyle.FocusText data-placeholder="First Name"/>
                </HomeStyle.ContactFormGroup>
                <HomeStyle.ContactFormGroup>
                    <HomeStyle.InputField type="text" onChange={inputChange}/>
                    <HomeStyle.FocusText data-placeholder="Last Name"/>
                </HomeStyle.ContactFormGroup>
                <HomeStyle.ContactFormGroup>
                    <HomeStyle.InputField type="date" placeholder="" onChange={inputChange}/>
                    <HomeStyle.FocusText data-placeholder="Date of Birth"/>
                </HomeStyle.ContactFormGroup>
                <HomeStyle.ContactFormGroup>
                    <HomeStyle.InputField type="text" onChange={inputChange}/>
                    <HomeStyle.FocusText data-placeholder="Phone Number (+91)"/>
                </HomeStyle.ContactFormGroup>
                <HomeStyle.ContactFormGroup>
                    <HomeStyle.InputField type="tel" onChange={inputChange}/>
                    <HomeStyle.FocusText data-placeholder='Alternate Phone Number (+91)'/>
                </HomeStyle.ContactFormGroup>
                <HomeStyle.ContactFormGroup>
                    <HomeStyle.InputField type="text" onChange={inputChange} readonly />
                    <HomeStyle.FocusText data-placeholder="Society Name"/>
                </HomeStyle.ContactFormGroup>
            </div>
        </div>

        <div className="accountPagechangeButton">
                <button className="galleryButtonControls">Save</button>
                <button className="galleryButtonControls">Cancel</button>
        </div>
    </>
    );
}



export default UserAccount;