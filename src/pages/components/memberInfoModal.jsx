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
                            <input className="displayInfoInput" defaultValue={props.data.fname} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Last Name:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.lname} readOnly/>
                        </div>
                    </div>

                    <div className='dataContainer1'>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Email:</lable>
                            <input className="displayInfoInput1" defaultValue={props.data.email} readOnly/>
                        </div>
                        
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Is rented:</lable>
                            <input className="displayInfoInput0" defaultValue={props.data.isrented} readOnly/>
                        </div>
                    </div>

                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Phone:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.phone} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Phone (Alternate):</lable>
                            <input className="displayInfoInput" defaultValue={props.data.PhoneA} readOnly/>
                        </div>
                    </div>

                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Date of Birth:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.dob} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">userType</lable>
                            <input className="displayInfoInput" defaultValue={props.data.type} readOnly/>
                        </div>
                    </div>

                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">House Name:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.housename} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">House Type:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.housetype} readOnly/>
                        </div>
                    </div>
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Society:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.society} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Is Deleted:</lable>
                            <input className="displayInfoInput0" defaultValue={props.data.isdeleted} readOnly/>
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