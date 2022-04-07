import { useEffect, useState } from 'react';
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

import { Cookies, useCookies } from 'react-cookie';
import { useParams } from "react-router-dom";

const Payments = (props) => {

    const [society,setSociety] = useState(null);
    const [maintenances,setMaintenances] = useState(null);
    const [donations,setDonations] = useState(null);
    const [userCookies,setUserCookies] = useCookies();
    const [maintenanceIndex , setMaintenanceIndex] = useState(null);
    

    const [itemColor, setItemColor] = useState("All Tickets")
    const params = useParams();
    
    useEffect( async ()=>{
        if(society == null ){

            const data={"jwtToken":userCookies.user,"id":params.id};
            const url="http://192.168.1.67:8080/getSociety";
            const options={
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(data)
            }
            const response = await fetch(url,options);
            const res = await response.json();
            setSociety(res);
            console.log(res);
        }
    });

    const getMentainanceDetails = async () => {
        const data = {"jwtToken":userCookies.user,"society_id":society.society_id};
        const url="http://192.168.1.67:8080/maintenance";

        const options={
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        }

        const response = await fetch(url,options);
        const result = await response.json();
        setMaintenances(result);
        console.log(result);
    }

    const getDonationDetails = async () => {
        const data = {"jwtToken":userCookies.user,"society_id":society.society_id};
        const url="http://192.168.1.67:8080/donations";

        const options={
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        }

        const response = await fetch(url,options);
        const result = await response.json();
        setDonations(result);
        console.log(result);
    }

    useEffect( async () =>{
        if(society != null && maintenances == null){
            getMentainanceDetails();
            getDonationDetails();
        }
    })

    const MenuItem = (e) =>{
        setItemColor(e.target.textContent)
    }
    const options=[
        { value: "Maintenance", label: "Maintenance" },
        { value: "Donations", label: "Donations" }
    ]
    const [ModalState, viewModal] = useState(false)
    const [ModalState1, viewModal1] = useState(false)
    const [ModalState2, viewModal2] = useState(false)
    const [ModalState3, viewModal3] = useState(false)
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
        marginBottom: "1.5em",
    }
    const FormStyle2 = {
        width: "100%",
        marginTop: "1.5em",
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
    function CreationStatus(e)
    {
        e.preventDefault()
        setLoading(1)
    }
    const paymentDate = new window.Date();
    const currentYear = paymentDate.getFullYear();
    const today = paymentDate.getDate()
    const currentMonth = paymentDate.getMonth() + 1;
    const [Isloading, setLoading] = useState(0)
    useEffect(()=>{
        if(Isloading)
        {
            setTimeout(()=>{setLoading(0);
                toast.success("Success! Request Completed!",{
                        duration: 3000,
                        icon: '👏',
                        style:
                        {
                            backgroundColor: '#3e444e',
                            color: '#fff',
                        }
                    })
                },2000)
        }
    },[Isloading])

    function SetDate()
    {
        var today = new window.Date()
        var dd = today.getDate()
        var mm = today.getMonth()+ 1
        var year = today.getFullYear()
        if (dd < 10)
        {
            dd='0'+dd
        }
        if(mm < 10)
        {
            mm='0'+mm
        }
        today = year+'-'+mm+'-'+dd;
        document.getElementById('last-date').setAttribute('min', today)
        document.getElementById('last-date').setAttribute('max', '2025-12-31')
    }
    if(society != null){
        return(
            <>
            <Toaster/>
            <HeadingCont>
                <Heading>{society.society_name}</Heading>
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
                        {
                            maintenances != null ?(
                                maintenances.map((transaction,index=0)=>{
                                    return(
                                        <tr className='custom-layout'>
                                        <td style={{width: '4em'}}>{++index}</td>
                                        <td>{ transaction.date_of_transaction }</td>
                                        <td><span style={{background: '#ccc' ,borderRadius: '50%',paddingBottom: '6px',paddingLeft:'7px',paddingRight:'7px',paddingTop:'5px',marginRight:'5px',width: '13em'}}><AiOutlineUser/></span>{ transaction.first_name +" "+ transaction.last_name}</td>
                                        <td>{ transaction.email }</td>
                                        <td>{ transaction.phone }</td>
                                        <td>Maintenance</td>
                                        <td>{ transaction.status == 'sucess' ? <span className='bg-success text-white' style={{padding: '15px', borderRadius: '25px'}}>{transaction.status}</span>:<span className = 'bg-danger text-white' style={{padding: '15px', borderRadius: '25px'}}>{transaction.status}</span>}</td>
                                        <td>{ transaction.status == 'sucess' ? <button className='buttonStyle' onClick={()=>{viewModal(!ModalState);setMaintenanceIndex(index-1) } }><RiEyeFill className='actionStyle'/></button> : <button className='buttonStyle' onClick={()=>{ viewModal1(!ModalState);setMaintenanceIndex(index-1) }}><RiEyeFill className='actionStyle'/></button>} </td>
                                        </tr>
                                    )
                                })
                            ):(<h1>Loading...</h1>)
                        }
                        {
                            donations != null ?(
                                donations.map((transaction,index=0)=>{
                                return(
                                    <tr className='custom-layout'>
                                    <td style={{width: '4em'}}>{++index}</td>
                                    <td>{ transaction.date_of_donation }</td>
                                    <td><span style={{background: '#ccc' ,borderRadius: '50%',paddingBottom: '6px',paddingLeft:'7px',paddingRight:'7px',paddingTop:'5px',marginRight:'5px',width: '13em'}}><AiOutlineUser/></span>{ transaction.first_name +" "+ transaction.last_name}</td>
                                    <td>{ transaction.email }</td>
                                    <td>{ transaction.phone_number }</td>
                                    <td>Maintenance</td>
                                    <td>{ transaction.status == 'success' ? <span className='bg-success text-white' style={{padding: '15px', borderRadius: '25px'}}>{transaction.status}</span>:<span className = 'bg-danger text-white' style={{padding: '15px', borderRadius: '25px'}}>{transaction.status}</span>}</td>
                                    <td>{ transaction.status == 'success' ? <button className='buttonStyle' onClick={()=>{viewModal2(!ModalState);setMaintenanceIndex(index-1) } }><RiEyeFill className='actionStyle'/></button> : <button className='buttonStyle' onClick={()=>{ viewModal3(!ModalState);setMaintenanceIndex(index-1) }}><RiEyeFill className='actionStyle'/></button>} </td>
                                    </tr>
                                )})
                            ):(<h1>Loading...</h1>)
                        }
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
                <Modal.Title>Create Payment Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>Date: <span style={{fontStyle: 'italic', fontWeight: '500'}}>{today}/{currentMonth}/{currentYear}</span></span>
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
                    <Detailsform type="text" id="amount"/>
                    <FocusHtml data-placeholder='Amount Payable'/>    
                </FormGroup>
                <FormGroup style={FormStyle}>
                    <TextSpan style={{height: "auto"}}>Last Date</TextSpan>
                    {/* <DatePicker minDate={new window.Date()}/> */}
                    <Detailsform type="date" id="last-date" onFocus={SetDate} onClick={SetDate}/>
                </FormGroup>
                <FormGroup style={FormStyle2}>
                    <Detailsform type="text" id="title" name="late_fees" onChange={inputChange}/>
                    <FocusHtml data-placeholder="Late Fees (₹)"/>
                </FormGroup>
                <ButtonWrapper style={{marginBottom: "1em"}}>
                    <ButtonSubmit name="submit" type="submit" onClick={CreationStatus} disabled={Isloading}>{!Isloading ? "Submit" : "Submitting"}</ButtonSubmit>
                </ButtonWrapper>
                </form>
            </Modal.Body>
            </Modal>

            {
                (maintenanceIndex!=null)?
                (<Modal show={ModalState} onHide={()=>{viewModal(false)}} centered size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Payment Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body closeButton >
                            <DetailWrapper>
                            <Row>
                            <Col xs={12} md={4}>
                                <span>ID</span>
                                <Detailsform type="text" value={maintenances[maintenanceIndex].maintenance_id} disabled/>
                            </Col>
                            <Col xs={12} md={6}>
                                <span>Recipient Name</span>
                                <Detailsform type="text" value={ maintenances[maintenanceIndex].first_name +" "+ maintenances[maintenanceIndex].last_name} disabled/>
                            </Col>
                            <Col xs={12} md={2}>
                                <span>Status</span>
                                <Detailsform type="text" value="Success" style={{color: 'green', fontWeight: '500'}}disabled/>
                            </Col>
                            </Row>
                            <Row>
                            <Col xs={12} md={3}>
                                <span>Date</span>
                                <Detailsformdate type="date" value={maintenances[maintenanceIndex].date_of_transaction} disabled/>
                            </Col>
                            <Col xs={12} md={4}>
                                <span>Amount (₹)</span>
                                <Detailsform type="text" value={maintenances[maintenanceIndex].amount} disabled/>
                            </Col>
                            <Col xs={12} md={2}>
                                <span>Late Fees (₹)</span>
                                <Detailsform type="text" disabled value={maintenances[maintenanceIndex].late_fees} />
                            </Col>
                            </Row>
                            {   
                                (maintenances[maintenanceIndex].description)?
                                (<Row>
                                    <Col xs={12} md={12}>
                                    <span>Description</span>
                                    <ComplaintDesc disabled rows="6" maxLength="255" value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,"/>
                                    </Col>
                                </Row>):(<></>)
                            }
                        </DetailWrapper>
                    </Modal.Body>
                </Modal>):(<></>)
            }
            {
                (maintenanceIndex!=null)?
                (<Modal show={ModalState1} onHide={()=>{viewModal1(false)}} centered size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Payment Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body closeButton >
                            <DetailWrapper>
                            <Row>
                            <Col xs={12} md={4}>
                                <span>ID</span>
                                <Detailsform type="text" value={maintenances[maintenanceIndex].maintenance_id} disabled/>
                            </Col>
                            <Col xs={12} md={6}>
                                <span>Recipient Name</span>
                                <Detailsform type="text" value={ maintenances[maintenanceIndex].first_name +" "+ maintenances[maintenanceIndex].last_name} disabled/>
                            </Col>
                            <Col xs={12} md={2}>
                                <span>Status</span>
                                <Detailsform type="text" value="Failed" style={{color: 'red', fontWeight: '500'}}disabled/>
                            </Col>
                            </Row>
                            <Row>
                            <Col xs={12} md={3}>
                                <span>Date</span>
                                <Detailsformdate type="date" value={maintenances[maintenanceIndex].date_of_transaction} disabled/>
                            </Col>
                            <Col xs={12} md={4}>
                                <span>Amount (₹)</span>
                                <Detailsform type="text" value={maintenances[maintenanceIndex].amount} disabled/>
                            </Col>
                            <Col xs={12} md={2}>
                                <span>Late Fees (₹)</span>
                                <Detailsform type="text" disabled value={maintenances[maintenanceIndex].late_fees} />
                            </Col>
                            </Row>
                            {   
                                (maintenances[maintenanceIndex].description)?
                                (<Row>
                                    <Col xs={12} md={12}>
                                    <span>Description</span>
                                    <ComplaintDesc disabled rows="6" maxLength="255" value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,"/>
                                    </Col>
                                </Row>):(<></>)
                            }
                        </DetailWrapper>
                    </Modal.Body>
                </Modal>):(<></>)
            }
            {
                (maintenanceIndex!=null)?
                (
            <Modal show={ModalState2} onHide={()=>{viewModal2(false)}} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Payment Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body closeButton >
                        <DetailWrapper>
                        <Row>
                        <Col xs={12} md={4}>
                            <span>ID</span>
                            <Detailsform type="text" value={donations[maintenanceIndex].donation_id} disabled/>
                        </Col>
                        <Col xs={12} md={6}>
                            <span>Recipient Name</span>
                            <Detailsform type="text" value={ donations[maintenanceIndex].first_name+" "+donations[maintenanceIndex].last_name } disabled/>
                        </Col>
                        <Col xs={12} md={2}>
                            <span>Status</span>
                            <Detailsform type="text" value="Success" style={{color: 'green', fontWeight: '500'}}disabled/>
                        </Col>
                        </Row>
                        <Row>
                        <Col xs={12} md={3}>
                            <span>Date</span>
                            <Detailsformdate type="date" value={donations[maintenanceIndex].date_of_donation} disabled/>
                        </Col>
                        <Col xs={12} md={4}>
                            <span>Amount (₹)</span>
                            <Detailsform type="text" value={donations[maintenanceIndex].amount} disabled/>
                        </Col>
                        </Row>
                        {   
                                (donations[maintenanceIndex].description)?
                                (<Row>
                                    <Col xs={12} md={12}>
                                    <span>Description</span>
                                    <ComplaintDesc disabled rows="6" maxLength="255" value={donations[maintenanceIndex].description}/>
                                    </Col>
                                </Row>):(<></>)
                            }
                        </DetailWrapper>
                    </Modal.Body>
                </Modal>):(<></>)
            }

{
                (maintenanceIndex!=null)?
                (
            <Modal show={ModalState3} onHide={()=>{viewModal3(false)}} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Payment Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body closeButton >
                        <DetailWrapper>
                        <Row>
                        <Col xs={12} md={4}>
                            <span>ID</span>
                            <Detailsform type="text" value={donations[maintenanceIndex].maintenance_id} disabled/>
                        </Col>
                        <Col xs={12} md={6}>
                            <span>Recipient Name</span>
                            <Detailsform type="text" value={donations[maintenanceIndex].first_name +" "+donations[maintenanceIndex].last_name} disabled/>
                        </Col>
                        <Col xs={12} md={2}>
                            <span>Status</span>
                            <Detailsform type="text" value={donations[maintenanceIndex].status} style={{color: 'green', fontWeight: '500'}}disabled/>
                        </Col>
                        </Row>
                        <Row>
                        <Col xs={12} md={3}>
                            <span>Date</span>
                            <Detailsformdate type="date" value={donations[maintenanceIndex].date_of_donation} disabled/>
                        </Col>
                        <Col xs={12} md={4}>
                            <span>Amount (₹)</span>
                            <Detailsform type="text" value={donations[maintenanceIndex].amount} disabled/>
                        </Col>
                        </Row>
                        {   
                                (donations[maintenanceIndex].description)?
                                (<Row>
                                    <Col xs={12} md={12}>
                                    <span>Description</span>
                                    <ComplaintDesc disabled rows="6" maxLength="255" value={donations[maintenanceIndex].description}/>
                                    </Col>
                                </Row>):(<></>)
                            }
                        </DetailWrapper>
                    </Modal.Body>
                </Modal>):(<></>)
            }

            </>
        );
    }else{
        return(
            <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <center>
                <h1>Loading...</h1>
            </center>
            </>
        );
    }
}

export default Payments;


// const CreationStatus = (e) =>
// {
//     e.preventDefault()



//     toast.success("Success! Request Completed!",{
//         duration: 3000,
//         icon: '👏',
//         style:
//         {
//             backgroundColor: '#3e444e',
//             color: '#fff',
//         }
//     })
// }
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
//                <tr>
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