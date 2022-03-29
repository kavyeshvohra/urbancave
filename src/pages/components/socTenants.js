import React, { useState, useEffect } from 'react'
import toast,{ Toaster } from 'react-hot-toast'
import { ButtonContainer } from '../../styles/complaints'
import { Container as TenantCont } from '../../styles/visitor-style'
import { Container, Heading1, Heading5 } from '../../styles/soc-members'
import {AiOutlineUserAdd, AiOutlineSearch} from 'react-icons/ai'
import { Table, Modal, Row, Col } from 'react-bootstrap'
import { ButtonSubmit, ButtonWrapper, Detailsform, FocusHtml, FormGroup, TextSpan, Detailsform1 } from '../../styles/register-styles'

const SocTenants = () => {
  const [AddTenant, setAddTenant] = useState(false)
  const [houseInfo, setHouseInfo] = useState(0)
  const [Isloading, setLoading] = useState(false)
  useEffect(()=>{
      if(Isloading)
      {
          setTimeout(()=>{setLoading(0);
              toast.success("Generated! Copied to Clipboard!",{
                      duration: 3000,
                      icon: '✅',
                      style:
                      {
                          width: 'max-content',
                          backgroundColor: '#3e444e',
                          color: '#fff',
                      }
                  })
              },2000)
      }
  },[Isloading])
  const houseStyle={
        textDecoration: 'underline',
        textDecorationColor: '#fab6b6',
        cursor: 'pointer'
      }
      function inputChange(e) {
        if (e.target.value !== "") {
            e.target.classList.add('text1');
        }
        else {
            e.target.classList.remove('text1');
        }
    }
  return (
    <>
      <Toaster/>
      <Container>
        <Heading1>Siddhachal Flats</Heading1>
        <Heading5>Society Admin: <span style={{fontStyle: "italic", fontWeight: "400", textDecoration: "underline", textDecorationColor: "#FAB6B6"}}>Patel Manikbhai</span></Heading5>
      </Container>
      <ButtonContainer>
          <button className='newTicket' onClick={()=>{setAddTenant(true)}}><AiOutlineUserAdd/> ADD TENANT</button>
          <div>
            <input type="search" placeholder='Search'/>
            <button className='search-icon' type="submit"><AiOutlineSearch/></button>
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
              <th>Date</th>
              <th>Entry Time</th>
              <th>Exit Time</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle} onClick={()=>{setHouseInfo(true)}}>B-203</td>
              <td>23/02/2022</td>
              <td>20:00</td>
              <td>21:00</td>
              <td>+91-9427521316</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>C-1001</td>
              <td>23/02/2022</td>
              <td>20:00</td>
              <td>22:00</td>
              <td>+91-9990012125</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-203</td>
              <td>23/02/2022</td>
              <td>8:00</td>
              <td>12:00</td>
              <td>+91-9888019708</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-502</td>
              <td>23/02/2022</td>
              <td>20:00</td>
              <td>24:00</td>
              <td>+91-9879224264</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-205</td>
              <td>23/02/2022</td>
              <td>20:00</td>
              <td>9:00</td>
              <td>+91-7874193434</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-105</td>
              <td>23/02/2022</td>
              <td>20:00</td>
              <td>11:00</td>
              <td>+91-6369850125</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-203</td>
              <td>23/02/2022</td>
              <td>20:00</td>
              <td>18:00</td>
              <td>+91-8200032501</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-203</td>
              <td>23/02/2022</td>
              <td>20:00</td>
              <td>22:30</td>
              <td>+91-9010654205</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-203</td>
              <td>23/02/2022</td>
              <td>20:00</td>
              <td>1:00</td>
              <td>+91-7900258015</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Chirag</td>
              <td>Shah</td>
              <td style={houseStyle}>A-203</td>
              <td>23/02/2022</td>
              <td>20:00</td>
              <td>3:00</td>
              <td>+91-8657979780</td>
            </tr>
          </tbody>
        </Table>
      </TenantCont>
      <Modal show={AddTenant} onHide={()=>{setAddTenant(false)}} centered>
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
                        <FormGroup style={{width: "100%",marginTop: "1em"}}>
                            <Detailsform1 type="text" id="unq_code" name="unique_code"/>
                            <FocusHtml data-placeholder='First Name'/>
                        </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                        <FormGroup style={{width: "100%", marginTop: "1em"}}>
                            <Detailsform type="text" id="unq_code" name="unique_code"/>
                            <FocusHtml data-placeholder='Last Name'/>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                        <FormGroup style={{width: "100%", marginTop: "1em"}}>
                            <Detailsform type="text" id="unq_code" name="unique_code"/>
                            <FocusHtml data-placeholder='Phone Number'/>
                        </FormGroup>        
                        </Col>
                        <Col xs={12} md={6}>
                        <FormGroup style={{width: "100%", marginTop: "1em"}}>
                            <FocusHtml data-placeholder="Email"/>
                            <Detailsform1 type="text" id="unq_code" name="unique_code"/>
                        </FormGroup>
                        </Col>
                    </Row>
                </form>
                <ButtonWrapper style={{marginBottom: "1em"}}>
                        <ButtonSubmit type="submit" id="submit" onClick={()=>{setAddTenant(true)}} disabled={Isloading}>{Isloading ? "Generating" : "Generate"}</ButtonSubmit>
                    </ButtonWrapper>
                </Modal.Body>
            </Modal>
      <Modal show={houseInfo} onHide={()=>{setHouseInfo(false)}} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>House Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                  <Col xs={12} md={6}>
                    <FormGroup style={{width: "100%"}}>
                      <TextSpan>Owner's Name</TextSpan>
                      <Detailsform type="text" id="owner_name" name="own_name" value="Kavyesh Vohra" disabled/>
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={6}>
                    <FormGroup style={{width: "100%"}}>
                      <TextSpan>House Name</TextSpan>
                      <Detailsform type="text" id="hname" name="house_name" value="B-203" disabled/>
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={6}>
                    <FormGroup style={{width: "100%"}}>
                      <TextSpan>Email</TextSpan>
                      <Detailsform type="email" id="email" name="owner_email" value="vohrakavyesh@gmail.com" disabled/>
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={6}>
                    <FormGroup style={{width: "100%"}}>
                      <TextSpan>Phone Number</TextSpan>
                      <Detailsform type="tel" id="telephone" name="owner_tel" value="+91-8200032503" pattern="[789][0-9]{9}" disabled/>
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={6}>
                    <FormGroup style={{width: "100%"}}>
                      <TextSpan>Alternate Phone Number</TextSpan>
                      <Detailsform type="tel" id="alttelephone" name="owner_alt_tel" value="NULL" pattern="[789][0-9]{9}" disabled/>
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={6}>
                    <FormGroup style={{width: "100%"}}>
                      <TextSpan>User Type</TextSpan>
                      <Detailsform type="text" id="usertype" name="owner_user_type" value="Society Member" disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                </Modal.Body>
            </Modal>
    </>
  )
}

export default SocTenants