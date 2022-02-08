import '../../styles/fileAndFolder.css';
import Images from '../../images';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const Folder = (props)=>{
    const [iconState,setIconState] = useState(Image.folderIcon);
    const navigate = useNavigate();
    const {pathname} = useLocation();
    
    const test = ()=>{
        if(props.userName=="Admin" && pathname.split("/").length==3)
        {
            navigate(`/main/gallery/${props.folderName}`);
        }
        else if(pathname.split("/").length==4){
            navigate(`${pathname}/${props.folderName}`)
        }
        else{
            navigate(`${pathname}/${props.folderName}`)
        }
    }

    useEffect(()=>{
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