import CreateVisitorCode from '../components/createVisitorCode';
import DisplayInfoModal from '../components/displayInfoModal';
import { useState } from 'react';
import {AiFillEye,FaTrash,MdModeEditOutline} from 'react-icons/all';

const Visitors = (props) => {

    const [ visitorModal , setVisitorModal ] =  useState(0); 
    const [ displayInfo , setDisplayInfo ] = useState(1);

    return (
        <>
            { visitorModal ? ( <CreateVisitorCode changeGallery={ setVisitorModal }/> ) : (<></>) }
            { displayInfo ?( <DisplayInfoModal closeModal={setDisplayInfo}/> ):(<></>) }
            <div className="galleryButtons">
            <div className="galleryCaption">Visitors</div>
                {
                    props.userType!="Admin"?
                    (<button className="galleryButtonControls" onClick={()=>setVisitorModal(1)}>Add new Visitor</button>):(<></>)
                }
            </div>
            <div className="noticeContainer">
            <table className="noticeTable">
                <tr>
                    <td>SrNo</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    {
                        props.userType=="Admin"?(<>
                            <td>Society</td>
                            <td>House</td>
                        </>):(<></>)
                    }
                    {
                        props.userType=="SocietyAdmin"?(<>
                            <td>House</td>
                        </>):(<></>)
                    }
                    <td>Phone Number</td>
                    <td>Entry Time</td>
                    <td>Exit Time</td>
                    <td>Action</td>
                </tr>
                <Row 
                    sr="1"
                    society="soc ABC"
                    userType={props.userType}
                    fname="Sidhraj"
                    lname="Mori"
                    phone="9876543210"
                    house="B-7"
                    enTime="01:10 AM"
                    exTime="01:10 PM"
                />
                <Row 
                    sr="1"
                    society="soc ABC"
                    userType={props.userType}
                    fname="Sidhraj"
                    lname="Mori"
                    house="B-7"
                    phone="9876543210"
                    enTime="01:10 AM"
                    exTime="01:10 PM"
                />
                <Row 
                    sr="1"
                    house="B-7"
                    society="soc ABC"
                    userType={props.userType}
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
                {
                    props.userType=="Admin"?
                    (<>
                        <td>
                            <div className="visitorText">{props.society}</div>
                        </td>
                        <td>
                            <div className="visitorText">{props.house}</div>
                        </td>
                    </>):(<></>)
                }
                {
                    props.userType=="SocietyAdmin"?
                    (<>
                        <td>
                            <div className="visitorText">{props.house}</div>
                        </td>
                    </>):(<></>)
                }
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
                        {
                            props.userType=="Admin"?(<FaTrash size="1.6em" color={hover=="bin"?"#FEB6B6":"#707A8A"}
                                onMouseOver={()=>setHover("bin")}
                                onMouseLeave={()=>setHover(0)}
                            />):(<></>)
                        }
                    </div>
                </td>
            </tr>
        </>
    );
}

export default Visitors;
