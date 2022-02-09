// import Images from "../../images";
import * as Complaints from '../../styles/complaints'

const Complaint=(props)=>{
    const data={
        caption:props.caption,
        status:props.status,
        user:props.user,
        date:props.date,
        description:props.discription,
        category:props.category,
        id:props.id,
        userType:props.userType,
    }
    return (
        <Complaints.ComplaintTicketContent
            onClick={()=>{props.changeAction("show");props.changeNoticeData(data);props.modal(1) }}
        >
            <Complaints.ComplaintTicketHeading>{props.caption}</Complaints.ComplaintTicketHeading>
            <Complaints.ComplaintTicketStatusContainer>
                {/* <img className="complaintTicketStatusImage" src={Images.compResolved} /> */}
                <Complaints.ComplaintTicketStatus>{props.status}</Complaints.ComplaintTicketStatus>
            </Complaints.ComplaintTicketStatusContainer>
            <Complaints.ComplaintTicketControls>
                <div>View More</div>
                {/* <img className="complaintTicketControlImage" src={Images.smallMore}/> */}
            </Complaints.ComplaintTicketControls>
        </Complaints.ComplaintTicketContent>
    );
}

export default Complaint;