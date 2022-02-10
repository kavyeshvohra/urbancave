import { useState } from 'react';
import {AiFillEye,FaTrash,MdModeEditOutline} from 'react-icons/all';
import PaymentInfoModal from './paymentInfoModal';

const Payments = (props) => {

    const [ displayInfo , setDisplayInfo ] = useState(0);
    const [ noticeData,setPaymentData] = useState();
    const [ action,setAction ] = useState();
    const [ type,setType ]=useState();

    return (
        <>
            { displayInfo ?( <PaymentInfoModal type={type} action={action} data={noticeData} closeModal={setDisplayInfo}/> ):(<></>) }
            <div className="galleryButtons">
            <div className="galleryCaption">Maintenance Transactions</div>
                {
                    props.userType!="Admin"?(<button className="galleryButtonControls" onClick={()=>console.log(0)}>Pay Maintenance</button>):(<></>)
                }
            </div>
            <div className="noticeContainer">
            <table className="noticeTable">
                <tr>
                    <td>SrNo</td>
                    {props.userType!="SocietyMember"?(<td>User</td>):(<></>)}
                    {props.userType=="Admin"?(<td>Society</td>):(<></>)}
                    <td>Transaction ID</td>
                    <td>Amount</td>
                    <td>Time</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
                <Row 
                    sr="1"
                    id="sdfhajshfkjxhuirah"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM 01/01/2022"
                    des="lorem lorem lorem lorem"
                    status="success"
                    latefee="500"
                    userType={props.userType}
                    
                    modal={setDisplayInfo}
                    changePaymentData={setPaymentData}
                    changeAction={setAction}
                    changeType={setType}
                    type="Maintenance"
                /> 
                <Row 
                     sr="1"
                     id="sdfhajshfkjxhuirah"
                     user="sidhraj Mori"
                     society="soc ABC"
                     tID="xhuirahbkvjkai2349sd"
                     amount="5000"
                     time="01:10 AM 01/01/2022"
                     des="lorem lorem lorem lorem"
                     status="success"
                     latefee="500"
                     userType={props.userType}
                    
                    modal={setDisplayInfo}
                    changePaymentData={setPaymentData}
                    changeAction={setAction}
                    changeType={setType}
                    type="Maintenance"
                />
                <Row 
                     sr="1"
                     id="sdfhajshfkjxhuirah"
                     user="sidhraj Mori"
                     society="soc ABC"
                     tID="xhuirahbkvjkai2349sd"
                     amount="5000"
                     time="01:10 AM 01/01/2022"
                     des="lorem lorem lorem lorem"
                     status="success"
                     latefee="500"
                     userType={props.userType}
                    
                    modal={setDisplayInfo}
                    changePaymentData={setPaymentData}
                    changeAction={setAction}
                    changeType={setType}
                    type="Maintenance"
                />
                <Row 
                     sr="1"
                     id="sdfhajshfkjxhuirah"
                     user="sidhraj Mori"
                     society="soc ABC"
                     tID="xhuirahbkvjkai2349sd"
                     amount="5000"
                     time="01:10 AM 01/01/2022"
                     des="lorem lorem lorem lorem"
                     status="success"
                     latefee="500"
                     userType={props.userType}
                    
                    modal={setDisplayInfo}
                    changePaymentData={setPaymentData}
                    changeAction={setAction}
                    changeType={setType}
                    type="Maintenance"
                />
            </table>
            <div>
                <div>showing 1 out of 10 entries</div>
            </div>
        </div>
        <div className="galleryButtons">
            <div className="galleryCaption">Donations</div>
                {
                    props.userType!="Admin"?(<button className="galleryButtonControls" onClick={()=>console.log(0)}>Donate</button>):(<></>)
                }
            </div>
            <div className="noticeContainer">
            <table className="noticeTable">
                <tr>
                <td>SrNo</td>
                    {props.userType!="SocietyMember"?(<td>User</td>):(<></>)}
                    {props.userType=="Admin"?(<td>Society</td>):(<></>)}
                    <td>Transaction ID</td>
                    <td>Amount</td>
                    <td>Time</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
                <Row 
                    sr="1"
                    id="sdfhajshfkjxhuirah"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM 01/01/2022"
                    des="lorem lorem lorem lorem"
                    status="success"
                    latefee="500"
                    userType={props.userType}
                    
                    modal={setDisplayInfo}
                    changePaymentData={setPaymentData}
                    changeAction={setAction}
                    changeType={setType}
                    type="Donation"
                />
                <Row 
                     sr="1"
                     id="sdfhajshfkjxhuirah"
                     user="sidhraj Mori"
                     society="soc ABC"
                     tID="xhuirahbkvjkai2349sd"
                     amount="5000"
                     time="01:10 AM 01/01/2022"
                     des="lorem lorem lorem lorem"
                     status="success"
                     latefee="500"
                     userType={props.userType}
                     
                    modal={setDisplayInfo}
                    changePaymentData={setPaymentData}
                    changeAction={setAction}
                    changeType={setType}
                    type="Donation"
                />
                <Row 
                    sr="1"
                    id="sdfhajshfkjxhuirah"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM 01/01/2022"
                    des="lorem lorem lorem lorem"
                    status="success"
                    latefee="500"
                    userType={props.userType}
                    
                    modal={setDisplayInfo}
                    changePaymentData={setPaymentData}
                    changeAction={setAction}
                    changeType={setType}
                    type="Donation"
                />
                <Row 
                    sr="1"
                    id="sdfhajshfkjxhuirah"
                    user="sidhraj Mori"
                    society="soc ABC"
                    tID="xhuirahbkvjkai2349sd"
                    amount="5000"
                    time="01:10 AM 01/01/2022"
                    des="lorem lorem lorem lorem"
                    status="success"
                    latefee="500"
                    userType={props.userType}
                    
                    modal={setDisplayInfo}
                    changePaymentData={setPaymentData}
                    changeAction={setAction}
                    changeType={setType}
                    type="Donation"
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
    const data={
        id:props.id,
        tID:props.tID,
        user:props.user,
        amount:props.amount,
        date:props.time,
        description:props.des,
        latefee:props.latefee,
        society:props.society,
        dueDate:"02:00 AM 01/01/2022",
    }
    return(
        <>
            <tr className="notHeading">
                <td>
                    <div>{props.sr}</div>
                </td>
                {
                    props.userType!="SocietyMember"?(<td>
                        <div className="visitorText">{props.user}</div>
                    </td>):(<></>)
                }
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
                            onClick={()=>{props.changeAction("show");props.changeType(props.type);props.changePaymentData(data);props.modal(1) }}
                        />
                        {/* {
                            props.userType=="SocietyAdmin"?(<><MdModeEditOutline size="2em" color={hover=="edit"?"#FEB6B6":"#707A8A"}
                                onMouseOver={()=>setHover("edit")}
                                onMouseLeave={()=>setHover(0)}
                            />
                            <FaTrash size="1.6em" color={hover=="bin"?"#FEB6B6":"#707A8A"}
                                onMouseOver={()=>setHover("bin")}
                                onMouseLeave={()=>setHover(0)}
                            /></>):(<></>)
                        } */}
                    </div>
                </td>
            </tr>
        </>
    );
}

export default Payments;
