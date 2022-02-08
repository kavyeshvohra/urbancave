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
        let error="";
        const caption = document.getElementById("noticeCaption").value;
        const desc = document.getElementById("noticeDesc").value;
        const noticePdf = document.getElementById("noticePDF").files[0];
        if ( noticePdf ){
            let ext=noticePdf.name.split(".");

            if(ext[ext.length-1] != "pdf"){
                error+="<div>Uploaded file is not pdf!</div>";
            }
        }
        if(caption.trim().length < 5){
            error+="<div>please enter caption of at least 5 character!</div>";
        }
        if(desc.trim().length < 20){
            error+="<div>please enter discription of at least 20 character!</div>";
        }

            document.getElementById("errorDiv").innerHTML=error;
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
                    <div className="CreateGalleryModalLabel">Upload Pdf (optional)</div>
                    <div className="createNoticeModalFile">
                        <AiOutlineFile size="2.2em" color="#FEB6B6"/>
                        <input type="file" className="createNoticeUploadText" id="noticePDF"text="Darg and drop your pdf here
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