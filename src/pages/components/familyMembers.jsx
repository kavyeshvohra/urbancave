import '../../styles/tenants.css';
// import {AiFillEye,FaTrash,MdModeEditOutline} from 'react-icons/all';
import {AiFillEye} from 'react-icons/ai'
import {FaTrash} from 'react-icons/fa'
import {MdModeEditOutline} from 'react-icons/md'
import { useState } from 'react';
import MemberInfoModal from './Modals/familyMemberInfoModal';
import CreateFamilyMemberModal from './Modals/createFamilyMemberModal';

const FamilyMembers = (props)=>{
    const [registerFamily,setRegisterFamily] = useState();
    
    const [ displayInfo , setDisplayInfo ] = useState(0);
    const [ memberData,setMemberData] = useState();
    const [ action,setAction ] = useState();

    return(<>
            { displayInfo ?( <MemberInfoModal userType={props.userType} action={action} data={memberData} closeModal={setDisplayInfo}/> ):(<></>) }
            { registerFamily ?(<CreateFamilyMemberModal changeRegisterFamily={setRegisterFamily}/>):(<></>)}
            <div className="galleryButtons">
                <div className="galleryCaption">Family Members</div>
                {
                    props.userType=="SocietyAdmin"?(<button className="galleryButtonControls" onClick={()=>setRegisterFamily(1)}>
                        Register Family Member
                    </button>):(<></>)
                }
            </div>
            <div className="tenantsContainer">
                <table className="tenantsTable">
                    <tr>
                        <td className="tenantsCol0">Sr</td>
                        <td className="tenantsCol1">First Name</td>
                        <td className="tenantsCol2">Last Name</td>
                        <td className="tenantsCol1">Gender</td>
                        <td className="tenantsCol1">Age</td>
                        <td className="tenantsCol5">Relation</td>
                        { props.userType=="Admin"?(<>
                            <td className="tenantsCol2">Society</td>
                            <td className="tenantsCol1">User</td>
                            </>):(<></>)}
                        { props.userType=="SocietyAdmin"?(<td className="tenantsCol2">User</td>):(<></>)}
                        {/* <td className="tenantsCol6">Documents</td>
                        <td className="tenantsCol7">Proof of Identification</td>
                        <td className="tenantsCol8">Rent Amount</td> */}
                        <td className="tenantsCol9">Actions</td>
                    </tr>
                        <Row 
                            sr="1"
                            userType={props.userType}
                            society="soc ABC"
                            fname="sidhraj"
                            lname="mori"
                            gender="male"
                            age="21"
                            relation="sibling"
                            user="sid@gmail.com"
                            
                                
                            modal={setDisplayInfo}
                            changeMemberData={setMemberData}
                            changeAction={setAction}
                            />
                        <Row 
                            sr="1"
                            userType={props.userType}
                            society="soc ABC"
                            fname="sidhraj"
                            lname="mori"
                            gender="male"
                            age="21"
                            relation="sibling"
                            user="sid@gmail.com"
                            
                            modal={setDisplayInfo}
                            changeMemberData={setMemberData}
                            changeAction={setAction}
                            />
                        <Row 
                            sr="1"
                            userType={props.userType}
                            society="soc ABC"
                            fname="sidhraj"
                            lname="mori"
                            gender="male"
                            age="21"
                            relation="sibling"
                            user="sid@gmail.com"
                            
                                
                            modal={setDisplayInfo}
                            changeMemberData={setMemberData}
                            changeAction={setAction}
                            />
                        <Row 
                           sr="1"
                           userType={props.userType}
                           society="soc ABC"
                           fname="sidhraj"
                           lname="mori"
                           gender="male"
                           age="21"
                           relation="sibling"
                           user="sid@gmail.com"
                           
                                
                           modal={setDisplayInfo}
                           changeMemberData={setMemberData}
                           changeAction={setAction}
                            />
                        <Row 
                            sr="1"
                            userType={props.userType}
                            society="soc ABC"
                            fname="sidhraj"
                            lname="mori"
                            gender="male"
                            age="21"
                            relation="sibling"
                            user="sid@gmail.com"

                            modal={setDisplayInfo}
                            changeMemberData={setMemberData}
                            changeAction={setAction}
                            />
                </table>
            <div>
                <div>showing 1 out of 10 entries</div>
            </div>
            </div>
    </>);
}

const Row=(props)=>{

    const [hover,setHover] = useState(0);

    const data={
        fname:props.fname,
        lname:props.lname,
        age:props.age,
        gender:props.gender,
        relation:props.relation,
        society:props.society,
        user:props.user,
    }

    return(
        <>
            <tr className="notHeading">
                <td>
                    <div>{props.sr}</div>
                </td>
                <td>
                    <div className="tenantFName">{props.fname}</div>
                </td>
                <td>
                    <div className="tenantLName">{props.lname}</div>
                </td>
                
                <td>
                    <div>{props.gender}</div>
                </td>

                <td>
                    <div>{props.age}</div>
                </td>
                
                <td>
                    <div>{props.relation}</div>
                </td>
                {
                    props.userType=="Admin"?
                        (<>
                            <td>
                                <div>{props.society}</div>
                            </td>
                            <td>
                                <div>{props.user}</div>
                            </td>
                        </>):(<></>)
                }
                {
                    props.userType=="SocietyAdmin"?
                    (<>
                        <td>
                            <div>{props.user}</div>
                        </td>
                    </>):(<></>)
                }
                {/* <td>
                    <div className="tenantDocs">{props.documents}</div>
                </td>
                <td>
                    <div className="tenantPOI">{props.poi}</div>
                </td>
                <td>
                    <div className="tenantRent">{props.rent}</div>
                </td> */}
                <td>
                    <div className="noticeActions">
                        <AiFillEye size="2em" color={hover=="eye"?"#FEB6B6":"#707A8A"}
                            onMouseOver={()=>setHover("eye")}
                            onMouseLeave={()=>setHover(0)}
                            onClick={()=>{props.changeAction("show");props.changeMemberData(data);props.modal(1) }}
                        />
                        {

                            props.userType=="SocietyMember"?(<MdModeEditOutline size="2em" color={hover=="edit"?"#FEB6B6":"#707A8A"}
                                onMouseOver={()=>setHover("edit")}
                                onMouseLeave={()=>setHover(0)}
                                onClick={()=>{props.changeAction("edit");props.changeMemberData(data);props.modal(1) }}
                            />):(<></>)
                        }
                        {
                        
                            props.userType=="Admin"?(<FaTrash size="1.6em" color={hover=="bin"?"#FEB6B6":"#707A8A"}
                                onMouseOver={()=>setHover("bin")}
                                onMouseLeave={()=>setHover(0)}
                            />):(<></>)
                        }
                    </div>
                </td>
            </tr>
        </>
    );
}

export default FamilyMembers;