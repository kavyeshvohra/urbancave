import '../../styles/fileAndFolder.css';
import '../../styles/gallery';
import Folder from './folder';


const Societies = () =>{
    return(
        <>
            <div className="galleryHeader">
                <div className="galleryCaption">Societies</div>
                <div className="galleryButtons">
                    <button className="galleryButtonControls">Register New Society</button>
                </div>
            </div>
            <div className="fileFolderContainer">
                <Folder folderName="Soc A" type="society" />
                <Folder folderName="Soc B" type="society"/>
                <Folder folderName="Soc C" type="society"/>
                <Folder folderName="Soc D" type="society"/>
                <Folder folderName="Soc E" type="society"/>
                <Folder folderName="Soc F" type="society"/>
            </div>
        </>
    );
}

export default Societies;