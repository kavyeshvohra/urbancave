import '../../styles/displayInfoModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const NoticeInfoModal=(props)=>{
    console.log(props.data);
    return(<>
        <div className="dimScreen">
            <div className="displayInfoContent">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Notice</div>
                    <AiOutlineCloseCircle onClick={()=>props.closeModal()} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="visitorInfoContainer">
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Topic:</lable>
                            <input className="displayInfoInput" value={props.data.caption} readOnly/>
                        </div>
                    </div>
                    <div className="visitorDataContainer">
                        <lable className="displayInfoLable">Discription:</lable>
                        <textarea className="displayInfoInput2" value={props.data.description} readOnly/>
                    </div>
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Posted By:</lable>
                            <input className="displayInfoInput" value={props.data.postedby} readOnly/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Date:</lable>
                            <input className="displayInfoInput" value={props.data.date} readOnly/>
                        </div>
                    </div>
                    <div className="dataContainer1">
                    <div className="visitorDataContainer">
                        <div className="displayInfoLable">Notice PDF:</div>
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

export default NoticeInfoModal;