import '../../styles/fileAndFolder.css';
import Images from '../../images';
import  {FaTrash,AiFillEye} from "react-icons/all";
import {useState} from 'react';

const File = (props)=>{
    
    const [hover,setHover] = useState(0);

    return(
        <div className="file">
            <img src={Images.fileIcon} className="fileIcon"/>
            <div className="fileName">Resume.{props.ext}</div>
            <div className="fileControls">
                <AiFillEye size="2em" color={hover=="eye"?"#FEB6B6":"#707A8A"}
                    onMouseOver={()=>setHover("eye")}
                    onMouseLeave={()=>setHover(0)}
                />
                <FaTrash size="1.6em" color={hover=="bin"?"#FEB6B6":"#707A8A"}
                    onMouseOver={()=>setHover("bin")}
                    onMouseLeave={()=>setHover(0)}
                />
            </div>
        </div>
    );
}

export default File;