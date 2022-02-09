import '../../styles/displayInfoModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const TenantInfoModal=(props)=>{
    console.log(props.data);
    return(<>
        <div className="dimScreen">
            <div className="displayInfoContent">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Tenant Information</div>
                    <AiOutlineCloseCircle onClick={()=>props.closeModal()} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="visitorInfoContainer">
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <div className="displayInfoLable">First Name:</div>
                            <input className="displayInfoInput" value={props.data.fname} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <div className="displayInfoLable">Last Name:</div>
                            <input className="displayInfoInput" value={props.data.lname} readOnly/>
                        </div>
                    </div>
                    <div className="visitorDataContainer">
                        <div className="displayInfoLable">Email:</div>
                        <input className="displayInfoInput1" value={props.data.email} readOnly/>
                    </div>
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <div className="displayInfoLable">Society:</div>
                            <input className="displayInfoInput" value={props.data.society} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <div className="displayInfoLable">House:</div>
                            <input className="displayInfoInput" value={props.data.house} readOnly/>
                        </div>
                    </div>
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <div className="displayInfoLable">Phone:</div>
                            <input className="displayInfoInput" value={props.data.phone} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <div className="displayInfoLable">Rent:</div>
                            <input className="displayInfoInput" value={props.data.rent} readOnly/>
                        </div>
                    </div>
                    <div className="dataContainer2">
                        <div className="visitorDataContainer">
                            <div className="displayInfoLable">POI:</div>
                            <button className="galleryButtonControls">Download</button>
                        </div>
                        <div className="visitorDataContainer">
                            <div className="displayInfoLable">Documents:</div>
                                <button className="galleryButtonControls">Download</button>
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

export default TenantInfoModal;