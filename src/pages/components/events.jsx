import '../../styles/fileAndFolder.css';
import '../../styles/gallery';
import File from '../components/file';
import { useParams,useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';

const Event = (props)=>{
    const {event} = useParams();
    const { pathname } = useLocation();

    const [fileTypes,setFileTypes] = useState(null);
    const [ext,setExt]=useState(null);

    const errStyle = {
        width: '100%',
        marginTop: "-0.5em",
        color: "red",
        alignText: "center",
    }

    const sStyle = {
        display:"flex",
        flexDirection:"column",
        rowGap:"0.5em",
    }

    useEffect(()=>{
        if( fileTypes == null){
            const type= pathname.split("/")[2];
            switch(type){
                case "gallery":
                    setFileTypes("jpg");
                    setExt(/(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i);
                    break;
            }
        }
    });

    const validateFile = ()=>{
        let error="";
        const file=document.getElementById("uploadFile").files[0];
        if( !ext.exec(file.name) ){
            error+="<div>Please upload file with valid extention!</div>";
        }
        document.getElementById("errorDiv").innerHTML=error;
    }

    return(
        <>
            <div className="galleryHeader">
                <div className="galleryCaption">{event}</div>
                <div className="galleryButtons">
                    <div style={sStyle}>
                        <input type="file" className="galleryButtonControls" id="uploadFile" text="Add new photo" onChange={()=>validateFile()}/>
                        <div id="errorDiv" style={errStyle}></div>
                    </div>
                    <button className="galleryButtonControls">Download selected photo</button>
                    <button className="galleryButtonControls">Delete selected photo</button>
                </div>
            </div>
            <div className="fileFolderContainer">
                <File ext={fileTypes}/>
                <File ext={fileTypes}/>
                <File ext={fileTypes}/>
                <File ext={fileTypes}/>
                <File ext={fileTypes}/>
            </div>
        </>
    );
}

export default Event;