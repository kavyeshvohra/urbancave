import Complaint from "./complaint";
import ContentHeader from "./contentheader";
import '../../styles/complaints.css';

const ComplaintsAndFeedback=()=>{
    return (
       <>
            <ContentHeader
                text="Complaints and Feedback"
            />
            <div className="contentMatter">
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
            </div>

            <hr width="95%" size="2" border="none" color="#BBE5FA" />
            <div className="complaintHistoryContainer">
                <div className="complaintHistoryHeaderContainer">
                    <div className="complaintHistoryHeader">
                        Complaint History
                    </div>
                    <select className="complaintHistoryCategory">
                        <option>All</option>
                        <option>Resolved</option>
                        <option>Processing</option>
                        <option>Deleted</option>
                    </select>
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