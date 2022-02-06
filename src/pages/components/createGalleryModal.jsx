import '../../styles/createGalleryModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const CreateGalleryModal = (props)=>{
    return(
        <div className="dimScreen">
            <div className="CreateGalleryModalContainer">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Create Gallery</div>
                    <AiOutlineCloseCircle onClick={()=>props.changeGallery(0)}  size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="CreateGalleryModalBody">
                    <div className="CreateGalleryModalLabel">Gallery Name</div>
                    <input className="CreateGalleryModalInput"/>
                    <button className="CreateGalleryModalButton">Create New Gallery</button>
                </div>
            </div>
        </div>
    );
}

export default CreateGalleryModal;