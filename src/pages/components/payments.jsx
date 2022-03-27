import { useState } from 'react';
// import {AiFillEye,FaTrash,MdModeEditOutline} from 'react-icons/all';
import {AiFillEye, AiOutlinePlus} from 'react-icons/ai'
import {FaTrash} from 'react-icons/fa'
import {MdModeEditOutline} from 'react-icons/md'
import PaymentInfoModal from './Modals/paymentInfoModal';
import {MenuWrapper,MenuItems, ButtonContainer} from '../../styles/complaints'
import * as Pstyle from '../../styles/payment-style'
import {AiOutlineUser} from 'react-icons/ai'
import {RiEyeFill} from 'react-icons/ri'
import { Row, Col, Modal } from 'react-bootstrap';
import { DetailWrapper, ComplaintDesc } from '../../styles/complaints';
import { ButtonSubmit, ButtonWrapper, Detailsform, Detailsformdate, FocusHtml, FormGroup, TextSpan} from '../../styles/register-styles';
import {Feature1} from '../components/dashboard'
import { Feature1Container } from '../../styles/dashboard-Style';
import { Heading, HeadingCont } from '../../styles/societies';
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';
const Payments = (props) => {
    const [itemColor, setItemColor] = useState("All Tickets")
    const MenuItem = (e) =>{
        setItemColor(e.target.textContent)
    }
    const options=[
        { value: "Maintenance", label: "Maintenance" },
        { value: "Donations", label: "Donations" }
    ]
    const [ModalState, viewModal] = useState(false)
    const [ModalState1, viewModal1] = useState(false)
    const Srno = [0,1,2,3,4];
    const Date = ['# 21/12/2020, 9:40 AM','# 29/12/2020, 15:00 PM','# 31/12/2020, 8:00 AM','# 02/01/2021, 11:36 PM', '# 16/01/2021, 9:40 PM']
    const Recipient = ['Kavyesh Vohra', 'Aastha Arora', 'Vishal Shah', 'Sidhraj Mori', 'Jay Patel']
    const Email = ['vohrakavyesh@gmail.com','aasthaarora@gmail.com','vishalshah@gmail.com','sidhrajmori@gmail.com', 'pateljay123@gmail.com']
    const Phone = ['+91-9979507228','+91-9888019708','+91-9745213165', '+91-8200032502', '+91-9879224642']
    const Type = ['Maintenance', 'Bill Payment', 'Donation', 'Maintenance', 'Maintenance']
    const Status = ['Success', 'Success','Failed','Success', 'Failed']
    const [CreatePayment, showPayment] = useState(false)
    const [count, setCount ] = useState(0)
    const CreatePayStatus = "Fail"
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
    function inputChange(e) {
        if (e.target.value !== "") {
            e.target.classList.add('text');
        }
        else {
            e.target.classList.remove('text');
        }
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
    return(
        <>
        <Toaster/>
        <HeadingCont>
            <Heading>Siddhachal Flats</Heading>
            <ButtonContainer><button className="newGallery" onClick={()=>showPayment(true)}><AiOutlinePlus style={{fontSize: "1.5em"}}/>New Payment</button></ButtonContainer>
        </HeadingCont>
        <Feature1Container>
            <Feature1 heading="Total Payments" metrics="150"/>
            <Feature1 name heading="Maintenance & Other Payments " metrics="147"/>
            <Feature1 heading="Failed Payments" metrics="3"/>
        </Feature1Container>
        <Pstyle.FilterWrapper>
            <MenuWrapper>
                <MenuItems>
                    <li onClick={MenuItem} style={{borderColor: "#fab6b6"}}>
                        All Payments
                    </li>
                    <li onClick={MenuItem}>
                        Success
                    </li>
                    <li onClick={MenuItem}>
                        Faliure
                    </li>
                </MenuItems>
            </MenuWrapper>
        </Pstyle.FilterWrapper>
        <Pstyle.Content>
            <table className='table'>
                <thead className='payment-heading'>
                    <tr>
                        <th>Sr. No</th>
                        <th style={{paddingRight: '1em'}}>Date</th>
                        <th>Recipient</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Srno.map((Sr)=>{
                        return(
                            <tr className='custom-layout'>
                            <td style={{width: '4em'}}>{Sr}</td>
                            <td>{Date[Sr]}</td>
                            <td><span style={{background: '#fab6b6' ,borderRadius: '50%',paddingBottom: '6px',paddingLeft:'7px',paddingRight:'7px',paddingTop:'5px',marginRight:'5px',width: '13em'}}><AiOutlineUser/></span>{Recipient[Sr]}</td>
                            <td>{Email[Sr]}</td>
                            <td>{Phone[Sr]}</td>
                            <td>{Type[Sr]}</td>
                            <td>{Status[Sr] == 'Success' ? <span className='bg-success text-white' style={{padding: '15px', borderRadius: '25px'}}>{Status[Sr]}</span>:<span className = 'bg-danger text-white' style={{padding: '15px', borderRadius: '25px'}}>{Status[Sr]}</span>}</td>
                            <td>{Status[Sr] == 'Success' ? <button className='buttonStyle' onClick={()=>viewModal(!ModalState)}><RiEyeFill className='actionStyle'/></button> : <button className='buttonStyle' onClick={()=>viewModal1(!ModalState)}><RiEyeFill className='actionStyle'/></button>} </td>
                            </tr>
                        )
                    })}
                    {/* <tr className='custom-layout'>
                        <td>2)</td>
                        <td># December 21, 2020, 9:40 AM</td>
                        <td><span style={{background: '#fab6b6' ,borderRadius: '50%',paddingBottom: '6px',paddingLeft:'7px',paddingRight:'7px',paddingTop:'5px',marginRight:'10px'}}><AiOutlineUser/></span>Kavyesh Vohra</td>
                        <td>vohrakavyesh@gmail.com</td>
                        <td>+91-9979507228</td>
                        <td>Maintenance</td>
                        <td><span className='bg-success text-white'style={{padding: '15px', borderRadius: '25px'}}>Success</span></td>
                        <td><button className='buttonStyle'><RiEyeFill className='actionStyle'/></button></td>
                    </tr> */}
                </tbody>
            </table>
        </Pstyle.Content>
        <Modal show={CreatePayment} onHide={()=>{showPayment(false)}} centered>
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
                <ComplaintDesc id="description" name="complaint_desc" maxLength="255" rows="6" onInput={handleKeyPress} />
                <TextSpan style={{height: "auto"}}>Description</TextSpan>
                <span style={{float: "right"}}>{count}/180</span>
            </FormGroup>
            <ButtonWrapper style={{marginBottom: "1em"}}>
                <ButtonSubmit name="submit" type="submit" onClick={CreationStatus(CreatePayStatus)}>Submit</ButtonSubmit>
            </ButtonWrapper>
            </form>
        </Modal.Body>
        </Modal>
        <Modal show={ModalState1} onHide={()=>{viewModal1(false)}} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Payment Details</Modal.Title>
                </Modal.Header>
                <Modal.Body closeButton >
                    <DetailWrapper>
                    <Row>
                    <Col xs={12} md={4}>
                        <span>ID</span>
                        <Detailsform type="text" value="txn1021ff8" disabled/>
                    </Col>
                    <Col xs={12} md={6}>
                        <span>Recipient Name</span>
                        <Detailsform type="text" value="Kavyesh Vohra" disabled/>
                    </Col>
                    <Col xs={12} md={2}>
                        <span>Status</span>
                        <Detailsform type="text" value="Failed" style={{color: 'red', fontWeight: '500'}}disabled/>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={12} md={3}>
                        <span>Date</span>
                        <Detailsformdate type="date" value="2020-03-22" disabled/>
                    </Col>
                    <Col xs={12} md={3}>
                        <span>Time</span>
                        <Detailsformdate type="time" value="20:15" disabled/>
                    </Col>
                    <Col xs={12} md={4}>
                        <span>Amount (₹)</span>
                        <Detailsform type="text" value="4875" disabled/>
                    </Col>
                    <Col xs={12} md={2}>
                        <span>Late Fees (₹)</span>
                        <Detailsform type="text" disabled value="0"/>
                    </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                        <span>Description</span>
                        <ComplaintDesc disabled rows="6" maxLength="255" value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,"/>
                        </Col>
                    </Row>
                    </DetailWrapper>
                </Modal.Body>
            </Modal>
        <Modal show={ModalState} onHide={()=>{viewModal(false)}} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Payment Details</Modal.Title>
                </Modal.Header>
                <Modal.Body closeButton >
                    <DetailWrapper>
                    <Row>
                    <Col xs={12} md={4}>
                        <span>ID</span>
                        <Detailsform type="text" value="txn1021ff8" disabled/>
                    </Col>
                    <Col xs={12} md={6}>
                        <span>Recipient Name</span>
                        <Detailsform type="text" value="Kavyesh Vohra" disabled/>
                    </Col>
                    <Col xs={12} md={2}>
                        <span>Status</span>
                        <Detailsform type="text" value="Success" style={{color: 'green', fontWeight: '500'}}disabled/>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={12} md={3}>
                        <span>Date</span>
                        <Detailsformdate type="date" value="2020-03-22" disabled/>
                    </Col>
                    <Col xs={12} md={3}>
                        <span>Time</span>
                        <Detailsformdate type="time" value="20:15" disabled/>
                    </Col>
                    <Col xs={12} md={4}>
                        <span>Amount (₹)</span>
                        <Detailsform type="text" value="4875" disabled/>
                    </Col>
                    <Col xs={12} md={2}>
                        <span>Late Fees (₹)</span>
                        <Detailsform type="text" disabled value="0"/>
                    </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                        <span>Description</span>
                        <ComplaintDesc disabled rows="6" maxLength="255" value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,"/>
                        </Col>
                    </Row>
                    </DetailWrapper>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Payments;


const CreationStatus = (props) =>
{
    toast.success("Success! Request Created",{
        duration: 3000,
        icon: '👏',
    })
}
//     const [ displayInfo , setDisplayInfo ] = useState(0);
//     const [ noticeData,setPaymentData] = useState();
//     const [ action,setAction ] = useState();
//     const [ type,setType ]=useState();

//     return (
//         <>
//             { displayInfo ?( <PaymentInfoModal type={type} action={action} data={noticeData} closeModal={setDisplayInfo}/> ):(<></>) }
//             <div className="galleryButtons">
//             <div className="galleryCaption">Maintenance Transactions</div>
//                 {
//                     props.userType!="Admin"?(<button className="galleryButtonControls" onClick={()=>console.log(0)}>Pay Maintenance</button>):(<></>)
//                 }
//             </div>
//             <div className="noticeContainer">
//             <table className="noticeTable">
//                 <tr>
//                     <td>SrNo</td>
//                     {props.userType!="SocietyMember"?(<td>User</td>):(<></>)}
//                     {props.userType=="Admin"?(<td>Society</td>):(<></>)}
//                     <td>Transaction ID</td>
//                     <td>Amount</td>
//                     <td>Time</td>
//                     <td>Status</td>
//                     <td>Actions</td>
//                 </tr>
//                 <Row 
//                     sr="1"
//                     id="sdfhajshfkjxhuirah"
//                     user="sidhraj Mori"
//                     society="soc ABC"
//                     tID="xhuirahbkvjkai2349sd"
//                     amount="5000"
//                     time="01:10 AM 01/01/2022"
//                     des="lorem lorem lorem lorem"
//                     status="success"
//                     latefee="500"
//                     userType={props.userType}
                    
//                     modal={setDisplayInfo}
//                     changePaymentData={setPaymentData}
//                     changeAction={setAction}
//                     changeType={setType}
//                     type="Maintenance"
//                 /> 
//                 <Row 
//                      sr="1"
//                      id="sdfhajshfkjxhuirah"
//                      user="sidhraj Mori"
//                      society="soc ABC"
//                      tID="xhuirahbkvjkai2349sd"
//                      amount="5000"
//                      time="01:10 AM 01/01/2022"
//                      des="lorem lorem lorem lorem"
//                      status="success"
//                      latefee="500"
//                      userType={props.userType}
                    
//                     modal={setDisplayInfo}
//                     changePaymentData={setPaymentData}
//                     changeAction={setAction}
//                     changeType={setType}
//                     type="Maintenance"
//                 />
//                 <Row 
//                      sr="1"
//                      id="sdfhajshfkjxhuirah"
//                      user="sidhraj Mori"
//                      society="soc ABC"
//                      tID="xhuirahbkvjkai2349sd"
//                      amount="5000"
//                      time="01:10 AM 01/01/2022"
//                      des="lorem lorem lorem lorem"
//                      status="success"
//                      latefee="500"
//                      userType={props.userType}
                    
//                     modal={setDisplayInfo}
//                     changePaymentData={setPaymentData}
//                     changeAction={setAction}
//                     changeType={setType}
//                     type="Maintenance"
//                 />
//                 <Row 
//                      sr="1"
//                      id="sdfhajshfkjxhuirah"
//                      user="sidhraj Mori"
//                      society="soc ABC"
//                      tID="xhuirahbkvjkai2349sd"
//                      amount="5000"
//                      time="01:10 AM 01/01/2022"
//                      des="lorem lorem lorem lorem"
//                      status="success"
//                      latefee="500"
//                      userType={props.userType}
                    
//                     modal={setDisplayInfo}
//                     changePaymentData={setPaymentData}
//                     changeAction={setAction}
//                     changeType={setType}
//                     type="Maintenance"
//                 />
//             </table>
//             <div>
//                 <div>showing 1 out of 10 entries</div>
//             </div>
//         </div>
//         <div className="galleryButtons">
//             <div className="galleryCaption">Donations</div>
//                 {
//                     props.userType!="Admin"?(<button className="galleryButtonControls" onClick={()=>console.log(0)}>Donate</button>):(<></>)
//                 }
//             </div>
//             <div className="noticeContainer">
//             <table className="noticeTable">
//                 <tr>
//                 <td>SrNo</td>
//                     {props.userType!="SocietyMember"?(<td>User</td>):(<></>)}
//                     {props.userType=="Admin"?(<td>Society</td>):(<></>)}
//                     <td>Transaction ID</td>
//                     <td>Amount</td>
//                     <td>Time</td>
//                     <td>Status</td>
//                     <td>Actions</td>
//                 </tr>
//                 <Row 
//                     sr="1"
//                     id="sdfhajshfkjxhuirah"
//                     user="sidhraj Mori"
//                     society="soc ABC"
//                     tID="xhuirahbkvjkai2349sd"
//                     amount="5000"
//                     time="01:10 AM 01/01/2022"
//                     des="lorem lorem lorem lorem"
//                     status="success"
//                     latefee="500"
//                     userType={props.userType}
                    
//                     modal={setDisplayInfo}
//                     changePaymentData={setPaymentData}
//                     changeAction={setAction}
//                     changeType={setType}
//                     type="Donation"
//                 />
//                 <Row 
//                      sr="1"
//                      id="sdfhajshfkjxhuirah"
//                      user="sidhraj Mori"
//                      society="soc ABC"
//                      tID="xhuirahbkvjkai2349sd"
//                      amount="5000"
//                      time="01:10 AM 01/01/2022"
//                      des="lorem lorem lorem lorem"
//                      status="success"
//                      latefee="500"
//                      userType={props.userType}
                     
//                     modal={setDisplayInfo}
//                     changePaymentData={setPaymentData}
//                     changeAction={setAction}
//                     changeType={setType}
//                     type="Donation"
//                 />
//                 <Row 
//                     sr="1"
//                     id="sdfhajshfkjxhuirah"
//                     user="sidhraj Mori"
//                     society="soc ABC"
//                     tID="xhuirahbkvjkai2349sd"
//                     amount="5000"
//                     time="01:10 AM 01/01/2022"
//                     des="lorem lorem lorem lorem"
//                     status="success"
//                     latefee="500"
//                     userType={props.userType}
                    
//                     modal={setDisplayInfo}
//                     changePaymentData={setPaymentData}
//                     changeAction={setAction}
//                     changeType={setType}
//                     type="Donation"
//                 />
//                 <Row 
//                     sr="1"
//                     id="sdfhajshfkjxhuirah"
//                     user="sidhraj Mori"
//                     society="soc ABC"
//                     tID="xhuirahbkvjkai2349sd"
//                     amount="5000"
//                     time="01:10 AM 01/01/2022"
//                     des="lorem lorem lorem lorem"
//                     status="success"
//                     latefee="500"
//                     userType={props.userType}
                    
//                     modal={setDisplayInfo}
//                     changePaymentData={setPaymentData}
//                     changeAction={setAction}
//                     changeType={setType}
//                     type="Donation"
//                 />
//             </table>
//             <div>
//                 <div>showing 1 out of 10 entries</div>
//             </div>
//         </div>
//         </>
//         );
// }

// const Row=(props)=>{
    
//     const [hover,setHover] = useState(0);
//     const data={
//         id:props.id,
//         tID:props.tID,
//         user:props.user,
//         amount:props.amount,
//         date:props.time,
//         description:props.des,
//         latefee:props.latefee,
//         society:props.society,
//         dueDate:"02:00 AM 01/01/2022",
//     }
//     return(
//         <>
//             <tr className="notHeading">
//                 <td>
//                     <div>{props.sr}</div>
//                 </td>
//                 {
//                     props.userType!="SocietyMember"?(<td>
//                         <div className="visitorText">{props.user}</div>
//                     </td>):(<></>)
//                 }
//                 {
//                     props.userType=="Admin"?(<td>
//                         <div className="visitorText">{props.society}</div>
//                     </td>):(<></>)
//                 }
//                 <td>
//                     <div className="visitorText">{props.tID}</div>
//                 </td>
//                 <td>
//                     <div className="visitorText">{props.amount}</div>
//                 </td>
//                 <td>
//                     <div className="visitorText">{props.time}</div>
//                 </td>
//                 <td>
//                     <div className="visitorText">{props.status}</div>
//                 </td>
//                 <td>
//                     <div className="noticeActions">
//                         <AiFillEye size="2em" color={hover=="eye"?"#FEB6B6":"#707A8A"}
//                             onMouseOver={()=>setHover("eye")}
//                             onMouseLeave={()=>setHover(0)}
//                             onClick={()=>{props.changeAction("show");props.changeType(props.type);props.changePaymentData(data);props.modal(1) }}
//                         />
//                         {/* {
//                             props.userType=="SocietyAdmin"?(<><MdModeEditOutline size="2em" color={hover=="edit"?"#FEB6B6":"#707A8A"}
//                                 onMouseOver={()=>setHover("edit")}
//                                 onMouseLeave={()=>setHover(0)}
//                             />
//                             <FaTrash size="1.6em" color={hover=="bin"?"#FEB6B6":"#707A8A"}
//                                 onMouseOver={()=>setHover("bin")}
//                                 onMouseLeave={()=>setHover(0)}
//                             /></>):(<></>)
//                         } */}
//                     </div>
//                 </td>
//             </tr>