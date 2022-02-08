import { useState } from 'react';
import {AiFillEye,FaTrash,MdModeEditOutline} from 'react-icons/all';

const Payments = (props) => {

    return (
        <>
            <div className="galleryButtons">
            <div className="galleryCaption">Maintenance Transactions</div>
                {
                    props.userType=="SocietyAdmin"?(<button className="galleryButtonControls" onClick="">Pay Maintenance</button>):(<></>)
                }
            </div>
            <div className="noticeContainer">
            <table className="noticeTable">
                <tr>
                    <td>SrNo</td>
                    <td>User</td>
                    {props.userType=="Admin"?(<td>Society</td>):(<></>)}
                    <td>Transaction ID</td>
                    <td>Amount</td>
                    <td>Time</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM"
                    status="success"
                    userType={props.userType}
                /> 
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM"
                    status="success"
                    userType={props.userType}
                />
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM"
                    status="success"
                    userType={props.userType}
                />
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM"
                    status="success"
                    userType={props.userType}
                />
            </table>
            <div>
                <div>showing 1 out of 10 entries</div>
            </div>
        </div>
        <div className="galleryButtons">
            <div className="galleryCaption">Donations</div>
                {
                    props.userType=="SocietyAdmin"?(<button className="galleryButtonControls" onClick="">Donate</button>):(<></>)
                }
            </div>
            <div className="noticeContainer">
            <table className="noticeTable">
                <tr>
                <td>SrNo</td>
                    <td>User</td>
                    {props.userType=="Admin"?(<td>Society</td>):(<></>)}
                    <td>Transaction ID</td>
                    <td>Amount</td>
                    <td>Time</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM"
                    status="success"
                    userType={props.userType}
                />
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM"
                    status="success"
                    userType={props.userType}
                />
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM"
                    status="success"
                    userType={props.userType}
                />
                <Row 
                    sr="1"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM"
                    status="success"
                    userType={props.userType}
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
                    <div className="visitorText">{props.user}</div>
                </td>
                {
                    props.userType=="Admin"?(<td>
                        <div className="visitorText">{props.society}</div>
                    </td>):(<></>)
                }
                <td>
                    <div className="visitorText">{props.tID}</div>
                </td>
                <td>
                    <div className="visitorText">{props.amount}</div>
                </td>
                <td>
                    <div className="visitorText">{props.time}</div>
                </td>
                <td>
                    <div className="visitorText">{props.status}</div>
                </td>
                <td>
                    <div className="noticeActions">
                        <AiFillEye size="2em" color={hover=="eye"?"#FEB6B6":"#707A8A"}
                            onMouseOver={()=>setHover("eye")}
                            onMouseLeave={()=>setHover(0)}
                        />
                        {
                            props.userType=="SocietyAdmin"?(<><MdModeEditOutline size="2em" color={hover=="edit"?"#FEB6B6":"#707A8A"}
                                onMouseOver={()=>setHover("edit")}
                                onMouseLeave={()=>setHover(0)}
                            />
                            <FaTrash size="1.6em" color={hover=="bin"?"#FEB6B6":"#707A8A"}
                                onMouseOver={()=>setHover("bin")}
                                onMouseLeave={()=>setHover(0)}
                            /></>):(<></>)
                        }
                    </div>
                </td>
            </tr>
        </>
    );
}

export default Payments;
