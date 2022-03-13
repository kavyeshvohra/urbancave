import React, {useEffect, useState} from 'react'
import * as Cstyle from '../../styles/complaints'
import {BiPencil,BiHelpCircle} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import {Modal, Button, Col, Row} from 'react-bootstrap'
import {FaUserAlt} from 'react-icons/fa'
import {MdOutlineCancel} from 'react-icons/md'
import Select from 'react-select'
import { Detailsform,FocusHtml, FormGroup, TextSpan, ButtonWrapper,ButtonSubmit, Detailsformdate } from '../../styles/register-styles'


const FormStyle = {
    width: "100%"
}
const FormStyle1 = {
    width: "100%",
}
const FormStyle2 = {
    width: "100%",
    marginTop: "0.5em",
}
const options = [
    { value: "Society" ,label: "Society "},
    { value: "General", label: "General Query"},
    { value: "Payments", label: "Payments"},
    { value: "Technical Support", label: "Technical Support"},
    { value: "Violation Issues", label: "Abusive / Improper Content"}
]

const ComplaintsAndFeedback = () => {
    const [itemColor, setItemColor] = useState("All Tickets")
    const [society, setSocietyName] = useState("Siddhachal Flats")
    const [subColor, setSocietyColor] = useState(0)
    const [Popup, setPopup] = useState(false);

    const [counter, setCount] = useState(0)

    function MenuItem(e){
        setItemColor(e.target.textContent)
    }
    function SocietySelect(e){
        setSocietyName(e.target.textContent)
    }

    const handleKeyPress = (e) => {
        const count = e.target.value;
        
        const countWords = (count) => {
          if (count.length === 0) {
            return 0;
          }
        }
        
        setCount({});
    }

    return (
     <>
     <Cstyle.Wrapper>        
        <Cstyle.SocietyContainer>
            <Cstyle.SocietyHead>
                <h3>Societies</h3>
            </Cstyle.SocietyHead>
            <Cstyle.SocietyContent>
                <Cstyle.SocList>
                    <li onClick={SocietySelect} className={society=="Siddhachal Flats" && "active"}>Siddhachal Flats</li>
                    <li onClick={SocietySelect} className={society=="Ankur Appartments" && "active"}>Ankur Appartments</li>
                    <li onClick={SocietySelect} className={society=="Richmond Grand" && "active"}>Richmond Grand</li>
                </Cstyle.SocList>
            </Cstyle.SocietyContent>
        </Cstyle.SocietyContainer>
        <Cstyle.ComplaintContainer>
            <Cstyle.MenuWrapper>
                <Cstyle.MenuItems>
                    <li onClick={MenuItem}>
                        All Tickets
                    </li>
                    <li onClick={MenuItem}>
                        In Progress
                    </li>
                    <li onClick={MenuItem}>
                        Resolved
                    </li>
                    <li onClick={MenuItem}>
                        Feedbacks
                    </li>
                </Cstyle.MenuItems>
            </Cstyle.MenuWrapper>
            <Cstyle.ButtonContainer>
                <button className='newTicket' onClick={()=>{setPopup(true)}}><BiPencil/> NEW TICKET</button>
                <div>
                    <input type="search" placeholder='Search'/>
                    <button className='search-icon' type="submit"><AiOutlineSearch/></button>
                </div>
            </Cstyle.ButtonContainer>
                <div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div>
        </Cstyle.ComplaintContainer>

    </Cstyle.Wrapper>
    <Modal show={Popup} onHide={()=>{setPopup(false)}} centered>
    <Modal.Header closeButton>
        <Modal.Title>Raise A New Ticket</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div style={{textAlign: "right"}}>
            <span>User Name: <span style={{fontStyle: "italic", color: "#3e444e", fontWeight: "500"}}>Patel Manikbhai</span></span>
        </div>
        <form>
        <FormGroup style={FormStyle2}>
            <Detailsform type="text" id="title" name="complaint_title" onChange={inputChange}/>
            <FocusHtml data-placeholder="Title"/>
        </FormGroup>
        <FormGroup style={FormStyle1}>
            <Select options={options}/>
            <TextSpan style={{height: "auto"}}>Category</TextSpan>
        </FormGroup>
        <FormGroup style={FormStyle}>
            <Cstyle.ComplaintDesc id="description" name="complaint_desc" maxLength="255" rows="6" onInput={handleKeyPress} />
            <TextSpan style={{height: "auto"}}>Description</TextSpan>
            <span style={{float: "right"}}>{counter}/180</span>
        </FormGroup>
        <ButtonWrapper style={{marginBottom: "1em"}}>
            <ButtonSubmit name="submit" type="submit">Submit</ButtonSubmit>
        </ButtonWrapper>
        </form>
    </Modal.Body>
    </Modal>
    </>
  )
}
function inputChange(e) {
    if (e.target.value !== "") {
        e.target.classList.add('text');
    }
    else {
        e.target.classList.remove('text');
    }
}

