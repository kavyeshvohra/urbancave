import * as FStyle from '../../styles/file-folder-style'
import { Heading } from '../../styles/societies';
import Folder from './folder';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CreateGalleryModal from './Modals/createGalleryModal';

const Gallery=(props)=>{
    useEffect(()=>{
        window.scroll(0,0)
    })
    //const {pathname} = useLocation();
    //const lastName=pathname.split("/")[ pathname.split("/").length-1 ];
    const params = useParams();
    console.log(params);
    const [folders,setFolders] = useState(["Diwali","Holi","Christmas","Uttrayan","Navratri","Halloween"]);
    const [ galleryModal , setGalleryModal ] =  useState(0);
    return(
        <>
            { galleryModal ? ( <CreateGalleryModal changeGallery={ setGalleryModal } folders={folders} changeFolders={setFolders} /> ) : (<></>) }
            <div className="galleryHeader">
                <Heading style={{marginTop : "1em"}}>{params.society}</Heading>
                <div className="galleryButtons">
                    {
                        props.userType!="Admin"?
                        (<button onClick={()=>setGalleryModal(1)} className="galleryButtonControls">Create New Gallery</button>):
                        (<></>)
                    }
                </div>
            </div>
            <FStyle.FolderCont>
                {/* <Folder folderName="Diwali" type="folder" />
                <Folder folderName="Holi" type="folder"/>
                <Folder folderName="Christmas" type="folder"/>
                <Folder folderName="Utryan" type="folder"/>
                <Folder folderName="Navratri" type="folder"/>
                <Folder folderName="Halloween" type="folder"/> */}
                {
                    folders.map((folder)=>{
                        return( <Folder folderName={folder} type="folder"  />)
                    })
                }
            </FStyle.FolderCont>
        </>
    );
}

export default Gallery;