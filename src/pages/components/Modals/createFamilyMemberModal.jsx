import Images from "../../../images";

import {AiOutlineFile,AiOutlineCloseCircle} from 'react-icons/all';
import { useState } from "react";
import Select from "react-select";

const CreateFamilyMemberModal=(props)=>{

    const options = [
        { value: 'Male', label: 'Male' },
        { value: 'Donations', label: 'Female' },
        { value: 'Others', label: 'Others' },
    ]

    const [gender , setGender] = useState();

    const errStyle={
        width:'100%',
        marginTop:"-0.5em",
        color:"red",
        alignText:"center",
    }

    const validateNotice = ()=>{
        let error="";
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const age = document.getElementById("age").value;
        const relation = document.getElementById("relation").value;

        
        if(fname.trim().length < 5){
            error+="<div>please provide valid first name!</div>";
        }
        if(lname.trim().length < 2){
            error+="<div>please provide valid last name!</div>";
        }
        if(relation.trim().length < 5){
            error+="<div>please provide valid relation!</div>";
        }
        if(gender == null ){
            error+="<div>please select gender!</div>";
        }
        if(age<0){
            error+="<div>please enter valid age!</div>";
        }

            document.getElementById("errorDiv").innerHTML=error;
    }

    return(
        <div className="dimScreen">
            <div className="createNoticeModalContainer">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Register Family Member</div>
                    <AiOutlineCloseCircle onClick={()=>props.changeRegisterFamily(0)} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="CreateGalleryModalBody">
                    <div className="CreateGalleryModalLabel">First Name</div>
                    <input className="createNoticeModalInput" id="fname" ></input>
                    <div className="CreateGalleryModalLabel">Last Name</div>
                    <input className="createNoticeModalInput" id="lname"/>
                    <div className="CreateGalleryModalLabel">Gender</div>
                    
                    <Select 
                        options={options}
                        onChange={setGender}
                    />

                    <div className="CreateGalleryModalLabel">Age</div>
                    <input type="number" className="createNoticeModalInput" id="age"/>
                    <div className="CreateGalleryModalLabel">Relation</div>
                    <input className="createNoticeModalInput" id="relation"/>
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

export default CreateFamilyMemberModal;