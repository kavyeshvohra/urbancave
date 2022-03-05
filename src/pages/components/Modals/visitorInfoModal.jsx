import '../../../styles/displayInfoModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const VisitorInfoModal=(props)=>{
    console.log(props.data);
    return(<>
        <div className="dimScreen">
            <div className="displayInfoContent">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Visitor Information</div>
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
                    <div className="visitorDataContainer">
                        <lable className="displayInfoLable">Phone:</lable>
                        <input className="displayInfoInput1" value={props.data.phone} readOnly/>
                    </div>
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Society:</lable>
                            <input className="displayInfoInput" value={props.data.society} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">House:</lable>
                            <input className="displayInfoInput" value={props.data.house} readOnly/>
                        </div>
                    </div>
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Entry Time:</lable>
                            <input className="displayInfoInput" value={props.data.entry} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Exit:</lable>
                            <input className="displayInfoInput" value={props.data.exit} readOnly/>
                        </div>
                    </div>
                    {
                        props.action=="show"?(<div className="visitorDataButtons">
                            <button className="galleryButtonControls">Save</button>
                            <button className="galleryButtonControls">Cancel</button>
                        </div>):(<></>)
                    }
                </div>
            </div>
        </div>
    </>);
}

export default VisitorInfoModal;