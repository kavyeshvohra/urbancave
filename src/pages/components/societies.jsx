import {useState} from 'react';
import '../../styles/fileAndFolder.css';
import '../../styles/gallery';
import Folder from './folder';


const Societies = () =>{
    const [societies,setSocieties] = useState(["soc A","soc B","soc C","soc D","soc E","soc F",]);
    return(
        <>
             <div className="galleryHeader">
                <div className="galleryCaption">Societies</div>
            </div>
            <div className="fileFolderContainer">
            {
                societies.map((soc)=>{
                        return( <Folder folderName={soc} type="society"  />)
                    })
            }
            </div>
        </>
    );
}

export default Societies;