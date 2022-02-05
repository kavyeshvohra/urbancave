import '../../styles/fileAndFolder.css';
import '../../styles/gallery.css';
import Folder from './folder';
import { useState } from 'react';
import CreateGalleryModal from './createGalleryModal';

const Gallery=(props)=>{
    const [ galleryModal , setGalleryModal ] =  useState(0); 
    return(
        <>
            { galleryModal ? ( <CreateGalleryModal changeGallery={ setGalleryModal }/> ) : (<></>) }
            <div className="galleryHeader">
                <div className="galleryCaption">Gallery</div>
                <div className="galleryButtons">
                    <button onClick={()=>setGalleryModal(1)} className="galleryButtonControls">Create New Gallery</button>
                </div>
            </div>
            <div className="fileFolderContainer">
                <Folder folderName="members" type="folder" />
                <Folder folderName="payments" type="folder"/>
                <Folder folderName="Complaints and Feedbacks" type="folder"/>
                <Folder folderName="Notices" type="folder"/>
                <Folder folderName="Gallery" type="folder"/>
                <Folder folderName="Visitors" type="folder"/>
                <Folder folderName="Tanents" type="folder"/>
            </div>
        </>
    );
}

export default Gallery;