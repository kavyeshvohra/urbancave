import '../../styles/fileAndFolder.css';
import '../../styles/gallery';
import File from '../components/file';
import { useParams } from 'react-router-dom';

const Event = (props)=>{
    const {event} = useParams();
    console.log(event);
    return(
        <>
            <div className="galleryHeader">
                <div className="galleryCaption">{event}</div>
                <div className="galleryButtons">
                    <button className="galleryButtonControls">Add new photo</button>
                    <button className="galleryButtonControls">Download selected photo</button>
                    <button className="galleryButtonControls">Delete selected photo</button>
                </div>
            </div>
            <div className="fileFolderContainer">
                <File />
                <File />
                <File />
                <File />
                <File />
            </div>
        </>
    );
}

export default Event;