import React, {useEffect, useState} from 'react'
import { Feature1} from './dashboard'
import * as SMStyle from '../../styles/soc-members.js'
import { Feature1Container, DashItemContainer1, Item ,Feature2Container, Title } from '../../styles/dashboard-Style'
import {ButtonSubmit, Detailsform, FormGroup, TextSpan, ButtonWrapper, FormPassGroup, SelectGroup } from '../../styles/register-styles'
import {RiPencilFill,RiEyeFill, RiDeleteBinFill } from 'react-icons/ri'
import InfoModal from './Modals/memberInfoModal'
import {Col, Modal, Row, Button, Table} from 'react-bootstrap'
import { DeleteCont } from '../../styles/complaints'
import {MdOutlineCancel} from 'react-icons/md'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import  Select from 'react-select'
import { TestimonialImageContainer } from '../../styles/home-style'
import Profile from '../../Images/Photo.jpg'
import toast,{Toaster} from 'react-hot-toast'
const SocMembers = (props) => {
  useEffect(() => {
    window.scroll(0,0)
  })

  function handleSubmit(e){
    e.preventDefault()
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
                {Sr.map(no =>{
                  return(
                  <tr className='rowDesign'>
                    <td>{no}</td>
                    <td>{MemberFName[no]}</td>
                    <td>{MemberLName[no]}</td>
                    <td><button className='buttonStyle'><RiPencilFill className='actionStyle' onClick={()=>setMemberDetails(true)}/></button><button className='buttonStyle'onClick={()=>{setVisible(!isPopupVisible)}}><RiEyeFill className='actionStyle'/></button></td>
                  </tr>
                  )
                })}
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

  <Modal show={isPopupVisible} onHide={()=>{setVisible(false)}} centered size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Member Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>First Name</TextSpan>
                <Detailsform type="text" name="tenant_fname"  value="Kunal" disabled/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Last Name</TextSpan>
                <Detailsform type="text" name="tenant_lname"  value="Dhakan" disabled/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
              <TextSpan>Password</TextSpan>
                  <div style={{ display: "flex", alignItems: "center", borderBottom: '2px solid #000'}}>
                      <Detailsform style={{ borderBottom: "initial" }} id="member-password" type={passwordState} name="member_password" minLength="8" value="Kavyesh@2203"  disabled/>
                      {passwordState == 'password' ? (<AiFillEyeInvisible id="pwd-off-eye" className="icons-eye-off" style={iconStyle} onClick={() => setPasswordState('text')} />) : (<AiFillEye id="" style={iconStyle} onClick={() => setPasswordState('password')} />)}
                </div>
                </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Date Of Birth</TextSpan>
                <Detailsform type="date" name="member_dob"  value="2002-03-22"disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Phone Number</TextSpan>
                <Detailsform type="tel" name="tenant_phone"  value="+91-9668010104" disabled/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Email</TextSpan>
                <Detailsform type="email" name="tenant_email"  value="kd1029@gmail.com" disabled/>
              </FormGroup>
              </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Alternate Phone Number</TextSpan>
                <Detailsform type="tel" name="member_alt_phone"  value="+91-9979507228"disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Member Type</TextSpan>
                <Detailsform type="text" name="member_type"  value="Society Member" disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>House Type</TextSpan>
                <Detailsform type="text" name="member_house_type"  value="2 BHK" disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
            <FormGroup style={FormStyle}>
                <TextSpan>House Name</TextSpan>
                <Detailsform type="text" id="hname" name="house_name" value="B-203" disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <SelectGroup style={FormStyle}>
                <TextSpan>Rented</TextSpan>
                <Detailsform type="text" name="member_rented_status"  value="Yes" disabled />
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
  </Modal>
  <Modal show={editMember} onHide={() => { setMemberDetails(false) }} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Member Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>First Name</TextSpan>
                <Detailsform type="text" name="tenant_fname"  value="Kunal" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Last Name</TextSpan>
                <Detailsform type="text" name="tenant_lname"  value="Dhakan" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
              <TextSpan>Password</TextSpan>
                  <div style={{ display: "flex", alignItems: "center", borderBottom: '2px solid #000'}}>
                      <Detailsform style={{ borderBottom: "initial" }} id="member-password" type={passwordState} name="member_password" minLength="8" value="Kavyesh@2203" />
                      {passwordState == 'password' ? (<AiFillEyeInvisible id="pwd-off-eye" className="icons-eye-off" style={iconStyle} onClick={() => setPasswordState('text')} />) : (<AiFillEye id="" style={iconStyle} onClick={() => setPasswordState('password')} />)}
                </div>
                </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Date Of Birth</TextSpan>
                <Detailsform type="date" name="member_dob"  value="2002-03-22" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Phone Number</TextSpan>
                <Detailsform type="tel" name="tenant_phone"  value="+91-9668010104" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Email</TextSpan>
                <Detailsform type="email" name="tenant_email"  value="kd1029@gmail.com" />
              </FormGroup>
              </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Alternate Phone Number</TextSpan>
                <Detailsform type="tel" name="member_alt_phone"  value="+91-9979507228" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <SelectGroup style={FormStyle}>
                <TextSpan style={SelectStyle}>Member Type</TextSpan>
                <Select options={options} defaultValue={{label:"Society Member", value: "Society Member"}}/>
              </SelectGroup>
            </Col>
            <Col xs={12} md={4}>
              <SelectGroup style={FormStyle}>
                <TextSpan style={SelectStyle}>House Type</TextSpan>
                <Select options={houseoptions} defaultValue={{label:"2BHK", value: "2BHK"}}/>
              </SelectGroup>
            </Col>
            <Col xs={12} md={4}>
            <FormGroup style={FormStyle}>
                <TextSpan>House Name</TextSpan>
                <Detailsform type="text" id="hname" name="house_name" value="B-203"  />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <SelectGroup style={FormStyle}>
                <TextSpan style={SelectStyle}>Rented</TextSpan>
                <Select options={rentOption} defaultValue={{label: "Yes", value:"yes"}}/>
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
      </Modal>
      <Modal show={DeleteMemberModal} onHide={()=>{setDeleteMemberModal(false)}} centered>
                <Modal.Header closeButton style={{borderBottom: "none"}}>
                    {/* <Modal.Title>Delete Complaint</Modal.Title> */}
                </Modal.Header>
                <Modal.Body closeButton style={{paddingTop: "unset"}}>
                    <DeleteCont>
                        <MdOutlineCancel style={{fontSize: "8em", color: "red"}}/>
                        <h2>Are you sure?</h2>
                        <p>Do you really want to delete this record? This process cannot be undone.</p>
                        <Button variant='outline-danger'>Delete</Button>
                    </DeleteCont>
                </Modal.Body>
            </Modal>
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
  </>
  )
}

export default SocMembers