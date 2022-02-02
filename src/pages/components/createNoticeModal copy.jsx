import Images from "../../images";
import '../../styles/createNoticeModal.css';
import '../../styles/createGalleryModal.css';

const CreateNoticeModal=(props)=>{
    return(
        <div className="dimScreen">
            <div className="createNoticeModalContainer">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Create Notice</div>
                    <img onClick={()=>props.changeCreateNotice(0)} src={Images.closeIcon} className="createNoticeModalImg"/>
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
                        <img src={Images.uploadIcon} className="createNoticeUploadIcon"/>
                        <div className="createNoticeUploadText">
                            Darg and drop your image/s here
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