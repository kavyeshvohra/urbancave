import React, {useEffect, useState} from 'react'
import * as Cstyle from '../../styles/complaints'
import {BiPencil,BiHelpCircle} from 'react-icons/bi'
import {AiOutlineSearch,AiOutlineInfoCircle} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import {Modal, Button, Col, Row} from 'react-bootstrap'
import {FaUserAlt} from 'react-icons/fa'
import {MdOutlineCancel} from 'react-icons/md'
import Select from 'react-select'
import { Detailsform,FocusHtml, FormGroup, TextSpan, ButtonWrapper,ButtonSubmit, Detailsformdate } from '../../styles/register-styles'
import { useCookies } from 'react-cookie'

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

const ComplaintsAndFeedback = (props) => {
    const [itemColor, setItemColor] = useState("All Tickets")
    const [society, setSocietyName] = useState("Siddhachal Flats")
    const [Popup, setPopup] = useState(false);

    const [socs,setSocieties] = useState();
    const [complaint,setComplaints] = useState();
    const [userCookie,setUserCookies] = useCookies();

    useEffect(async ()=>{
        if(socs == null){
            const data={"jwtToken":props.cookies.user,"id":null};
            const url="http://192.168.1.67:8080/getSocieties";
            const options={
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(data)
            }
            const response = await fetch(url,options);
            const res = await response.json();
            console.log(res);
            setSocieties(res);
            setSocietyName(res[0].society_name);
            
            //get complaints
            const complaintReqData = {"jwtToken":props.cookies.user,"cf_id":null};
            const noticeURL="http://192.168.1.67:8080/complaints";
            const noticeOptions={
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(complaintReqData)
            }
            const complaintResponse = await fetch(noticeURL,noticeOptions);
            const complaintRes = await complaintResponse.json();
            console.log(complaintRes);
            setComplaints(complaintRes);
        }
    },[socs]);

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

    if(socs != null){
        return (
        <>
        <Cstyle.Wrapper>        
            <Cstyle.SocietyContainer>
                <Cstyle.SocietyHead>
                    <h3>Societies</h3>
                </Cstyle.SocietyHead>
                <Cstyle.SocietyContent>
                    <Cstyle.SocList>
                    {socs.map((soc)=>{
                            return(
                                <li onClick={SocietySelect} className={ society==soc.society_name? "active":""}>{soc.society_name}</li>
                            );
                        })
                    }
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
                    {
                        complaint != null?
                        (
                        complaint.map( (comp)=>{
                            return(
                                <Card complaint={comp}/>
                            );
                        })):
                        (<h1>Loading...</h1>)
                    }
                    {/* <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> */}
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
            <TextSpan style={{height: "auto"}}>Category</TextSpan>
                <Select options={options}/>
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
    else{
        return(
            <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <center>
                <h1>Loading...</h1>
            </center>
            </>
        );
    }
}
function inputChange(e) {
    if (e.target.value !== "") {
        e.target.classList.add('text');
    }
    else {
        e.target.classList.remove('text');
    }
}

export const Card = (props) => {
    const [MoreView, setMoreView] = useState(false);
    return(
        <>
            <Cstyle.ComplaintHistoryContainer>
            <Cstyle.ComplaintInfo>
                <Cstyle.ComplaintHistoryHeader>
                    <BiHelpCircle/>
                    <h5>Ticket #2022-0111</h5>
                    <span style={{fontWeight: "300", fontSize: "18px"}}>
                        {props.complaint.date_of_creation}
                        </span>
                    <button onClick={()=>{setMoreView(!MoreView)}}><BsThreeDots/></button>
                    {MoreView ? <MoreItems complaint={props.complaint}/> : null}
                </Cstyle.ComplaintHistoryHeader>
                <Cstyle.ComplaintInfoDetails>
                    <h2>{props.complaint.topic}</h2>
                    <p>{props.complaint.description}</p>
                </Cstyle.ComplaintInfoDetails>
                <Cstyle.ComplaintFooterInfo>
                    <FaUserAlt/>
                    <h6 style={{flex: "1"}}>Kavyesh Vohra</h6>
                    <h6>Category: <span style={{fontStyle: "italic", color: '#707a8a', textDecoration: "underline", textDecorationColor: "#fab0b0", cursor: "pointer"}}>{props.complaint.category}</span></h6>
                </Cstyle.ComplaintFooterInfo>
            </Cstyle.ComplaintInfo>
            </Cstyle.ComplaintHistoryContainer>
        </>
    )
}


const MoreItems = (props) => {
    const [DeleteModal, setDeleteModal] = useState(false);
    const [ViewModal, setViewModal] = useState(false);
    const [ResolvedModal, setResolvedModal] = useState(false);
    return(
        <>
            <Cstyle.MoreItemsContainer>
                <ul>
                    <li onClick={()=>{setViewModal(true)}}>View</li>
                    <li onClick={()=>{setResolvedModal(true)}}>Mark As Resolved</li>
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
                        <Detailsform type="text" value={props.complaint.cf_id} disabled/>
                    </Col>
                    <Col xs={12} md={8}>
                        <span>Title</span>
                        <Detailsform type="text" value={props.complaint.topic} disabled/>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={12} md={4}>
                        <span>Category</span>
                        <Detailsform type="text" value={props.complaint.category} disabled/>
                    </Col>
                    <Col xs={12} md={3}>
                        <span>Date</span>
                        <Detailsformdate type="date" disabled value={props.complaint.date_of_creation}/>
                    </Col>
                    <Col xs={12} md={5}>
                        <span>User (<span style={{fontStyle: "italic"}}>Society Member</span>)</span>
                        <Detailsform type="text" value="Kavyesh Vohra" disabled/>
                    </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                        <span>Description</span>
                        <Cstyle.ComplaintDesc disabled rows="6" maxLength="255" value={props.complaint.description}/>
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
            <Modal show={ResolvedModal} onHide={()=>{setResolvedModal(false)}} centered>
                <Modal.Header closeButton style={{borderBottom: "none"}}>
                    {/* <Modal.Title>Delete Complaint</Modal.Title> */}
                </Modal.Header>
                <Modal.Body closeButton style={{paddingTop: "unset"}}>
                    <Cstyle.DeleteCont>
                        <AiOutlineInfoCircle style={{fontSize: "8em", color: "green"}}/>
                        <h2>Are you sure?</h2>
                        <p>Do you really want to mark this record as resolved? This process cannot be undone.</p>
                        <Button variant='outline-success'>Continue</Button>
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