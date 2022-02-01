import '../../styles/fileAndFolder.css';
import Images from '../../images';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const Folder = (props)=>{
    const [iconState,setIconState] = useState(Image.folderIcon);
    const navigate = useNavigate();
    
    const test = ()=>{navigate(`/main/gallery/${props.folderName}`);}


    useEffect(()=>{
        console.log(props.type);
        switch(props.type){
            case 'folder':setIconState(Images.folderIcon) ;break;
            case 'society':setIconState(Images.societyIcon) ;break;
        }
    });

    return(
        <div className="folder" onClick={test} >
            <img src={iconState} className="folderIcon"/>
            <div className="folderName">{props.folderName}</div>
        </div>
    );
}


export default Folder;