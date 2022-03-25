import '../../../styles/displayInfoModal.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { useEffect,useState } from 'react';

const FamilyMemberInfoModal=(props)=>{
    console.log(props.data);

    const [type,setType] = useState();

    useEffect(()=>{
        if (props.action == "show"){
            setType(true);
        }
        else{
            setType(false);
        }
    })

    return(<>
        <div className="dimScreen">
            <div className="displayInfoContent">
                <div className="CreateGalleryModalHeader">
                    <div className="CreateGalleryModalCaption">Family Member's Details</div>
                    <AiOutlineCloseCircle onClick={()=>props.closeModal()} size="2.2em" color="#FEB6B6"/>
                </div>
                <div className="visitorInfoContainer">
                    <div className="dataContainer1">
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">First Name:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.fname} readOnly={type}/>
                        </div>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Last Name:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.lname} readOnly={type}/>
                        </div>
                    </div>

                    <div className='dataContainer1'>
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Gender:</lable>
                            <input className="displayInfoInput" defaultValue={props.data.gender} readOnly={type}/>
                        </div>
                        
                        <div className="visitorDataContainer">
                            <lable className="displayInfoLable">Age:</lable>
                            <input className="displayInfoInput0" defaultValue={props.data.age} readOnly={type}/>
                        </div>
                    </div>

                    {
                        props.userType=="Admin"?(<div className="dataContainer1">
                            
                            <div className="dataContainer1">
                                <div className="visitorDataContainer">
                                    <lable className="displayInfoLable">Society:</lable>
                                    <input className="displayInfoInput" defaultValue={props.data.society} readOnly={type}/>
                                </div>
                                <div className="visitorDataContainer">
                                    <lable className="displayInfoLable">User:</lable>
                                    <input className="displayInfoInput" defaultValue={props.data.user} readOnly={type}/>
                                </div>
                            </div>
                        </div>):(<></>)
                    }

                    {
                        props.userType=="SocietyAdmin"?(<div className="dataContainer1">
                            
                            <div className="visitorDataContainer">
                                <lable className="displayInfoLable">User:</lable>
                                <input className="displayInfoInput" defaultValue={props.data.user} readOnly={type}/>
                            </div>
                        </div>):(<></>)
                    }

                    <div className="visitorDataContainer">
                        <lable className="displayInfoLable">Relation:</lable>
                        <input className="displayInfoInput" defaultValue={props.data.relation} readOnly={type}/>
                    </div>

                    {
                        props.action!="show"?(<div className="visitorDataButtons">
                            <button className="galleryButtonControls">Save</button>
                            <button className="galleryButtonControls" onClick={()=>props.closeModal()}>Cancel</button>
                        </div>):(<></>)
                    }
                </div>
            </div>
        </div>
    </>);
}

export default FamilyMemberInfoModal;