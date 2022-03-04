import '../../styles/fileAndFolder.css';
import {BsFolderFill} from 'react-icons/bs'
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
import * as SStyle from '../../styles/societies'
import { useEffect } from 'react';

const Folder = (props)=>{
    // const [iconState,setIconState] = useState(Image.folderIcon);
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

    // useEffect(()=>{
    //     switch(props.type){
    //         case 'folder':setIconState(Images.folderIcon) ;break;
    //         case 'society':setIconState(Images.societyIcon) ;break;
    //     }
    // });

    return(
        <>
        {/* // <div className="folder" onClick={test} >
        //     <img src={iconState} className="folderIcon"/>
        //     <div className="folderName">
        //         {props.folderName.split(" ")[0]}
        //     </div>
        // </div> */}
            <SStyle.Society onClick={test}>
                <SStyle.SocietyCont>
                    {props.type =="society" ? <SStyle.Image src={props.image}/> : <BsFolderFill style={{fontSize: '40px',marginTop: '20px'}} />}
                    <SStyle.Content>
                        <h3>{props.folderName}</h3>
                        {props.type == "society" ? <p>{props.area}</p> : null}
                    </SStyle.Content>
                </SStyle.SocietyCont>
            </SStyle.Society>
    </>
    );
}


export default Folder;