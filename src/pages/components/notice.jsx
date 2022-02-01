import Images from '../../images';
import '../../styles/notice.css';
import useState from 'react';
import CreateNoticeModal from './createNoticeModal';

const Notice = ()=>{
    const [createNotice,setCreateNotice] = useState(0);
    return(
        <>
             {createNotice != 0 ? ( <CreateNoticeModal propr={setCreateNotice} /> ) : (<></>) }
            <div className="galleryButtons">
                
            <div className="galleryCaption">Notices</div>
                <button className="galleryButtonControls">Create New Notice</button>
            </div>
            <div className="noticeContainer">
            <table className="noticeTable">
                <tr>
                    <td className="noticeCol0">SrNo</td>
                    <td className="noticeCol1">Topic</td>
                    <td className="noticeCol2">Date</td>
                    <td className="noticeCol4">Posted By</td>
                    <td className="noticeCol3">Action</td>
                </tr>
                <Row 
                        sr="1"
                        caption="Health Notice" 
                        des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
                        postedby="sidhraj"
                        date="01/01/2001 01:00 PM"/>
                <Row 
                        sr="2"
                        caption="Health Notice" 
                        des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
                        postedby="sidhraj"
                        date="01/01/2001 01:00 PM"/>
                    <Row 
                        sr="3"
                        caption="Health Notice" 
                        des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
                        postedby="sidhraj"
                        date="01/01/2001 01:00 PM"/>
                    <Row 
                        sr="4"
                        caption="Health Notice" 
                        des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
                        postedby="sidhraj"
                        date="01/01/2001 01:00 PM"/>
                    <Row 
                        sr="5"
                        caption="Health Notice" 
                        des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
                        postedby="sidhraj"
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
                <td>
                    <div className="noticeDate">{props.date}</div>
                </td>
                <td>
                    <div className="postedBy">{props.postedby}</div>
                </td>
                <td>
                    <div className="noticeActions">
                        <img src={Images.showIcon}/>
                        <img src={Images.dustbinIcon}/>
                        <img src={Images.dustbinIcon}/>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default Notice;