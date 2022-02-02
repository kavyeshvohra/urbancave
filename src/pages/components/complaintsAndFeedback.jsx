import Complaint from "./complaint";
import ContentHeader from "./contentheader";
// import '../../styles/complaints.css';
import * as Complaints from '../../styles/complaints'

const ComplaintsAndFeedback=()=>{
    return (
       <>
            <ContentHeader
                text="Complaints and Feedback"
            />
            <Complaints.ContentMatter>
                <div>
                    <Complaints.ComplaintSubject>
                        <option value="">--Complaint subject--</option>
                        <option value="">Maintenance Payment</option>
                        <option value="">Donations</option>
                        <option value="">Platform</option>
                        <option value="">Society Member</option>
                        <option value="">Society Admin</option>
                        <option value="">None of the above</option>
                    </Complaints.ComplaintSubject>
                </div>
                <Complaints.ComplaintInfo>
                    <Complaints.ComplaintInfoHeading>
                        Complaint discription
                    </Complaints.ComplaintInfoHeading>
                    <Complaints.ComplaintInfoDetails
                        placeholder="Type here..."
                    ></Complaints.ComplaintInfoDetails>
                </Complaints.ComplaintInfo>
                <div>
                    <Complaints.ComplaintRegisterButton>
                        Register Complaint
                    </Complaints.ComplaintRegisterButton>
                </div>
            </Complaints.ContentMatter>

            <hr width="95%" size="2" border="none" color="#BBE5FA" />
            <Complaints.ComplaintHistoryContainer>
                <Complaints.ComplaintHistoryHeaderContainer>
                    <Complaints.ComplaintHistoryHeader>
                        Complaint History
                    </Complaints.ComplaintHistoryHeader>
                    <Complaints.ComplaintHistoryCategory>
                        <option>All</option>
                        <option>Resolved</option>
                        <option>Processing</option>
                        <option>Deleted</option>
                    </Complaints.ComplaintHistoryCategory>
                </Complaints.ComplaintHistoryHeaderContainer>
                <Complaints.ComplaintTicketContainer>
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
                </Complaints.ComplaintTicketContainer>
            </Complaints.ComplaintHistoryContainer>
        </>
    );
}

export default ComplaintsAndFeedback;