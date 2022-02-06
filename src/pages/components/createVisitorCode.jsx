import Images from "../../images";
import '../../styles/visitorModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const CreateVisitorCode=(props)=>{

    return(
        
        <div className="dimScreen">
        <div className="CreateGalleryModalContainer">
            <div className="CreateGalleryModalHeader">
                <div className="CreateGalleryModalCaption">Add new  visitor</div>
                <AiOutlineCloseCircle onClick={()=>props.changeGallery(0)} size="2.2em" color="#FEB6B6" />
            </div>
            <div className="CreateGalleryModalBody">
                <input className="CreateGalleryModalInput" readOnly/>
                <div className="visitorControlContainer">
                    <button className="CreateGalleryModalButton">Generate New Code</button>
                    <button className="CreateGalleryModalButton">Copy</button>
                </div>
            </div>
        </div>
    </div>
    );

}

export default CreateVisitorCode;