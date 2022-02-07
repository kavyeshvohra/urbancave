import Images from "../../images";
import '../../styles/createNoticeModal.css';
import '../../styles/createGalleryModal.css';
import {AiOutlineFile,AiOutlineCloseCircle} from 'react-icons/all';

const CreateNoticeModal=(props)=>{

    const errStyle={
        width:'100%',
        marginTop:"-0.5em",
        color:"red",
        alignText:"center",
    }

    const validateNotice = ()=>{
        const caption = document.getElementById("noticeCaption").value;
        const desc = document.getElementById("noticeDesc").value;
        const noticePdf = document.getElementById("noticePDF").files[0];
        console.log(noticePdf);
    }

    return(
        <div className="dimScreen">
            <div className="createNoticeModalContainer">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Create Notice</div>
                    <AiOutlineCloseCircle onClick={()=>props.changeCreateNotice(0)} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="CreateGalleryModalBody">
                    <div className="CreateGalleryModalLabel">Notice Caption</div>
                    <input className="createNoticeModalInput" id="noticeCaption" ></input>
                    <div className="CreateGalleryModalLabel">Notice Description</div>
                    <textarea className="createNoticeModalInput1" id="noticeDesc"/>
                </div>
                <div className="createNoticeModalFileContainer">
                    <div className="CreateGalleryModalLabel">Upload Pdf</div>
                    <div className="createNoticeModalFile">
                        <AiOutlineFile size="2.2em" color="#FEB6B6"/>
                        <input type="file" className="createNoticeUploadText" text="Darg and drop your pdf here
                            or click on ‘Browse’."/>
                            
                    </div>
                </div>
                <div style={errStyle} id="errorDiv">
                </div>
                <div className="createNoticeModalButtons">
                    <button className="createNoticeModalPost" onClick={()=>validateNotice()} >Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CreateNoticeModal;