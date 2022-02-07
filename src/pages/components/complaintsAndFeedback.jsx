import Complaint from "./complaint";
import '../../styles/complaints.css';
import CreateComplaintModal from "./createComplaintModal";
import { useState } from "react";

const ComplaintsAndFeedback=()=>{
    const [ compRegister , setCompRegister ] = useState(1);
    return (

       <>
            
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
                    <button className="galleryButtonControls" Style={"height:3em;"} onClick={()=>setCompRegister(1)}>Register Complaint</button>
                        <select className="complaintHistoryCategory">
                            <option>All</option>
                            <option>Resolved</option>
                            <option>Processing</option>
                            <option>Deleted</option>
                        </select>
                    </div>
                </div>
                <div className="complaintTicketContainer">
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint /><Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint /><Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                    <Complaint />
                </div>
            </div>
        </>
    );
}

export default ComplaintsAndFeedback;