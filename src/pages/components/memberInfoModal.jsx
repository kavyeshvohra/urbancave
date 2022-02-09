import '../../styles/displayInfoModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const MemberInfoModal=(props)=>{
    console.log(props.data);
    return(<>
        <div className="dimScreen">
            <div className="displayInfoContent">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Society Member's Details</div>
                    <AiOutlineCloseCircle onClick={()=>props.closeModal()} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="visitorInfoContainer">
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">First Name:</lable>
                            <input className="displayInfoInput" value={props.data.fname} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Last Name:</lable>
                            <input className="displayInfoInput" value={props.data.lname} readOnly/>
                        </div>
                    </div>

                    <div className='dataContainer1'>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Email:</lable>
                            <input className="displayInfoInput1" value={props.data.email} readOnly/>
                        </div>
                        
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Is rented:</lable>
                            <input className="displayInfoInput0" value={props.data.isrented} readOnly/>
                        </div>
                    </div>

                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Phone:</lable>
                            <input className="displayInfoInput" value={props.data.phone} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Phone (Alternate):</lable>
                            <input className="displayInfoInput" value={props.data.PhoneA} readOnly/>
                        </div>
                    </div>

                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Date of Birth:</lable>
                            <input className="displayInfoInput" value={props.data.dob} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">userType</lable>
                            <input className="displayInfoInput" value={props.data.type} readOnly/>
                        </div>
                    </div>

                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">House Name:</lable>
                            <input className="displayInfoInput" value={props.data.housename} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">House Type:</lable>
                            <input className="displayInfoInput" value={props.data.housetype} readOnly/>
                        </div>
                    </div>
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Society:</lable>
                            <input className="displayInfoInput" value={props.data.society} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Is rented:</lable>
                            <input className="displayInfoInput0" value={props.data.isdeleted} readOnly/>
                        </div>
                    </div>

                    {
                        props.action!="show"?(<div className="visitorDataButtons">
                            <button className="galleryButtonControls">Save</button>
                            <button className="galleryButtonControls">Cancel</button>
                        </div>):(<></>)
                    }
                </div>
            </div>
        </div>
    </>);
}

export default MemberInfoModal;