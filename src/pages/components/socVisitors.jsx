import React, {useEffect, useState} from 'react'
import {Container, Heading1, Heading5} from '../../styles/soc-members'
import * as Vstyle from '../../styles/visitor-style'
import {AiOutlineSearch, AiOutlineUserAdd} from 'react-icons/ai'
import Images from '../../images' 
import { Table, Modal, Row, Col } from 'react-bootstrap'
import { ButtonContainer } from '../../styles/complaints'
import { ButtonSubmit, ButtonWrapper, Detailsform, FocusHtml, FormGroup, TextSpan } from '../../styles/register-styles'
import toast,{ Toaster } from 'react-hot-toast'

import { Cookies, useCookies } from 'react-cookie';
import { useParams } from "react-router-dom";

const SocVisitors = (props) => {
  const [createVisitor, setCreateVisitor] = useState(false);
  const [houseInfo, setHouseInfo] = useState(0)
  const [Isloading, setLoading] = useState(false)
  const [visitors,setVisitors] = useState(null);

  const [society,setSociety] = useState();
  const [userCookies,setUserCookies] = useCookies();
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

  const getVisitors = async () => {
      const memberData = {"jwtToken":userCookies.user,"society_id":society.society_id};
      

      const memberURL="http://192.168.1.67:8080/visitors";
      const memberOptions={
          method:"POST",
          headers: {
              "Content-Type": "application/json",
          },
          body:JSON.stringify(memberData)
      }

      const memberResponse = await fetch(memberURL,memberOptions);
      const memberRes = await memberResponse.json();
      
      console.log(memberRes);
      setVisitors(memberRes);
      
  }

  useEffect( async ()=>{
    if( society != null && visitors==null){
      getVisitors();
    }
  })

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
  if(society != null){
  return (
    <>
      <Toaster/>
      <Container>
        <Heading1>{society.society_name}</Heading1>
        <Heading5>Society Admin: <span style={{fontStyle: "italic", fontWeight: "400", textDecoration: "underline", textDecorationColor: "#FAB6B6"}}>Patel Manikbhai</span></Heading5>
      </Container>
      <ButtonContainer>
          <button className='newTicket' onClick={()=>{setCreateVisitor(true)}}><AiOutlineUserAdd/> GENERATE LINK</button>
          <div>
            <input type="search" placeholder='Search'/>
            <button className='search-icon' type="submit"><AiOutlineSearch/></button>
          </div>
      </ButtonContainer>
      <Vstyle.Container>
        <Table id="visitor-info" responsive="sm" bordered hover striped >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>House</th>
              <th>Entry Time</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>

            {
              visitors != null ?(
                visitors.map((visitor,index=0)=>{
                  return(
                      <tr>
                        <td>{++index}</td>
                        <td>{visitor.first_name}</td>
                        <td>{visitor.last_name}</td>
                        <td style={houseStyle} onClick={()=>{setHouseInfo(true)}}>{visitor.house_name}</td>
                        <td>{visitor.entry_time}</td>
                        <td>+91 {visitor.phone_number}</td>
                      </tr>
                  )
                })
              ):(<center><h1>Loading...</h1></center>)
            }
          </tbody>
        </Table>
      </Vstyle.Container>
      <Modal show={createVisitor} onHide={()=>{setCreateVisitor(false)}} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Generate Visitor Link</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* <div style={{textAlign: "right"}}>
                    <span>User Name: <span style={{fontStyle: "italic", color: "#3e444e", fontWeight: "500"}}>Patel Manikbhai</span></span>
                </div> */}
                <form>
                    <FormGroup style={{width: "100%", marginTop: "1em"}}>
                      <TextSpan>Visitor Code</TextSpan>
                      <Detailsform type="text" id="unq_code" name="unique_code" disabled/>
                    </FormGroup>
                    <ButtonWrapper style={{marginBottom: "1em"}}>
                        <ButtonSubmit type="submit" id="submit" onClick={makeid} disabled={Isloading}>{Isloading ? "Generating" : "Generate"}</ButtonSubmit>
                </ButtonWrapper>
                </form>
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
  )}
  else{
    return(
    <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <center>
          <h1>Loading...</h1>
      </center>
    </>
    );
  }
  function makeid(e) {
    setLoading(1)
    e.preventDefault()
    var result = ''
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 6; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    let uniquecode = document.getElementById('unq_code')
    uniquecode.setAttribute("value", result)
    uniquecode.select();
    uniquecode.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
    navigator.clipboard.writeText('https://localhost:3000/'+ uniquecode.value);
    // setUserCookies("visitorLink",uniquecode.value);
    props.changeVisitor("visitorLink",uniquecode.value);
    console.log(userCookies);

  }
}

export default SocVisitors