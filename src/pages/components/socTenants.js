import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import styled from 'styled-components'
import { ButtonContainer, DeleteCont } from '../../styles/complaints'
import { Container as TenantCont } from '../../styles/visitor-style'
import { Container, Heading1, Heading5 } from '../../styles/soc-members'
import { AiOutlineUserAdd, AiOutlineSearch } from 'react-icons/ai'
import { Table, Modal, Row, Col, Button } from 'react-bootstrap'
import { DownloadButtonContainer } from '../../styles/notice-modal'
import { ButtonSubmit, ButtonWrapper, Detailsform, FocusHtml, FormGroup, TextSpan, Detailsform1 } from '../../styles/register-styles'
import Dropzone, { useDropzone } from 'react-dropzone'
import { RiPencilFill, RiEyeFill } from 'react-icons/ri'
import { BsDownload } from 'react-icons/bs'
import {MdOutlineCancel} from 'react-icons/md'
const FileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};;
  border-style: dashed;
  background-color: rgba(250, 250, 250, 0.2);
  color: #000;
  outline: none;
  transition: border .24s ease-in-out;
`;

const FormStyle = {
  width: "100%"
}
const FormStyle1 = {
  width: "100%",
  display: "flex",
}
const NewTenantStyle = {
  width: "100%",
  marginTop: "1em"
}
const EditTenantStyle = {
  width: "50%"
}


const getColor = (props) => {
  if (props.isDragRentAccept || props.isDragProofAccept) {
    return '#00e676';
  }
  if (props.isDragRentReject || props.isDragProofReject) {
    return '#ff1744';
  }
  return '#fab6b6';
}

const SocTenants = (props) => {
  const [AddTenant, setAddTenant] = useState(false)
  const [houseInfo, setHouseInfo] = useState(0)
  const [Isloading, setLoading] = useState(false)
  useEffect(() => {
    if (Isloading) {
      setTimeout(() => {
        setLoading(0);
        toast.success("Tenant added successfully!", {
          duration: 3000,
          icon: '🎉',
          style:
          {
            width: 'max-content',
            backgroundColor: '#3e444e',
            color: '#fff',
          }
        })
      }, 2000)
    }
  }, [Isloading])
  const [rentDoc, setRentDoc] = useState([])
  const [proofDoc, setProofDoc] = useState([])
  const [moreTenantsPopup, setMoreTenants] = useState(false)
  const [editTenant, setTenantDetails] = useState(false)
  const [DeleteTenantModal, setDeleteTenantModal] = useState(false)
  const houseStyle = {
    textDecoration: 'underline',
    textDecorationColor: '#fab6b6',
    cursor: 'pointer'
  }
  function inputChange(e) {
    if (e.target.value !== "") {
      e.target.classList.add('text');
    }
    else {
      e.target.classList.remove('text');
    }
  }

  const { getRootProps: getRootRentProps, getInputProps: getInputRentProps, isDragAccept: isDragRentAccept, isDragReject: isDragRentReject } = useDropzone({
    accept: 'image/*,application/pdf',
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setRentDoc(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      )
    }

  });

  const { getRootProps: getRootProofProps, getInputProps: getInputProofProps, isDragAccept: isDragProofAccept, isDragReject: isDragProofReject } = useDropzone({
    accept: 'application/pdf, image/jpeg',
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setProofDoc(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      )
    }

  });

  useEffect(() => {
    URL.revokeObjectURL(rentDoc.preview);
    URL.revokeObjectURL(proofDoc.preview);
  }, [rentDoc, proofDoc]);
  console.log(rentDoc)
  return (
    <>
      <Toaster />
      <Container>
        <Heading1>Siddhachal Flats</Heading1>
        <Heading5>Society Admin: <span style={{ fontStyle: "italic", fontWeight: "400", textDecoration: "underline", textDecorationColor: "#FAB6B6" }}>Patel Manikbhai</span></Heading5>
      </Container>
      <ButtonContainer>
        <button className='newTicket' onClick={() => { setAddTenant(true) }}><AiOutlineUserAdd /> ADD TENANT</button>
        <div>
          <input type="search" placeholder='Search' />
          <button className='search-icon' type="submit"><AiOutlineSearch /></button>
        </div>
      </ButtonContainer>
      <TenantCont>
        <Table id="visitor-info" responsive="sm" bordered hover striped >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>House</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kunal</td>
              <td>Dhakan</td>
              <td style={houseStyle} onClick={() => { setHouseInfo(true) }}>B-203</td>
              <td><button className='buttonStyle'><RiPencilFill className='actionStyle' onClick={() => { setTenantDetails(!editTenant) }} /></button><button className='buttonStyle' onClick={() => { setMoreTenants(!moreTenantsPopup) }}><RiEyeFill className='actionStyle' /></button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Riya</td>
              <td>Patel</td>
              <td style={houseStyle}>C-1001</td>
              <td><button className='buttonStyle'><RiPencilFill className='actionStyle' /></button><button className='buttonStyle' onClick={() => { setMoreTenants(!moreTenantsPopup) }}><RiEyeFill className='actionStyle' /></button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Shyam</td>
              <td>Pareek</td>
              <td style={houseStyle}>A-203</td>
              <td><button className='buttonStyle'><RiPencilFill className='actionStyle' /></button><button className='buttonStyle' onClick={() => { setMoreTenants(!moreTenantsPopup) }}><RiEyeFill className='actionStyle' /></button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-502</td>
              <td><button className='buttonStyle'><RiPencilFill className='actionStyle' /></button><button className='buttonStyle' onClick={() => { setMoreTenants(!moreTenantsPopup) }}><RiEyeFill className='actionStyle' /></button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-205</td>
              <td><button className='buttonStyle'><RiPencilFill className='actionStyle' /></button><button className='buttonStyle' onClick={() => { setMoreTenants(!moreTenantsPopup) }}><RiEyeFill className='actionStyle' /></button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-105</td>
              <td><button className='buttonStyle'><RiPencilFill className='actionStyle' /></button><button className='buttonStyle' onClick={() => { setMoreTenants(!moreTenantsPopup) }}><RiEyeFill className='actionStyle' /></button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-203</td>
              <td><button className='buttonStyle'><RiPencilFill className='actionStyle' /></button><button className='buttonStyle' onClick={() => { setMoreTenants(!moreTenantsPopup) }}><RiEyeFill className='actionStyle' /></button></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-203</td>
              <td><button className='buttonStyle'><RiPencilFill className='actionStyle' /></button><button className='buttonStyle' onClick={() => { setMoreTenants(!moreTenantsPopup) }}><RiEyeFill className='actionStyle' /></button></td>
            </tr>
            <tr>
              <td>9</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-203</td>
              <td><button className='buttonStyle'><RiPencilFill className='actionStyle' /></button><button className='buttonStyle' onClick={() => { setMoreTenants(!moreTenantsPopup) }}><RiEyeFill className='actionStyle' /></button></td>
            </tr>
            <tr>
              <td>10</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-203</td>
              <td><button className='buttonStyle'><RiPencilFill className='actionStyle' /></button><button className='buttonStyle' onClick={() => { setMoreTenants(!moreTenantsPopup) }}><RiEyeFill className='actionStyle' /></button></td>
            </tr>
          </tbody>
        </Table>
      </TenantCont>
      <Modal show={AddTenant} onHide={() => { setAddTenant(false) }} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Tenant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div style={{textAlign: "right"}}>
                    <span>User Name: <span style={{fontStyle: "italic", color: "#3e444e", fontWeight: "500"}}>Patel Manikbhai</span></span>
                </div> */}
          <form>
            <Row>
              <Col xs={12} md={6}>
                <FormGroup style={NewTenantStyle}>
                  <Detailsform1 type="text" id="tenant_fname" name="tenant_fname" onChange={inputChange} />
                  <FocusHtml data-placeholder='First Name' />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup style={NewTenantStyle}>
                  <Detailsform1 type="text" id="tenant_lname" name="tenant_lname" onChange={inputChange} />
                  <FocusHtml data-placeholder='Last Name' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <FormGroup style={NewTenantStyle}>
                  <Detailsform1 type="tel" id="tenant_phone" name="tenant_phone" onChange={inputChange} />
                  <FocusHtml data-placeholder='Phone Number' />
                </FormGroup>
              </Col>
              <Col xs={12} md={4}>
                <FormGroup style={NewTenantStyle}>
                  <Detailsform1 type="email" id="tenant_email" name="tenant_email" onChange={inputChange} />
                  <FocusHtml data-placeholder="Email" />
                </FormGroup>
              </Col>
              <Col xs={12} md={4}>
                <FormGroup style={NewTenantStyle}>
                  <Detailsform1 type="text" id="tenant_rent" name="tenant_rent" onChange={inputChange} maxLength="7" />
                  <FocusHtml data-placeholder="Rent Amount (₹)" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <TextSpan>Upload Rent Document</TextSpan>
                <section style={{ marginTop: '1em' }}>
                  <FileContainer {...getRootRentProps({ isDragRentAccept, isDragRentReject })}>
                    <input {...getInputRentProps()} />
                    <p>Drag & Drop Files. Click to upload</p>
                    <p id="uploadFileTypeMsg">(Accepted Type: PDF)</p>
                  </FileContainer>
                  {rentDoc.length > 0 && rentDoc[0].type == "application/pdf" ? <p style={{ display: "block", marginTop: "0.5em" }}>File Uploaded: <span style={{ color: "green", fontStyle: "italic", fontSize: "0.85em" }}>{rentDoc[0].name}</span></p> : null}
                </section>
              </Col>
              <Col xs={12} md={6}>
                <TextSpan>Upload POI (Proof Of Identification)</TextSpan>
                <section style={{ marginTop: '1em' }}>
                  <FileContainer {...getRootProofProps({ isDragProofAccept, isDragProofReject })}>
                    <input {...getInputProofProps()} />
                    <p>Drag & Drop Files. Click to upload</p>
                    <p id="uploadFileTypeMsg">(Accepted Type: PDF / .JPG)</p>
                  </FileContainer>
                  {proofDoc.length > 0 && proofDoc[0].type == "image/jpeg" ? <img style={{ width: "100px", height: "100px", margin: "0", display: "block", marginTop: "0.5em" }} src={proofDoc[0].preview} /> : null}
                  {proofDoc.length > 0 && proofDoc[0].type == "application/pdf" ? <p style={{ display: "block", marginTop: "0.5em" }}>File Uploaded: <span style={{ color: "green", fontStyle: "italic", fontSize: "0.85em" }}>{proofDoc[0].name}</span></p> : null}
                </section>
              </Col>
            </Row>
            <Row>
              <Col xs={12} style={{ marginTop: "1em" }}>
                <ButtonWrapper style={{ marginBottom: "1em" }}>
                  <ButtonSubmit type="submit" id="submit" onClick={() => { setAddTenant(true) }} disabled={Isloading}>{Isloading ? "Submitting" : "Submit"}</ButtonSubmit>
                </ButtonWrapper>
              </Col>
            </Row>
          </form>

        </Modal.Body>
      </Modal>
      <Modal show={houseInfo} onHide={() => { setHouseInfo(false) }} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>House Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup style={FormStyle}>
                <TextSpan>Owner's Name</TextSpan>
                <Detailsform type="text" id="owner_name" name="own_name" value="Kavyesh Vohra" disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup style={FormStyle}>
                <TextSpan>House Name</TextSpan>
                <Detailsform type="text" id="hname" name="house_name" value="B-203" disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup style={FormStyle}>
                <TextSpan>Email</TextSpan>
                <Detailsform type="email" id="email" name="owner_email" value="vohrakavyesh@gmail.com" disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup style={FormStyle}>
                <TextSpan>Phone Number</TextSpan>
                <Detailsform type="tel" id="telephone" name="owner_tel" value="+91-8200032503" pattern="[789][0-9]{9}" disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup style={FormStyle}>
                <TextSpan>Alternate Phone Number</TextSpan>
                <Detailsform type="tel" id="alttelephone" name="owner_alt_tel" value="NULL" pattern="[789][0-9]{9}" disabled />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup style={FormStyle}>
                <TextSpan>User Type</TextSpan>
                <Detailsform type="text" id="usertype" name="owner_user_type" value="Society Member" disabled />
              </FormGroup>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Modal show={moreTenantsPopup} onHide={() => { setMoreTenants(false) }} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Tenant Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>First Name</TextSpan>
                <Detailsform type="text" name="tenant_fname" disabled value="Kunal" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Last Name</TextSpan>
                <Detailsform type="text" name="tenant_lname" disabled value="Dhakan" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>House Name</TextSpan>
                <Detailsform type="text" name="tenant_hname" disabled value="B-203" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Phone Number</TextSpan>
                <Detailsform type="tel" name="tenant_phone" disabled value="+91-9668010104" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Email</TextSpan>
                <Detailsform type="email" name="tenant_email" disabled value="kd1029@gmail.com" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Rent Amount (₹)</TextSpan>
                <Detailsform type="text" name="tenant_rent_amt" disabled value="7000" />
              </FormGroup>
            </Col>
            <Col xs={12} md={12} >
              <FormGroup style={FormStyle}>
                <TextSpan>Documents (Rent Documents, Proof Of Identity)</TextSpan>
                <DownloadButtonContainer><ButtonSubmit name="submit" type="submit" className='attachments-download'>Download <BsDownload /></ButtonSubmit></DownloadButtonContainer>
              </FormGroup>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Modal show={editTenant} onHide={() => { setTenantDetails(false) }} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Tenant Details</Modal.Title>
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
                <TextSpan>House Name</TextSpan>
                <Detailsform type="text" name="tenant_hname"  value="B-203" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
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
            <Col xs={12} md={4}>
              <FormGroup style={FormStyle}>
                <TextSpan>Rent Amount (₹)</TextSpan>
                <Detailsform type="text" name="tenant_rent_amt"  value="7000" />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup style={FormStyle1}>
                <TextSpan>Delete Account?</TextSpan>
                <Button variant='danger' style={EditTenantStyle} onClick={()=>setDeleteTenantModal(!DeleteTenantModal)}>Delete</Button>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
            <ButtonWrapper style={{marginBottom: "1em"}}>
                <ButtonSubmit name="submit" type="submit">Submit</ButtonSubmit>
            </ButtonWrapper>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Modal show={DeleteTenantModal} onHide={()=>{setDeleteTenantModal(false)}} centered>
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
    </>
  )
}

export default SocTenants