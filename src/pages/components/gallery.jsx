import '../../styles/fileAndFolder.css';
import '../../styles/gallery.css';
import Folder from './folder';
import File from './file';

const Gallery=(props)=>{
    return(
        <>
            <div className="galleryHeader">
                <div className="galleryCaption">Gallery</div>
                <div className="galleryButtons">
                    <button className="galleryButtonControls">Create New Gallery</button>
                </div>
            </div>
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