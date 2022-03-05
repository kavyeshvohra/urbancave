import Images from "../../../images";
import '../../../styles/visitorModal.css';

const RegisterSocietyModal=(props)=>{

    return(
        
        <div className="dimScreen">
        <div className="CreateGalleryModalContainer">
            <div className="CreateGalleryModalHeader">
                <div className="CreateGalleryModalCaption">Register new Society Account</div>
                <img onClick={()=>props.changeGallery(0) }src={Images.closeIcon} className="CreateGalleryModalImg"/>
            </div>
            <div className="CreateGalleryModalBody">
                <input className="CreateGalleryModalInput"/>
                <div className="visitorControlContainer">
                    <button className="CreateGalleryModalButton">Regsiter Email</button>
                </div>
            </div>
        </div>
    </div>
    );

}

export default RegisterSocietyModal;