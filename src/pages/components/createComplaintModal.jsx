import Images from '../../images';
import '../../styles/complaints.css';
import {AiOutlineCloseCircle} from 'react-icons/all';

const CreateComplaintModal = (props)=>{

    return(
        <div className="dimScreen">
            <div className="contentMatter">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Create Notice</div>
                    <AiOutlineCloseCircle onClick={props.changeCompRegister} size="2.2em" color="#FEB6B6"/>
                </div>
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
        </div>
    );
}

export default CreateComplaintModal;