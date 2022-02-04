// import Images from "../../images";
import * as Complaints from '../../styles/complaints'

const Complaint=()=>{
    return (
        <Complaints.ComplaintTicketContent>
            <Complaints.ComplaintTicketHeading>Complaint 1</Complaints.ComplaintTicketHeading>
            <Complaints.ComplaintTicketStatusContainer>
                {/* <img className="complaintTicketStatusImage" src={Images.compResolved} /> */}
                <Complaints.ComplaintTicketStatus>Resolved</Complaints.ComplaintTicketStatus>
            </Complaints.ComplaintTicketStatusContainer>
            <Complaints.ComplaintTicketControls>
                <div className>View More</div>
                {/* <img className="complaintTicketControlImage" src={Images.smallMore}/> */}
            </Complaints.ComplaintTicketControls>
        </Complaints.ComplaintTicketContent>
    );
}

export default Complaint;