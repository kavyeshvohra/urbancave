import '../../styles/displayInfoModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const DisplayInfoModal=(props)=>{
    return(<>
        <div className="dimScreen">
            <div className="displayInfoContent">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Create Notice</div>
                    <AiOutlineCloseCircle onClick={()=>props.closeModal()} size="2.2em" color="#FEB6B6"/>
                </div>
            </div>
        </div>
    </>);
}

export default DisplayInfoModal;