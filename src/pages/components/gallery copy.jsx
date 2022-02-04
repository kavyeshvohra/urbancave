import '../../styles/fileAndFolder.css';
import * as GalleryStyle from '../../styles/gallery'
import Folder from './folder';
import File from './file';
import { useState } from 'react';
import CreateGalleryModal from './createGalleryModal';

const Gallery=(props)=>{
    const [ galleryModal , setGalleryModal ] =  useState(0); 
    return(
        <>
            { galleryModal ? ( <CreateGalleryModal changeGallery={ setGalleryModal }/> ) : (<></>) }
            <GalleryStyle.GalleryHeader>
                <GalleryStyle.GalleryCaption>Gallery</GalleryStyle.GalleryCaption>
                <GalleryStyle.GalleryButtons>
                    <GalleryStyle.GalleryButtonControls onClick={()=>setGalleryModal(1)}>Create New Gallery</GalleryStyle.GalleryButtonControls>
                </GalleryStyle.GalleryButtons>
            </GalleryStyle.GalleryHeader>
            <div className="fileFolderContainer">
                <Folder folderName="Diwali" type="folder" />
                <Folder folderName="Holi" type="folder"/>
                <Folder folderName="Christmas" type="folder"/>
                <Folder folderName="Utryan" type="folder"/>
                <Folder folderName="Navratri" type="folder"/>
                <Folder folderName="Halloween" type="folder"/>
            </div>
        </>
    );
}

export default Gallery;