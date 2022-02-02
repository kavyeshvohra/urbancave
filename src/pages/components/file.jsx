import '../../styles/fileAndFolder.css';
import Images from '../../images';

const File = ()=>{
    return(
        <div className="file">
            <img src={Images.fileIcon} className="fileIcon"/>
            <div className="fileName">Resume.pdf</div>
            <div className="fileControls">
                <img src={Images.showIcon}/>
                <img src={Images.dustbinIcon}/>
            </div>
        </div>
    );
}

export default File;