const Card = (props) => {
    const [MoreView, setMoreView] = useState(false);
    return(
        <>
            <Cstyle.ComplaintHistoryContainer>
            <Cstyle.ComplaintInfo>
                <Cstyle.ComplaintHistoryHeader>
                    <BiHelpCircle/>
                    <h5>Ticket #2022-0111</h5>
                    <span style={{fontWeight: "300", fontSize: "18px"}}>11:30PM</span>
                    <button onClick={()=>{setMoreView(!MoreView)}}><BsThreeDots/></button>
                    {MoreView ? <MoreItems/> : null}
                </Cstyle.ComplaintHistoryHeader>
                <Cstyle.ComplaintInfoDetails>
                    <h2>How to change my password?</h2>
                    <p>I want to change my password? Where is the option?</p>
                </Cstyle.ComplaintInfoDetails>
                <Cstyle.ComplaintFooterInfo>
                    <FaUserAlt/>
                    <h6 style={{flex: "1"}}>Kavyesh Vohra</h6>
                    <h6>Category: <span style={{fontStyle: "italic", color: '#707a8a', textDecoration: "underline", textDecorationColor: "#fab0b0", cursor: "pointer"}}>Technical Support</span></h6>
                </Cstyle.ComplaintFooterInfo>
            </Cstyle.ComplaintInfo>
            </Cstyle.ComplaintHistoryContainer>
        </>
    )
}


