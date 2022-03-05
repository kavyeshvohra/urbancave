import Complaint from "./complaint";
// import '../../styles/complaints.css';
import CreateComplaintModal from "./Modals/createComplaintModal";
import { useState } from "react";
import ComplaintInfoModal from "./Modals/complaintInfoModal";

const ComplaintsAndFeedback=(props)=>{
    const [ compRegister , setCompRegister ] = useState(0);

    const [ displayInfo , setDisplayInfo ] = useState(0);
    const [ complaintData,setComplaintData] = useState();
    const [ action,setAction ] = useState();
    //dummy complaint des
    const des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
    return (

       <>
            { displayInfo ?( <ComplaintInfoModal action={action} data={complaintData} closeModal={setDisplayInfo}/> ):(<></>) }
            { compRegister == 1 ? (<CreateComplaintModal changeCompRegister={setCompRegister}/>) : (<></>)}
            
            {/* <div className="contentMatter">
                <div className="complaintSubjectContainer">
                    <select className="complaintSubject">
                        <option value="">--Complaint subject--</option>
                        <option value="">Maintenance Payment</option>
                        <option value="">Donations</option>
                        <option value="">Platform</option>
                        <option value="">Society Member</option>
                        <option value="">Society Admin</option>
                        <option value="">None of the above</option>
                    </select>
                </div>
                <div className="complaintInfo">
                    <div className="complaintInfoHeading">
                        Complaint discription
                    </div>
                    <textarea
                        className="complaintInfoDetails"
                        placeholder="Type here..."
                    ></textarea>
                </div>
                <div>
                    <button className="complaintRegisterButton">
                        Register Complaint
                    </button>
                </div>
            </div> */}
            <div className="complaintHistoryContainer">
                <div className="complaintHistoryHeaderContainer">
                    <div className="galleryCaption">Complaints and Feedback</div>
                    <div className="complaintControls">
                    {
                        props.userType!="Admin"?(<button className="galleryButtonControls" Style={"height:3em;"} onClick={()=>setCompRegister(1)}>
                            Register Complaint
                        </button>):(<></>)
                    }
                        <select className="complaintHistoryCategory">
                            <option>All</option>
                            <option>Resolved</option>
                            <option>Processing</option>
                            <option>Deleted</option>
                        </select>
                    </div>
                </div>
                <div className="complaintTicketContainer">
                    <Complaint
                        caption="complaint 1"
                        status="Resolved"
                        user="sidhraj"
                        date="01/01/2022"
                        category="Platform"
                        id="cf0102u1001"
                        discription={des}
                        modal={setDisplayInfo}
                        changeNoticeData={setComplaintData}
                        changeAction={setAction}
                        userType={props.userType}
                    />
                    <Complaint 
                        caption="complaint 2"
                        status="Pending"
                        user="sidhraj"
                        date="01/01/2022"
                        category="Platform"
                        id="cf0102u1001" 
                        discription={des}
                        modal={setDisplayInfo}
                        changeNoticeData={setComplaintData}
                        changeAction={setAction}
                        userType={props.userType}
                    />
                    <Complaint 
                        caption="complaint 3"
                        status="Pending"
                        user="sidhraj"
                        date="01/01/2022"
                        category="Platform"
                        id="cf0102u1001"
                        discription={des}
                        modal={setDisplayInfo}
                        changeNoticeData={setComplaintData}
                        changeAction={setAction}
                        userType={props.userType}
                    />
                    <Complaint 
                        caption="complaint 4"
                        status="Resolved"
                        user="sidhraj"
                        date="01/01/2022"
                        category="Platform"
                        id="cf0102u1001"
                        discription={des}
                        modal={setDisplayInfo}
                        changeNoticeData={setComplaintData}
                        changeAction={setAction}
                        userType={props.userType}
                    />
                </div>
            </div>
        </>
    );
}

export default ComplaintsAndFeedback;