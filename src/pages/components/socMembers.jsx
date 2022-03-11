import React, {useEffect, useState} from 'react'
import { Feature1} from './dashboard'
import * as SMStyle from '../../styles/soc-members.js'
import { Feature1Container, DashItemContainer1, Item ,Feature2Container, Title } from '../../styles/dashboard-Style'
import {RiPencilFill,RiEyeFill } from 'react-icons/ri'
import InfoModal from './Modals/memberInfoModal'
import {Modal} from 'react-bootstrap'

const SocMembers = (props) => {
  useEffect(() => {
    window.scroll(0,0)
  })

  const [isPopupVisible, setVisible] = useState(false)

  const MemberFName = ['Kavyesh', 'Aastha', 'Sidhraj', 'Kanishk', 'Mehul', 'Richard','Kunal', 'Manish','Vishal', 'Vidhi','Jainee']
  const MemberLName = ['Vohra', 'Arora', 'Mori', 'Shah', 'Choksi', 'D`Souza','Dhakan', 'Paul','Shah', 'Shah', 'Dodhiya']
  const Sr = [1,2,3,4,5,6,7,8,9,10]
  let i=0

  return (
  <>
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
                    <td><button className='buttonStyle'><RiPencilFill className='actionStyle'/></button><button className='buttonStyle'onClick={()=>{setVisible(!isPopupVisible)}}><RiEyeFill className='actionStyle'/></button></td>
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

  <Modal show={isPopupVisible} onHide={()=>{setVisible(false)}} centered>
    <Modal.Header closeButton>
      <Modal.Title>Member Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <table className='table'>
        <tbody>
          <tr className='table2'>
            <td>
              Name
            </td>
            <td>Kavyesh Vohra</td>
          </tr>
        </tbody>
      </table>
    </Modal.Body>
  </Modal>
  </>
  )
}

export default SocMembers