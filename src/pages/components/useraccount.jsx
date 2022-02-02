import ContentHeader from "./contentheader";
import '../../styles/useraccount.css';
import Images from "../../images";



const UserAccount=(props)=>{
    return(
        <>
        <ContentHeader text="Account Info"/>
        <div className="accountPageContainer">
            <div className="accountPageProfileContainer">
                <img src={Images.userIcon}/>
                <div className="accountPageProfilePhotoCaption">Profile Photo</div>
            </div>
        </div>
        <div className="accountPageInfoContainer">
        <div className="accountPageBasicInfoContainer">
            <div className="accountPageBasicInfoHeading">
                Basic Info
            </div>
            <div className="accountPageBasicInfoDescription">
            Some info may be visible to other people in the same society
            </div>
            <div className="accountPageBasicInfoFields">
                < TextInput caption="First Name: " data="Sidhraj" type="text"/>
                < TextInput caption="Last Name: " data="Mori" type="text"/>
                < TextInput caption="Date Of Birth: " data="Sidhraj" type="date"/>
            </div>
        </div>
        
        <div className="accountPageBasicInfoContainerRight">
                <div className="accountPageBasicInfoHeading">
                    Contact Info
                </div>
                <div className="accountPageBasicInfoDescription">
                    Some info may be visible to other people in the same society
                </div>
                <div className="accountPageContactInfoFields">
                    < TextInput caption="1) Phone Number: " data="910679097" type="phone"/>
                    < TextInput caption="2) Phone Number: " data="999525558" type="phone"/>
                </div>
            </div>

            <div className="accountPageBasicInfoContainer">
                <div className="accountPageBasicInfoHeading">
                    Credential Info
                </div>
                <div className="accountPageBasicInfoDescription">
                    Some info may be visible to other people in the same society
                </div>
                <div className="accountPageContactInfoFields">
                    < TextInput caption="Email: " data="sid@gmail.com" type="email"/>
                    < TextInput caption="Password: " data="passwordisweak" type="password"/>
                </div>
                </div>
        </div>
        
        <div className="accountPagechangeButton">
                <button className="paymentButtonActive">Save</button>
                <button className="paymentButton">Cancel</button>
        </div>
    </>
    );
}


const TextInput = (props) => {
    
    const handleControlls=()=>{
        switch(props.type){
            case "date": return(<input type="date" className="textInputDateField" defaultValue={props.data}/>);
            case "text": return(<input type="text" id="firstname" className="textInputField" defaultValue={props.data}/>);
            case "password": return(<input type="password" className="textInputField" defaultValue={props.data}/>);
            case "email":return(<input type="email" className="textInputEmailField" defaultValue={props.data}/>);
            case "phone":return(<input type="phone" className="textInputDateField" defaultValue={props.data}/>);
        }
    }

    return(
        <div className="textInputContainer">
            <div className="textInputFieldCaption">{props.caption}</div>            
            {handleControlls()}
        </div>
    );

}


export default UserAccount;