import Images from "../../../images";
import {AiOutlineFile,AiOutlineCloseCircle} from 'react-icons/ai';
import { useState } from "react";

const CreateTenantModal=(props)=>{

    const errStyle={
        width:'100%',
        marginTop:"-0.5em",
        color:"red",
        alignText:"center",
    }
    const permStyle={
        height:"50em",
    }
    const sStyle={
        overflowY:"scroll",
    }

    const [css,setCss] = useState();

    const validateNotice = ()=>{
        
        const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const isNumber = /\d/;
        let error="";

        const caption = document.getElementById("fname").value;
        const desc = document.getElementById("lname").value;
        const POI = document.getElementById("poi").files[0];
        const docs = document.getElementById("docs").files[0];
        const email=document.getElementById("email").value ;
        const phone=document.getElementById("phone").value;
 

        if(!emailReg.test(email)){
            error+=`<div>Please Enter a valid email!</div>`;
            
        }
        if(!isNumber.test(phone) && phone.length!=10){
            error+=`<div>Please Enter valid Phonenumber!</div>`;
        }

        if(!POI){
            error+="<div>Please Upload Proof of Identification!</div>";
        }
        
        if(!docs){
            error+="<div>Please Upload Rent Agreement!</div>";
        }
        if ( POI ){
            let ext=POI.name.split(".");

            if(ext[ext.length-1] != "pdf"){
                error+="<div>Uploaded POI file is not pdf!</div>";
            }
        }
        if( docs ){
            let ext=docs.name.split(".");

            if(ext[ext.length-1] != "pdf"){
                error+="<div>Uploaded Rent Agreement file is not pdf!</div>";
            }
        }
        if(caption.trim().length < 5){
            error+="<div>please enter caption of at least 5 character!</div>";
        }
        if(desc.trim().length < 20){
            error+="<div>please enter discription of at least 20 character!</div>";
        }

        if(error.length>0){
            setCss(sStyle);
        }

            document.getElementById("errorDiv").innerHTML=error;
    }

    return(
        <div className="dimScreen">
            <div className="createTenantModalContainer" style={css}>
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Register Tenant</div>
                    <AiOutlineCloseCircle onClick={()=>props.changeTenant(0)} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="CreateGalleryModalBody">
                    <div className="CreateGalleryModalLabel">First Name</div>
                    <input className="createNoticeModalInput" id="fname" ></input>
                    <div className="CreateGalleryModalLabel">Last Name</div>
                    <input className="createNoticeModalInput" id="lname"/>
                    <div className="CreateGalleryModalLabel">Phone Number</div>
                    <input type="phone" className="createNoticeModalInput" id="phone" ></input>
                    <div className="CreateGalleryModalLabel">Email</div>
                    <input type="email" className="createNoticeModalInput" id="email"/>
                </div>
                <div className="createNoticeModalFileContainer">
                    <div className="CreateGalleryModalLabel">Proof Of Identification(Upload Pdf only)</div>
                    <div className="createNoticeModalFile">
                        <AiOutlineFile size="2.2em" color="#FEB6B6"/>
                        <input type="file" className="createNoticeUploadText" id="poi"/>
                    </div>
                </div>
                <div className="createNoticeModalFileContainer">
                    <div className="CreateGalleryModalLabel">Rent Agreement(Upload Pdf only)</div>
                    <div className="createNoticeModalFile">
                        <AiOutlineFile size="2.2em" color="#FEB6B6"/>
                        <input type="file" className="createNoticeUploadText" id="docs"/>
                    </div>
                </div>
                <div style={errStyle} id="errorDiv">
                </div>
                <div className="createNoticeModalButtons">
                    <button className="createNoticeModalPost" onClick={()=>validateNotice()} >Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CreateTenantModal;