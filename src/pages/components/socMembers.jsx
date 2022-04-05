import React, {useEffect, useState} from 'react'
import { Feature1} from './dashboard'
import * as SMStyle from '../../styles/soc-members.js'
import { Feature1Container, DashItemContainer1, Item ,Feature2Container, Title } from '../../styles/dashboard-Style'
import {ButtonSubmit, Detailsform, FormGroup, TextSpan, ButtonWrapper, FormPassGroup, SelectGroup } from '../../styles/register-styles'
import {RiPencilFill,RiEyeFill, RiDeleteBinFill } from 'react-icons/ri'
import {Col, Modal, Row, Button, Table} from 'react-bootstrap'
import { DeleteCont } from '../../styles/complaints'
import {MdOutlineCancel} from 'react-icons/md'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import  Select from 'react-select'
import { TestimonialImageContainer } from '../../styles/home-style'
import Profile from '../../Images/Photo.jpg'
import toast,{Toaster} from 'react-hot-toast'
import { Cookies, useCookies } from 'react-cookie';
import { useParams } from "react-router-dom";

const SocMembers = (props) => {
  
  const [society,setSociety] = useState();
  const [userCookies,setUserCookies] = useCookies();
  const [members,setMembers] = useState();
  const [memberID,setMemberID] = useState();

  const [membertype,setMemberType] = useState();
  const [houseType,setHouseType] = useState();
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
      // setMembers(memberRes);
    }
  },[])


  const getSocietyMembers = async ()=>{
    const memberData = {"jwtToken":userCookies.user,"socID":params.id};
      console.log(userCookies.user);

      const memberURL="http://192.168.1.67:8080/getSocietyMembers";
      const memberOptions={
          method:"POST",
          headers: {
              "Content-Type": "application/json",
          },
          body:JSON.stringify(memberData)
      }

      const memberResponse = await fetch(memberURL,memberOptions);
      const memberRes = await memberResponse.json();
      setMembers(memberRes);
      console.log(society);
      console.log(memberRes);
  }

  const getFamilyMember = async ()=>{
    const memberData = {"jwtToken":userCookies.user,};
      console.log(userCookies.user);

      const memberURL="http://192.168.1.67:8080/getSocietyMembers";
      const memberOptions={
          method:"POST",
          headers: {
              "Content-Type": "application/json",
          },
          body:JSON.stringify(memberData)
      }

      const memberResponse = await fetch(memberURL,memberOptions);
      const memberRes = await memberResponse.json();
      setMembers(memberRes);
      console.log(society);
      console.log(memberRes);
  }

  useEffect( async ()=>{
    if(society != null && members==null){
      getSocietyMembers();
    }
  });


  const handleUserDelete = async ()=>{
    const data = members[memberID];
    data.jwtToken=userCookies.user;
    const url="http://192.168.1.67:8080/deleteSocietyMember";
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
    setDeleteMemberModal(false);
    setMemberID(null);
    getSocietyMembers();
  }

  async function handleSubmit(e){
    e.preventDefault()

    const data=members[memberID];
    data.first_name=document.getElementById("editFname").value;
    data.last_name=document.getElementById("editlname").value;
    data.dob = document.getElementById("editDob").value;
    data.phone_number=document.getElementById("editPhone").value;
    data.email= document.getElementById("editEmail").value;
    data.alternate_phone_number = document.getElementById("editAltPhone").value;
    data.house_name = document.getElementById("editHouseName").value;
    data.jwtToken=userCookies.user;
    
    const url="http://192.168.1.67:8080/editSocietyMember";
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

    setLoading(1)
  }

  function handleFamilySubmit(e)
  {
    e.preventDefault()
    setLoading1(1)
  }
  const [isPopupVisible, setVisible] = useState(false)
  const [editMember, setMemberDetails] = useState(false)
  const [DeleteMemberModal, setDeleteMemberModal] = useState(false)
  const [Isloading, setLoading] = useState(0)
  const [Isloading1, setLoading1] = useState(0)
  const [FamilyDetails, setFamilyDetails] = useState(false);
  useEffect(()=>{
    if(Isloading)
    {
        setTimeout(()=>{setLoading(0);
            toast.success("Success! Profile Edited!",{
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
    if(Isloading1)
    {
      setTimeout(()=>{setLoading1(0);
        toast.success("Success! Family Member Edited!",{
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
  },[Isloading,Isloading1])
  const FormStyle = {
    width: "100%"
  }
  const SelectStyle = {
    marginBottom: '0.5em'
  }
  const FormStyle1 = {
    width: "100%",
    display: "flex",
  }
  const EditTenantStyle = {
    width: "50%"
  }
  const iconStyle = {
    width: "1.5em",
    height: "1.5em",
};
const options = [
  { value: 'Society-Admin', label: 'Society Admin' },
  { value: 'Society-Member', label: 'Society Member' },
]

const houseoptions = [
  { value: '1BHK', label: '1BHK' },
  { value: '2BHK', label: '2BHK' },
  { value: '3BHK', label: '3BHK' },
  { value: '4BHK', label: '4BHK' },
  { value: 'Other', label: 'More than 4BHK' },
]
const relationOption = [
  { value: 'Father', label: 'Father' },
  { value: 'Mother', label: 'Mother' },
  { value: 'Sister', label: 'Sister' },
  { value: 'Brother', label: 'Brother' },
  { value: 'Other', label: 'Others' },
]
const rentOption = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'}
]
const genderOptions=[
  {value: "M", label: "Male"},
  {value: "F", label: "Female"},
  {value: "O", label: "Others"}
]
  const MemberFName = ['Kavyesh', 'Aastha', 'Sidhraj', 'Kanishk', 'Mehul', 'Richard','Kunal', 'Manish','Vishal', 'Vidhi','Jainee']
  const MemberLName = ['Vohra', 'Arora', 'Mori', 'Shah', 'Choksi', 'D`Souza','Dhakan', 'Paul','Shah', 'Shah', 'Dodhiya']
  const Sr = [1,2,3,4,5,6,7,8,9,10]
  const [passwordState, setPasswordState] = useState("password");
  let i=0

  if(society != null){
  return (
  <>
    <Toaster/>
    <SMStyle.Container>
      <SMStyle.Heading1>Siddhachal Flats</SMStyle.Heading1>
      <SMStyle.Heading5>Society Admin: <span style={{fontStyle: "italic", fontWeight: "400", textDecoration: "underline", textDecorationColor: "#FAB6B6"}}>Patel Manikbhai</span></SMStyle.Heading5>
    </SMStyle.Container>
    <Feature1Container>
      <Feature1 heading="Total Members" metrics="10" />
      <Feature1 heading="Total Rented Houses" metrics="2"/>
      <Feature1 heading="Payments Done" metrics="200"/>
    </Feature1Container>
    <Feature2Container>
      <DashItemContainer1 style={{width:"100%", marginBottom: "2em"}}>
        <Item>
            <SMStyle.Heading4>Member Information</SMStyle.Heading4>
            <SMStyle.Container1>
              <table className='table'>
              <tbody>
                <tr className='table2'>
                  <td>Sr.No</td>
                  <td>First Name</td>
                  <td>Last Name</td>
                  <td>Actions</td>
                </tr>
                {
                  members != null?(
                  members.map((member,index=0)=>{
                    return(
                      <tr className='rowDesign'>
                        <td>{++index}</td>
                        <td>{member.first_name}</td>
                        <td>{member.last_name}</td>
                        <td>
                          <button className='buttonStyle'><RiPencilFill className='actionStyle' onClick={()=>{setMemberID(index-1);setMemberDetails(true)}}/></button>
                          <button className='buttonStyle'onClick={()=>{setMemberID(index-1);setVisible(!isPopupVisible)}}><RiEyeFill className='actionStyle'/></button>
                        </td>
                      </tr>
                    )
                  })):(
                    <h1>Loading</h1>
                  )
                }
              </tbody>
              </table>
            </SMStyle.Container1>
        </Item>
      </DashItemContainer1>
    </Feature2Container>
    <Feature2Container >
      <DashItemContainer1 style={{width: "100%"}}>
      <Item>
        <SMStyle.Heading4>Society Information</SMStyle.Heading4>
        <SMStyle.Container1>
        <table className='table'>
          <tbody>
            <tr>
              <td>Name </td>
              <td>Siddhachal Flats</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>Siddhachal Flats, Near TV Tower, Drive In Road, Ahmedabad-380054</td>
            </tr>
            <tr>
              <td>Society Type</td>
              <td>Appartments ( 3 BHK / 4 BHK )</td>
            </tr>
            <tr>
              <td>Member Since</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>Society Admin(s)</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>+91-982501009</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>manikbhai021@gmail.com</td>
            </tr>
          </tbody>
        </table>
        </SMStyle.Container1>
      </Item>
      </DashItemContainer1>
    </Feature2Container>

    <Feature1Container>
      <Feature1 heading="Complaints By Members"  metrics="6"/>
      <Feature1 heading="Complaints By Society Admin"  metrics="0"/>
      <Feature1 heading="Resolved Complaints"  metrics="4"/>
    </Feature1Container>
 
  {

  (memberID!=null && members!=null) ? (
  <Modal show={isPopupVisible} onHide={()=>{setVisible(false)}} centered size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Member Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>First Name</TextSpan>
                <Detailsform type="text" name="tenant_fname"  value={members[memberID].first_name} disabled/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Last Name</TextSpan>
                <Detailsform type="text" name="tenant_lname"  value={members[memberID].last_name} disabled/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Date Of Birth</TextSpan>
                <Detailsform type="date" name="member_dob"  value={members[memberID].dob} disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Phone Number</TextSpan>
                <Detailsform type="tel" name="tenant_phone"  value={members[memberID].phone_number} disabled/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Email</TextSpan>
                <Detailsform type="email" name="tenant_email"  value={members[memberID].email} disabled/>
              </FormGroup>
              </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Alternate Phone Number</TextSpan>
                <Detailsform type="tel" name="member_alt_phone"  value={members[memberID].alternate_phone_number} disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Member Type</TextSpan>
                <Detailsform type="text" name="member_type"  value={members[memberID].type} disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>House Type</TextSpan>
                <Detailsform type="text" name="member_house_type"  value={members[memberID].house_type} disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
            <FormGroup style={FormStyle}>
                <TextSpan>House Name</TextSpan>
                <Detailsform type="text" id="hname" name="house_name" value={members[memberID].house_name} disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <SelectGroup style={FormStyle}>
                <TextSpan>Rented</TextSpan>
                <Detailsform type="text" name="member_rented_status"  value={members[memberID].is_deleted ? "YES" : "No"} disabled />
              </SelectGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <TextSpan style={{flex:'1'}}>Profile Photo</TextSpan>
                <TestimonialImageContainer style={{backgroundImage: `url(${Profile})`, backgroundSize: 'cover', position: 'relative'}}>
                
                </TestimonialImageContainer>
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <SMStyle.Heading5 style={{textAlign: 'center', textDecoration: 'underline'}}>Family Members</SMStyle.Heading5>
              <Table id="visitor-info" responsive="sm" bordered hover striped style={{verticalAlign: 'middle'}}>
              <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Relationship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Swati</td>
                  <td>Vohra</td>
                  <td>F</td>
                  <td>28</td>
                  <td>Sister</td>
                </tr>
              </tbody>
              </Table>
            </Col>
            </Row>
    </Modal.Body>
  </Modal>) : (<h1>Loading...</h1>)
  }

{
  (memberID!=null && members!=null) ? (
  <Modal show={editMember} onHide={() => { setMemberDetails(false) }} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Member Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>First Name</TextSpan>
                <Detailsform type="text" name="tenant_fname" id="editFname"  defaultValue={members[memberID].first_name} />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Last Name</TextSpan>
                <Detailsform type="text" name="tenant_lname" id="editLname" defaultValue={members[memberID].last_name} />
              </FormGroup>
            </Col>
            
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Date Of Birth</TextSpan>
                <Detailsform type="date" name="member_dob"  id="editDob" defaultValue={members[memberID].dob} />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Phone Number</TextSpan>
                <Detailsform type="tel" name="tenant_phone" id="editPhone" defaultValue={members[memberID].phone_number} />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Email</TextSpan>
                <Detailsform type="email" name="tenant_email" id="editEmail" defaultValue={members[memberID].email} />
              </FormGroup>
              </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Alternate Phone Number</TextSpan>
                <Detailsform type="tel" name="member_alt_phone" id="editAltPhone" defaultValue={members[memberID].alternate_phone_number} />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <SelectGroup style={FormStyle}>
                <TextSpan style={SelectStyle}>Member Type</TextSpan>
                <Select options={options} onChange={setMemberType} defaultValue={{label:members[memberID].type, value:members[memberID].type }}/>
              </SelectGroup>
            </Col>
            <Col xs={12} md={4}>
              <SelectGroup style={FormStyle}>
                <TextSpan style={SelectStyle}>House Type</TextSpan>
                <Select options={houseoptions} onChange={setHouseType} defaultValue={{label:"2BHK", value:members[memberID].house_type}}/>
              </SelectGroup>
            </Col>
            <Col xs={12} md={4}>
            <FormGroup style={FormStyle}>
                <TextSpan>House Name</TextSpan>
                <Detailsform type="text" name="house_name" id="editHouseName" defaultValue={members[memberID].house_name}  />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <SelectGroup style={FormStyle}>
                <TextSpan style={SelectStyle}>Rented</TextSpan>
                <Select options={rentOption} defaultValue={{label: "Yes", value:members[memberID].is_deleted ? "YES" : "No"}}/>
              </SelectGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <TextSpan style={{flex:'1'}}>Profile Photo</TextSpan>
                <TestimonialImageContainer style={{backgroundImage: `url(${Profile})`, backgroundSize: 'cover', position: 'relative'}}>
                {/* <HomeStyle.TestimonialImage src={props.image}/> */}
                </TestimonialImageContainer>
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <SMStyle.Heading5 style={{textAlign: 'center', textDecoration: 'underline'}}>Family Members</SMStyle.Heading5>
              <Table id="visitor-info" responsive="sm" bordered hover striped style={{verticalAlign: 'middle'}}>
              <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Relationship</th>
                <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Swati</td>
                  <td>Vohra</td>
                  <td>F</td>
                  <td>28</td>
                  <td>Sister</td>
                  <td><SMStyle.ActionButton className='buttonStyle' onClick={()=>{setFamilyDetails(true)}}><RiPencilFill className='actionStyle'/></SMStyle.ActionButton><SMStyle.ActionButton onClick={()=>setDeleteMemberModal(true)}><RiDeleteBinFill className='actionStyle'/></SMStyle.ActionButton></td>
                </tr>
              </tbody>
              </Table>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup style={FormStyle1}>
                <TextSpan>Delete Account?</TextSpan>
                <Button variant='danger' style={EditTenantStyle} onClick={()=>setDeleteMemberModal(!DeleteMemberModal)}>Delete</Button>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
            <ButtonWrapper style={{marginBottom: "1em"}}>
                <ButtonSubmit name="submit" type="submit" onClick={handleSubmit} disabled={Isloading}>{!Isloading ? "Submit" : "Submitting"}</ButtonSubmit>
            </ButtonWrapper>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>):(<h1>Loading...</h1>)
  }
  {
      <Modal show={DeleteMemberModal} onHide={()=>{setDeleteMemberModal(false)}} centered>
                <Modal.Header closeButton style={{borderBottom: "none"}}>
                    {/* <Modal.Title>Delete Complaint</Modal.Title> */}
                </Modal.Header>
                <Modal.Body closeButton style={{paddingTop: "unset"}}>
                    <DeleteCont>
                        <MdOutlineCancel style={{fontSize: "8em", color: "red"}}/>
                        <h2>Are you sure?</h2>
                        <p>Do you really want to delete this record? This process cannot be undone.</p>
                        <Button variant='outline-danger'onClick={handleUserDelete} >Delete</Button>
                    </DeleteCont>
                </Modal.Body>
            </Modal>
  }
  {
            <Modal show={FamilyDetails} onHide={()=>{setFamilyDetails(false)}} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Family Member</Modal.Title>
                </Modal.Header>
                <Modal.Body closeButton>
                  <Row>
                    <Col xs={12} md={4}>
                      <FormGroup style={FormStyle}>
                        <TextSpan>First Name</TextSpan>
                        <Detailsform type="text" name="family_member_fname"  value="Swati" />
                      </FormGroup>
                    </Col>
                    <Col xs={12} md={4}>
                      <FormGroup style={FormStyle}>
                        <TextSpan>Last Name</TextSpan>
                        <Detailsform type="text" name="family_member_lname"  value="Vohra" />
                      </FormGroup>
                    </Col>
                    <Col xs={12} md={4}>
                      <SelectGroup style={FormStyle}>
                        <TextSpan style={SelectStyle}>Gender</TextSpan>
                        <Select options={genderOptions} defaultValue={{label:"Female", value: "Female"}}/>
                      </SelectGroup>
                    </Col>
                    <Col xs={12} md={4}>
                      <FormGroup style={FormStyle}>
                        <TextSpan>Age</TextSpan>
                        <Detailsform type="text" name="family_member_age" value="28"/>
                      </FormGroup>
                    </Col>
                    <Col xs={12} md={6}>
                    <SelectGroup style={FormStyle}>
                        <TextSpan style={SelectStyle}>Relationship</TextSpan>
                        <Select options={relationOption} defaultValue={{label:"Sister", value: "Sister"}}/>
                      </SelectGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <ButtonWrapper style={{marginBottom: "1em"}}>
                        <ButtonSubmit type="submit" name="submit"onClick={handleFamilySubmit}>{!Isloading1 ?  "Submit" : "Submitting"}</ButtonSubmit>
                      </ButtonWrapper>
                    </Col>
                  </Row>
                </Modal.Body>
            </Modal>
  }
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

export default SocMembers