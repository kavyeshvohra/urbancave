import '../../styles/createGalleryModal.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const CreateGalleryModal = (props)=>{

    const errStyle={
        width:'100%',
        marginTop:"-0.5em",
        color:"red",
        alignText:"center",
    }

    const validateGalleryName=()=>{
        const galleryName=document.getElementById("galleryname").value;
        document.getElementById("errorDiv").innerHTML ="";
        if(galleryName.trim().length < 3){
            document.getElementById("errorDiv").innerHTML = "<div>Please enter valid gallery name!</div>";
        }
        else{
            const folders = props.folders;
            folders.push(galleryName);
            props.changeFolders(folders);
            props.changeGallery(0);
        }
    }

    return(
        <div className="dimScreen">
            <div className="CreateGalleryModalContainer">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Create Gallery</div>
                    <AiOutlineCloseCircle onClick={()=>props.changeGallery(0)}  size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="CreateGalleryModalBody">
                    <div className="CreateGalleryModalLabel">Gallery Name</div>
                    <input className="CreateGalleryModalInput" id="galleryname"/>
                    <div style={errStyle} id="errorDiv">
                    </div>
                    <button className="CreateGalleryModalButton" onClick={()=>validateGalleryName()}>Create</button>
                </div>
            </div>
        </div>
    );
}

export default CreateGalleryModal;