import ContentHeader from "./contentheader";
import '../../styles/useraccount.css';
import Images from "../../images";
import { Detailsform, FocusHtml, FormGroup, Heading1, TextSpan, Detailsformdate, ButtonWrapper, ButtonSubmit, Heading4, FormPassGroup } from "../../styles/register-styles";
import {Heading, HeadingCont} from '../../styles/societies'
import { TestimonialImageContainer } from '../../styles/home-style'
import Profile from '../../Images/Photo.jpg'
import {ContactContainer as ProfileImageContainer} from '../../styles/contact-style'
import {ProfileDetails, UploadButton, UserSettingContainer} from '../../styles/useraccount.js'
import Select from 'react-select'
import { Button, Modal, Row, Col } from "react-bootstrap";
import{DeleteCont} from '../../styles/complaints'
import { useState } from "react";
import {AiFillEyeInvisible, AiFillEye,AiOutlineCheckCircle} from 'react-icons/ai'
import { Heading5 } from "../../styles/soc-members";

const UserAccount=(props)=>{
    function inputChange(e) {
        if (e.target.value !== "") {
            e.target.classList.add('text');
        }
        else {
            e.target.classList.remove('text');
        }
    }
    const rentedoptions=[
        {value:"1", label: "Yes"},
        {value:"0", label:"No"}
    ]
    const iconStyle = {
        width: "1.5em",
        height: "1.5em",
    };
    const [passInputType, passInput] = useState("password");
    const [confpassInputType, confpassInput] = useState("password");
    const [passwordReq, setPasswordRequirements] = useState(0)
    const [step,setStep] = useState(0)
    function changePic(e) {
        const picture = document.querySelector("#profile-upload-lbl")
        const image = document.querySelector("#Profile-Image")
        picture.addEventListener('change', function(){
            const uploadedPic = this.files[0]
            if (uploadedPic)
            {
                const PicReader = new FileReader();
                PicReader.addEventListener('load',function(){
                    image.setAttribute('style', "background-image: url("+PicReader.result+")")
                })
                PicReader.readAsDataURL(uploadedPic)
            }
        })
    }
    const [changePassword, viewPasswordModal] = useState(false)
    // const customStyles = {
    //     select:{
    //         width: '10%', 
    //     }
    // }

    return(
        <>
            <HeadingCont>
                <Heading>User Account</Heading>
            </HeadingCont>
            <UserSettingContainer>
            <ProfileImageContainer style={{marginTop: '2em', width: "10%"}}>
                <TestimonialImageContainer className="profile-image" id="Profile-Image" style={{backgroundImage: `url(${Profile})`, backgroundSize: 'cover',position: "relative"}}/>
                <UploadButton type="file" accept="image/jpg" id="profile-upload-lbl"></UploadButton>
                <label for="profile-upload-lbl" onClick={changePic}>Change Picture</label>
            </ProfileImageContainer>
            <ProfileDetails>
                    <FormGroup className="custom_design_2">
                        <TextSpan>First Name</TextSpan>
                        <Detailsform type="text" name="user_first_name"value="Kavyesh" className="design_2"/>
                    </FormGroup>
                    <FormGroup className="custom_design_2">
                        <TextSpan>Last Name</TextSpan>
                        <Detailsform type="text" name="user_last_name" value="Vohra" className="design_2"/>
                    </FormGroup>
                    <FormGroup className="custom_design_2">
                        <TextSpan>Date Of Birth</TextSpan>
                        <Detailsformdate type="date"name="user_date_of_birth" className="design_2"/>
                    </FormGroup>
                    <FormGroup className="custom_design_2">
                        <TextSpan>Email</TextSpan>
                        <Detailsform type="email" name="user_email" value="vohrakavyesh@gmail.com" disabled className="design_2"/>
                    </FormGroup>
                    <FormGroup className="custom_design_2">
                        <TextSpan>Phone Number (+91)</TextSpan>
                        <Detailsform type="tel" name="user_primary_phone" value="+91-9979507228" className="design_2"/>
                    </FormGroup>
                    <FormGroup className="custom_design_2">
                        <TextSpan>Alternate Phone Number (+91)</TextSpan>
                        <Detailsform type="tel" name="user_alt_phone" value="-" className="design_2"/>
                    </FormGroup>
                    <FormGroup className="custom_design_2">
                        <TextSpan>User Type</TextSpan>
                        <Detailsform type="text" name="user_type" value="Society Member" disabled  className="design_2"/>
                    </FormGroup>
                    <FormGroup className="custom_design_2">
                        <TextSpan>Rented Flat</TextSpan>
                        <Select options={rentedoptions} className="rented-flats"/>
                    </FormGroup>
                    <FormGroup className="custom_design_2">
                        <TextSpan>House Name</TextSpan>
                        <Detailsform type="text" name="user_house_name" value="B-203" className="design_2" disabled/>
                    </FormGroup>
                    <FormGroup className="custom_design_2">
                        <TextSpan>House Type</TextSpan>
                        <Detailsform type="text" name="user_house_type" value="3 BHK" className="design_2" disabled/>
                    </FormGroup>
                    <ButtonWrapper style={{width: "-webkit-fill-available"}}>
                        <ButtonSubmit>Update</ButtonSubmit>
                    </ButtonWrapper>
                    <hr style={{border: "2px solid #d3d3d3", width: "100%"}}/>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "space-between", width: "100%", alignItems: "center"}}>
                        <div style={{width: "50%"}}>
                        <Heading4 style={{padding: "unset", margin: "0", textAlign: "left"}}>Change Your Password</Heading4>
                        <p style={{fontSize: "15px", color: "rgb(158 158 158)", marginTop: "0.5em", fontStyle:"italic"}}>We strongly suggest you to use password manager to store your passwords.</p>
                        </div>
                        <Button variant="outline-secondary" style={{padding: "10px", height: "50px"}} onClick={()=>{viewPasswordModal(true)}}>Set New Password</Button>
                    </div>
            </ProfileDetails>
            </UserSettingContainer>
            <Modal show={changePassword} onHide={()=>{viewPasswordModal(false)}} centered size="md">
            <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {passwordReq==1 ? <div style={{display: "block"}}>
                        <Heading5 className="passwordheading">Password Requirements:</Heading5>
                        <div>
                            <ol>
                                <li>Length : 8-15 characters</li>
                                <li>One special character</li>
                                <li>One number</li>
                                <li>One uppercase letter</li>
                                <li>One lowercase letter</li>
                            </ol>
                        </div>
                    </div> : null}
                    <Row>
                    <Col xs={12} md={12}>
                        <FormPassGroup style={{width: "100%", marginTop:"0.5em"}}>
                        <Detailsform type="password" id="oldpassword" name="change_pass_old" onChange={inputChange} />
                        <FocusHtml data-placeholder="Old Password"/>
                        </FormPassGroup>
                    </Col>
                    <Col xs={12} md={12}>
                        <FormPassGroup style={{width: "100%"}}>
                        <div style={{ display: "flex", alignItems: "center" ,borderBottom: "2px solid #000"}}>
                        <Detailsform type={passInputType} id="newpassword" name="change_pass_new" style={{borderBottom: "unset"}} onChange={inputChange} onInput={()=>setPasswordRequirements(1)} onBlur={()=>setPasswordRequirements(0)}/>
                        <FocusHtml data-placeholder="New Password"/>
                        {passInputType == 'password' ? (<AiFillEyeInvisible id="pwd-off-eye" style={iconStyle} className="icons-eye-off" onClick={() => passInput('text')} />) : (<AiFillEye id="" style={iconStyle} onClick={() => passInput('password')} />)}
                        </div>
                        </FormPassGroup>
                    </Col>
                    <Col xs={12} md={12}>
                        <FormPassGroup style={{width: "100%"}}>
                        <div style={{ display: "flex", alignItems: "center" ,borderBottom: "2px solid #000"}}>
                        <Detailsform type={confpassInputType} id="confirm-newpassword" name="change_pass_new_confirm" style={{borderBottom: "unset"}} onChange={inputChange}/>
                        <FocusHtml data-placeholder="Confirm Password"/>
                        {confpassInputType == 'password' ? (<AiFillEyeInvisible id="pwd-off-eye" style={iconStyle} className="icons-eye-off" onClick={() => confpassInput('text')} />) : (<AiFillEye id="" style={iconStyle} onClick={() => confpassInput('password')} />)}
                        </div>
                        </FormPassGroup>
                    </Col>
                    <Col xs={12} md={12} style={{marginBottom: "2em"}}>
                        <ButtonWrapper>
                            <ButtonSubmit onClick={()=>setStep(1)}>Submit</ButtonSubmit>
                        </ButtonWrapper>
                    </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            <Modal show={step} onHide={()=>{setStep(0)}} centered size="md" onEnter={()=>viewPasswordModal(0)}>
            <Modal.Header closeButton style={{borderBottom: "none"}}>
            </Modal.Header>
            <Modal.Body>
                <DeleteCont>
                    <AiOutlineCheckCircle style={{fontSize: "8em", color: "green"}}/>
                        <h3>Password Updated Successfully!</h3>
                        <p>You may close this window.</p>
                </DeleteCont>
            </Modal.Body>
            </Modal>
        </>

    )
    function inputChange(e) {
        if (e.target.value !== "") {
            e.target.classList.add('text');
        }
        else {
            e.target.classList.remove('text');
        }
    }
}
export default UserAccount;