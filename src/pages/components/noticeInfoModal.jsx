import '../../styles/displayInfoModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';
import { useState,useEffect } from 'react';

const NoticeInfoModal=(props)=>{
    console.log(props.data);
    
    useEffect(()=>{
        if (props.action=="show"){
            setReadOnly(true);
        }
        else{
            setReadOnly(false)
        }
    })

    const [readOnly,setReadOnly] = useState();


    return(<>
        <div className="dimScreen">
            <div className="displayInfoContent">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Notice</div>
                    <AiOutlineCloseCircle onClick={()=>props.closeModal(0)} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="visitorInfoContainer">
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Topic:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.caption} readOnly={readOnly}/>
                        </div>
                    </div>
                    <div className="visitorDataContainer">
                        <lable className="displayInfoLable">Discription:</lable>
                        <textarea className="displayInfoInput2" defaultValue={props.data.description} readOnly={readOnly}/>
                    </div>
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Posted By:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.postedby} readOnly={readOnly}/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Date:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.date} readOnly={readOnly}/>
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
                            <button className="galleryButtonControls" onClick={()=>props.closeModal(0)}>Cancel</button>
                        </div>):(<></>)
                    }
                </div>
            </div>
        </div>
    </>);
}

export default NoticeInfoModal;