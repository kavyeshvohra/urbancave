import Images from "../../images";
import '../../styles/createNoticeModal.css';
import '../../styles/createGalleryModal.css';
import {AiOutlineFile,AiOutlineCloseCircle} from 'react-icons/all';

const CreateNoticeModal=(props)=>{
    return(
        <div className="dimScreen">
            <div className="createNoticeModalContainer">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Create Notice</div>
                    <AiOutlineCloseCircle onClick={()=>props.changeCreateNotice(0)} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="CreateGalleryModalBody">
                    <div className="CreateGalleryModalLabel">Notice Caption</div>
                    <input className="createNoticeModalInput"></input>
                    <div className="CreateGalleryModalLabel">Notice Description</div>
                    <textarea className="createNoticeModalInput1"/>
                </div>
                <div className="createNoticeModalFileContainer">
                    <div className="CreateGalleryModalLabel">Upload Pdf</div>
                    <div className="createNoticeModalFile">
                        <AiOutlineFile size="2.2em" color="#FEB6B6"/>
                        <div className="createNoticeUploadText">
                            Darg and drop your pdf here
                            or click on ‘Browse’.
                        </div>
                    </div>
                </div>
                <div className="createNoticeModalButtons">
                    <button className="createNoticeModalPost">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CreateNoticeModal;