const MoreItems = () => {
    const [DeleteModal, setDeleteModal] = useState(false);
    const [ViewModal, setViewModal] = useState(false);
    return(
        <>
            <Cstyle.MoreItemsContainer>
                <ul>
                    <li onClick={()=>{setViewModal(true)}}>View</li>
                    <li onClick={()=>{setDeleteModal(true)}}>Delete</li>
                </ul>
            </Cstyle.MoreItemsContainer>

            <Modal show={ViewModal} onHide={()=>{setViewModal(false)}} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Complaint Details</Modal.Title>
                </Modal.Header>
                <Modal.Body closeButton >
                    <Cstyle.DetailWrapper>
                    <Row>
                    <Col xs={12} md={4}>
                        <span>ID</span>
                        <Detailsform type="text" value="cf10001fg" disabled/>
                    </Col>
                    <Col xs={12} md={8}>
                        <span>Title</span>
                        <Detailsform type="text" value="How to change my password?" disabled/>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={12} md={4}>
                        <span>Category</span>
                        <Detailsform type="text" value="Technical Support" disabled/>
                    </Col>
                    <Col xs={12} md={3}>
                        <span>Date</span>
                        <Detailsformdate type="date" disabled value="2022-01-22"/>
                    </Col>
                    <Col xs={12} md={5}>
                        <span>User (<span style={{fontStyle: "italic"}}>Society Member</span>)</span>
                        <Detailsform type="text" value="Kavyesh Vohra" disabled/>
                    </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                        <span>Description</span>
                        <Cstyle.ComplaintDesc disabled rows="6" maxLength="255" value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,"/>
                        </Col>
                    </Row>
                    </Cstyle.DetailWrapper>
                </Modal.Body>
            </Modal>

            <Modal show={DeleteModal} onHide={()=>{setDeleteModal(false)}} centered>
                <Modal.Header closeButton style={{borderBottom: "none"}}>
                    {/* <Modal.Title>Delete Complaint</Modal.Title> */}
                </Modal.Header>
                <Modal.Body closeButton style={{paddingTop: "unset"}}>
                    <Cstyle.DeleteCont>
                        <MdOutlineCancel style={{fontSize: "8em", color: "red"}}/>
                        <h2>Are you sure?</h2>
                        <p>Do you really want to delete this record? This process cannot be undone.</p>
                        <Button variant='outline-danger'>Delete</Button>
                    </Cstyle.DeleteCont>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ComplaintsAndFeedback
// import Complaint from "./complaint";
// // import '../../styles/complaints.css';
// import CreateComplaintModal from "./Modals/createComplaintModal";
// import { useState } from "react";
// import ComplaintInfoModal from "./Modals/complaintInfoModal";

// const ComplaintsAndFeedback=(props)=>{
//     const [ compRegister , setCompRegister ] = useState(0);

//     const [ displayInfo , setDisplayInfo ] = useState(0);
//     const [ complaintData,setComplaintData] = useState();
//     const [ action,setAction ] = useState();
//     //dummy complaint des
//     const des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
//     return (

//        <>
//             { displayInfo ?( <ComplaintInfoModal action={action} data={complaintData} closeModal={setDisplayInfo}/> ):(<></>) }
//             { compRegister == 1 ? (<CreateComplaintModal changeCompRegister={setCompRegister}/>) : (<></>)}
            
//             {/* <div className="contentMatter">
//                 <div className="complaintSubjectContainer">
//                     <select className="complaintSubject">
//                         <option value="">--Complaint subject--</option>
//                         <option value="">Maintenance Payment</option>
//                         <option value="">Donations</option>
//                         <option value="">Platform</option>
//                         <option value="">Society Member</option>
//                         <option value="">Society Admin</option>
//                         <option value="">None of the above</option>
//                     </select>
//                 </div>
//                 <div className="complaintInfo">
//                     <div className="complaintInfoHeading">
//                         Complaint discription
//                     </div>
//                     <textarea
//                         className="complaintInfoDetails"
//                         placeholder="Type here..."
//                     ></textarea>
//                 </div>
//                 <div>
//                     <button className="complaintRegisterButton">
//                         Register Complaint
//                     </button>
//                 </div>
//             </div> */}
//             <div className="complaintHistoryContainer">
//                 <div className="complaintHistoryHeaderContainer">
//                     <div className="galleryCaption">Complaints and Feedback</div>
//                     <div className="complaintControls">
//                     {
//                         props.userType!="Admin"?(<button className="galleryButtonControls" Style={"height:3em;"} onClick={()=>setCompRegister(1)}>
//                             Register Complaint
//                         </button>):(<></>)
//                     }
//                         <select className="complaintHistoryCategory">
//                             <option>All</option>
//                             <option>Resolved</option>
//                             <option>Processing</option>
//                             <option>Deleted</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="complaintTicketContainer">
//                     <Complaint
//                         caption="complaint 1"
//                         status="Resolved"
//                         user="sidhraj"
//                         date="01/01/2022"
//                         category="Platform"
//                         id="cf0102u1001"
//                         discription={des}
//                         modal={setDisplayInfo}
//                         changeNoticeData={setComplaintData}
//                         changeAction={setAction}
//                         userType={props.userType}
//                     />
//                     <Complaint 
//                         caption="complaint 2"
//                         status="Pending"
//                         user="sidhraj"
//                         date="01/01/2022"
//                         category="Platform"
//                         id="cf0102u1001" 
//                         discription={des}
//                         modal={setDisplayInfo}
//                         changeNoticeData={setComplaintData}
//                         changeAction={setAction}
//                         userType={props.userType}
//                     />
//                     <Complaint 
//                         caption="complaint 3"
//                         status="Pending"
//                         user="sidhraj"
//                         date="01/01/2022"
//                         category="Platform"
//                         id="cf0102u1001"
//                         discription={des}
//                         modal={setDisplayInfo}
//                         changeNoticeData={setComplaintData}
//                         changeAction={setAction}
//                         userType={props.userType}
//                     />
//                     <Complaint 
//                         caption="complaint 4"
//                         status="Resolved"
//                         user="sidhraj"
//                         date="01/01/2022"
//                         category="Platform"
//                         id="cf0102u1001"
//                         discription={des}
//                         modal={setDisplayInfo}
//                         changeNoticeData={setComplaintData}
//                         changeAction={setAction}
//                         userType={props.userType}
//                     />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ComplaintsAndFeedback;