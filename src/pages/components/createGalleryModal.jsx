import Images from '../../images';
import '../../styles/createGalleryModal.css';

const CreateGalleryModal = (props)=>{
    return(
        <div className="dimScreen">
            <div className="CreateGalleryModalContainer">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Create Gallery</div>
                    <img onClick={()=>props.changeGallery(0) }src={Images.closeIcon} className="CreateGalleryModalImg"/>
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