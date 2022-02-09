import '../../styles/notice.css';
import { useState } from 'react';
import CreateNoticeModal from './createNoticeModal';
import {AiFillEye,FaTrash,MdModeEditOutline} from 'react-icons/all';
import NoticeInfoModal from './noticeInfoModal';

const Notice = (props)=>{
    const [ createNotice , setCreateNotice ] = useState(0);

    const [ displayInfo , setDisplayInfo ] = useState(0);
    const [ noticeData,setNoticeData] = useState();
    const [ action,setAction ] = useState();
    return(
        <>
            { displayInfo ?( <NoticeInfoModal action={action} data={noticeData} closeModal={setDisplayInfo}/> ):(<></>) }
            {createNotice != 0 ? ( <CreateNoticeModal changeCreateNotice={setCreateNotice} /> ) : (<></>) }
            <div className="galleryButtons">
                
                <div className="galleryCaption">Notices</div>
                {
                    props.userType=="SocietyAdmin"?(<button className="galleryButtonControls" onClick={()=>setCreateNotice(1)}>
                        Create New Notice
                    </button>):(<></>)
                }
            </div>
            <div className="noticeContainer">
            <table className="noticeTable">
                <tr>
                    <td className="noticeCol0">SrNo</td>
                    <td className="noticeCol1">Topic</td>
                    {props.userType=="Admin"?(<td className="noticeCol4">Society</td>):(<></>)}
                    <td className="noticeCol2">Date</td>
                    <td className="noticeCol4">Posted By</td>
                    <td className="noticeCol3">Action</td>
                </tr>
                <Row 
                        sr="1"
                        caption="Health Notice" 
                        des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
                        postedby="sidhraj"
                        society="soc ABC"
                        userType={props.userType}
                        noticeDoc="none"
                        modal={setDisplayInfo}
                        changeNoticeData={setNoticeData}
                        changeAction={setAction}
                        date="01/01/2001 01:00 PM"/>
                <Row 
                        sr="2"
                        modal={setDisplayInfo}
                        changeNoticeData={setNoticeData}
                        changeAction={setAction}
                        caption="Health Notice" 
                        des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
                        postedby="sidhraj"
                        society="soc ABC"
                        noticeDoc="none"
                        userType={props.userType}
                        date="01/01/2001 01:00 PM"/>
                    <Row 
                        sr="3"
                        modal={setDisplayInfo}
                        changeNoticeData={setNoticeData}
                        changeAction={setAction}
                        noticeDoc="none"
                        caption="Health Notice" 
                        des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
                        postedby="sidhraj"
                        society="soc ABC"
                        userType={props.userType}
                        date="01/01/2001 01:00 PM"/>
                    <Row 
                        sr="4"
                        modal={setDisplayInfo}
                        changeNoticeData={setNoticeData}
                        changeAction={setAction}
                        noticeDoc="none"
                        caption="Health Notice" 
                        des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
                        postedby="sidhraj"
                        society="soc ABC"
                        userType={props.userType}
                        date="01/01/2001 01:00 PM"/>
                    <Row 
                        sr="5"
                        modal={setDisplayInfo}
                        changeNoticeData={setNoticeData}
                        changeAction={setAction}
                        noticeDoc="none"
                        caption="Health Notice" 
                        des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
                        postedby="sidhraj"
                        society="soc ABC"
                        userType={props.userType}
                        date="01/01/2001 01:00 PM"/>
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
    const data={
        caption:props.caption,
        description:props.des,
        society:props.society,
        date:props.date,
        postedby:props.postedby,
        noticeDoc:props.noitceDoc,
    }
    return(
        <>
            <tr className="notHeading">
                <td>
                    <div>{props.sr}</div>
                </td>
                <td>
                    <div className="noticeCaption">{props.caption}</div>
                    <div className="noticeDes">{props.des}</div>
                </td>
                {
                    props.userType=="Admin"?
                    (<td>
                        <div className="visitorText">{props.society}</div>
                    </td>):(<></>)
                }
                <td>
                    <div className="noticeDate">{props.date}</div>
                </td>
                <td>
                    <div className="postedBy">{props.postedby}</div>
                </td>
                <td>
                    <div className="noticeActions">
                        <AiFillEye size="2em" color={hover=="eye"?"#FEB6B6":"#707A8A"}
                            onMouseOver={()=>setHover("eye")}
                            onMouseLeave={()=>setHover(0)}
                            onClick={()=>{props.changeAction("show");props.changeNoticeData(data);props.modal(1) }}
                        />
                        {
                            props.userType!="SocietyMember"?(<>
                                <MdModeEditOutline size="2em" color={hover=="edit"?"#FEB6B6":"#707A8A"}
                                    onMouseOver={()=>setHover("edit")}
                                    onMouseLeave={()=>setHover(0)}
                                    onClick={()=>{props.changeAction("edit");props.changeNoticeData(data);props.modal(1) }}
                                />
                                <FaTrash size="1.6em" color={hover=="bin"?"#FEB6B6":"#707A8A"}
                                    onMouseOver={()=>setHover("bin")}
                                    onMouseLeave={()=>setHover(0)}
                                />
                            </>):(<></>)
                        }
                    </div>
                </td>
            </tr>
        </>
    );
}

export default Notice;