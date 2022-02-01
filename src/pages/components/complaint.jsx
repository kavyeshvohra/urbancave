// import Images from "../../images";
import '../../styles/complaints.css';

const Complaint=()=>{
    return (
        <div className="complaintTicketContent">
            <div className="complaintTicketHeading">Complaint 1</div>
            <div className="complaintTicketStatusContainer">
                {/* <img className="complaintTicketStatusImage" src={Images.compResolved} /> */}
                <div className="complaintTicketStatus">Resolved</div>
            </div>
            <div className="complaintTicketControls">
                <div className="complaintTicketControlsStatus">View More</div>
                {/* <img className="complaintTicketControlImage" src={Images.smallMore}/> */}
            </div>
        </div>
    );
}

export default Complaint;