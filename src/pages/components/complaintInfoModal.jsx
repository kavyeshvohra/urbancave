import '../../styles/displayInfoModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const ComplaintInfoModal=(props)=>{
    console.log(props.data);
    return(<>
        <div className="dimScreen">
            <div className="displayInfoContent">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Complaint</div>
                    <AiOutlineCloseCircle onClick={()=>props.closeModal()} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="visitorInfoContainer">
                    <div className="visitorDataContainer">
                        <lable className="displayInfoLable">ID:</lable>
                        <input className="displayInfoInput" defaultValue={props.data.id} readOnly/>
                    </div>
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Topic:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.caption} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Category:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.category} readOnly/>
                        </div>
                    </div>
                    <div className="visitorDataContainer">
                        <lable className="displayInfoLable">Description:</lable>
                        <textarea className="displayInfoInput2" defaultValue={props.data.description} readOnly/>
                    </div>
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">By:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.user} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Date:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.date} readOnly/>
                        </div>
                    </div>
                    <div className="dataContainer1">
                    {/* <div className="visitorDataContainer">
                        <div className="displayInfoLable">Notice PDF:</div>
                            <button className="galleryButtonControls">Download</button>
                        </div> */}
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

export default ComplaintInfoModal;