import Images from '../../images';
import '../../styles/complaints.css';
import {AiOutlineCloseCircle} from 'react-icons/all';
import Select from 'react-select';
import {useState}  from 'react';

const CreateComplaintModal = (props)=>{
    
    const errStyle={
        width:'100%',
        marginTop:"-0.5em",
        color:"red",
        alignText:"center",
    }

    const options = [
        { value: 'Maintenance Payment', label: 'Society Admin' },
        { value: 'Donations', label: 'Donations' },
        { value: 'Platform', label: 'Platform' },
        { value: 'Society Member', label: 'Society Member' },
        { value: 'Society Admin', label: 'Society Admin' },
        { value: 'None of the above', label: 'None of the above' },
    ]

    const [complaintSub , setComplaintSub] = useState({});

    return(
        <div className="dimScreen">
            <div className="contentMatter">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Create Notice</div>
                    <AiOutlineCloseCircle onClick={props.changeCompRegister} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="complaintSubjectContainer">
                    {/* <select className="complaintSubject">
                        <option value="">--Complaint subject--</option>
                        <option value="">Maintenance Payment</option>
                        <option value="">Donations</option>
                        <option value="">Platform</option>
                        <option value="">Society Member</option>
                        <option value="">Society Admin</option>
                        <option value="">None of the above</option>
                    </select> */}
                    <Select 
                        options={options}
                        onChange={setComplaintSub}
                    />
                </div>
                <div className="complaintInfo">
                    <div className="complaintInfoHeading">
                        Complaint discription
                    </div>
                    <textarea
                        className="complaintInfoDetails"
                        placeholder="Type here..."
                    ></textarea>
                    <div style={errStyle} id="errorDiv">
                    </div>
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