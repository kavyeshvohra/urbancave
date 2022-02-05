import Images from "../../images";
import '../../styles/visitorModal.css';

const CreateVisitorCode=(props)=>{

    return(
        
        <div className="dimScreen">
        <div className="CreateGalleryModalContainer">
            <div className="CreateGalleryModalHeader">
                <div className="CreateGalleryModalCaption">Add new  visitor</div>
                <img onClick={()=>props.changeGallery(0) }src={Images.closeIcon} className="CreateGalleryModalImg"/>
            </div>
            <div className="CreateGalleryModalBody">
                <input className="CreateGalleryModalInput"/>
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