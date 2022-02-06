import CreateVisitorCode from '../components/createVisitorCode';
import { useState } from 'react';
import {AiFillEye,FaTrash,MdModeEditOutline} from 'react-icons/all';

const Visitors = () => {

    const [ visitorModal , setVisitorModal ] =  useState(0); 

    return (
        <>
             { visitorModal ? ( <CreateVisitorCode changeGallery={ setVisitorModal }/> ) : (<></>) }
            <div className="galleryButtons">
            <div className="galleryCaption">Visitors</div>
                <button className="galleryButtonControls" onClick={()=>setVisitorModal(1)}>Add new Visitor</button>
            </div>
            <div className="noticeContainer">
            <table className="noticeTable">
                <tr>
                    <td>SrNo</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Phone Number</td>
                    <td>Entry Time</td>
                    <td>Exit Time</td>
                    <td>Action</td>
                </tr>
                <Row 
                    sr="1"
                    fname="Sidhraj"
                    lname="Mori"
                    phone="9876543210"
                    enTime="01:10 AM"
                    exTime="01:10 PM"
                />
            </table>
            <div>
                <div>showing 1 out of 10 entries</div>
            </div>
        </div>
        </>
        );
}

const Row=(props)=>{
    const [hover,setHover] = useState(0);
    return(
        <>
            <tr className="notHeading">
                <td>
                    <div>{props.sr}</div>
                </td>
                <td>
                    <div className="visitorText">{props.fname}</div>
                </td>
                <td>
                    <div className="visitorText">{props.lname}</div>
                </td>
                <td>
                    <div className="visitorText">{props.phone}</div>
                </td>
                <td>
                    <div className="visitorText">{props.enTime}</div>
                </td>
                <td>
                    <div className="visitorText">{props.exTime}</div>
                </td>
                <td>
                    <div className="noticeActions">
                        <AiFillEye size="2em" color={hover=="eye"?"#FEB6B6":"#707A8A"}
                            onMouseOver={()=>setHover("eye")}
                            onMouseLeave={()=>setHover(0)}
                        />
                        <MdModeEditOutline size="2em" color={hover=="edit"?"#FEB6B6":"#707A8A"}
                            onMouseOver={()=>setHover("edit")}
                            onMouseLeave={()=>setHover(0)}
                        />
                        <FaTrash size="1.6em" color={hover=="bin"?"#FEB6B6":"#707A8A"}
                            onMouseOver={()=>setHover("bin")}
                            onMouseLeave={()=>setHover(0)}
                        />
                    </div>
                </td>
            </tr>
        </>
    );
}

export default Visitors;
