import Images from "../../images";
import '../../styles/visitorModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';
import { useState } from "react";

const CreateVisitorCode=(props)=>{

    const [clicked,setClicked] = useState(true);

    const copyCode = ()=>{
        const code=document.getElementById("visitorCode").value;
        navigator.clipboard.writeText(code);
    }

    const generateVisitorCode=()=>{
        setClicked(false);
        const visitorCode = Math.floor(Math.random() * 10000000) ;
        document.getElementById("visitorCode").value = visitorCode;
    }

    return(
        
        <div className="dimScreen">
        <div className="CreateGalleryModalContainer">
            <div className="CreateGalleryModalHeader">
                <div className="CreateGalleryModalCaption">Add new  visitor</div>
                <AiOutlineCloseCircle onClick={()=>props.changeGallery(0)} size="2.2em" color="#FEB6B6" />
            </div>
            <div className="CreateGalleryModalBody">
                <input className="CreateGalleryModalInput" readOnly id="visitorCode"/>
                <div className="visitorControlContainer">
                    <button className="CreateGalleryModalButton"  disabled={!clicked} onClick={()=>generateVisitorCode()}>Generate New Code</button>
                    <button className="CreateGalleryModalButton" disabled={clicked} onClick={()=>copyCode()} >Copy</button>
                </div>
            </div>
        </div>
    </div>
    );

}

export default CreateVisitorCode;