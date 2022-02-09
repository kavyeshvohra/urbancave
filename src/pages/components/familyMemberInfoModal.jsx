import '../../styles/displayInfoModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const FamilyMemberInfoModal=(props)=>{
    console.log(props.data);
    return(<>
        <div className="dimScreen">
            <div className="displayInfoContent">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Family Member's Details</div>
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
                            <lable className="displayInfoLable">Gender:</lable>
                            <input className="displayInfoInput" value={props.data.gender} readOnly/>
                        </div>
                        
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Age:</lable>
                            <input className="displayInfoInput0" value={props.data.age} readOnly/>
                        </div>
                    </div>

                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Relation:</lable>
                            <input className="displayInfoInput" value={props.data.relation} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">User:</lable>
                            <input className="displayInfoInput" value={props.data.user} readOnly/>
                        </div>
                    </div>

                    {
                        props.userType=="Admin"?(<div className="dataContainer1">
                            <div className="visitorDataContainer">
                                <lable className="displayInfoLable">Society:</lable>
                                <input className="displayInfoInput" value={props.data.society} readOnly/>
                            </div>
                        </div>):(<></>)
                    }

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

export default FamilyMemberInfoModal;