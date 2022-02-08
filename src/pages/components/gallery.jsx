import '../../styles/fileAndFolder.css';
import '../../styles/gallery.css';
import Folder from './folder';
import { useState } from 'react';
import CreateGalleryModal from './createGalleryModal';

const Gallery=(props)=>{
    const [folders,setFolders] = useState(["Diwali","Holi","Christmas","utryan","Navratri","Halloween"]);
    const [ galleryModal , setGalleryModal ] =  useState(0); 
    return(
        <>
            { galleryModal ? ( <CreateGalleryModal changeGallery={ setGalleryModal } folders={folders} changeFolders={setFolders} /> ) : (<></>) }
            <div className="galleryHeader">
                <div className="galleryCaption">Gallery</div>
                <div className="galleryButtons">
                    <button onClick={()=>setGalleryModal(1)} className="galleryButtonControls">Create New Gallery</button>
                </div>
            </div>
            <div className="fileFolderContainer">
                {/* <Folder folderName="Diwali" type="folder" />
                <Folder folderName="Holi" type="folder"/>
                <Folder folderName="Christmas" type="folder"/>
                <Folder folderName="Utryan" type="folder"/>
                <Folder folderName="Navratri" type="folder"/>
                <Folder folderName="Halloween" type="folder"/> */}
                {
                    folders.map((folder)=>{
                        return( <Folder folderName={folder} type="folder" addItem="photo" />)
                    })
                }
            </div>
        </>
    );
}

export default Gallery;