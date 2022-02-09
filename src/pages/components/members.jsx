
import '../../styles/tenants.css';
import {AiFillEye,FaTrash,MdModeEditOutline} from 'react-icons/all';
import { useState } from 'react';
import MemberInfoModal from './memberInfoModal';

const Members = (props)=>{
    
    const [ displayInfo , setDisplayInfo ] = useState(0);
    const [ memberData,setMemberData] = useState();
    const [ action,setAction ] = useState();

    return(<>
            { displayInfo ?( <MemberInfoModal action={action} data={memberData} closeModal={setDisplayInfo}/> ):(<></>) }
            <div className="galleryButtons">
                <div className="galleryCaption">Society Members</div>
            </div>
            <div className="tenantsContainer">
                <table className="tenantsTable">
                    <tr>
                        <td className="tenantsCol0">Sr</td>
                        <td className="tenantsCol1">First Name</td>
                        <td className="tenantsCol2">Last Name</td>
                        <td className="tenantsCol2">House</td>
                        { props.userType=="Admin"?(<td className="tenantsCol2">Society</td>):(<></>)}
                        <td className="tenantsCol4">Phone Number</td>
                        <td className="tenantsCol5">Email</td>
                        {/* <td className="tenantsCol6">Documents</td>
                        <td className="tenantsCol7">Proof of Identification</td>
                        <td className="tenantsCol8">Rent Amount</td> */}
                        <td className="tenantsCol9">Actions</td>
                    </tr>
                        <Row 
                            sr="1"
                            fname="Sidhraj"
                            lname="Mori"
                            dob="01/09/2001"
                            email="sdkm7016816547@gmail.com"
                            phone="910679097"
                            phoneA="9876543210"
                            userType={props.userType}
                            society="soc ABC"
                            housename="B-7"
                            housetype="2BHK"
                            isrented="false"
                            isdeleted="false"
                                
                            modal={setDisplayInfo}
                            changeMemberData={setMemberData}
                            changeAction={setAction}
                            />
                        <Row 
                            sr="1"
                            fname="Sidhraj"
                            lname="Mori"
                            dob="01/09/2001"
                            email="sdkm7016816547@gmail.com"
                            phone="910679097"
                            phoneA="9876543210"
                            userType={props.userType}
                            society="soc ABC"
                            housename="B-7"
                            housetype="2BHK"
                            isrented="false"
                            isdeleted="false"
                                
                            modal={setDisplayInfo}
                            changeMemberData={setMemberData}
                            changeAction={setAction}
                            />
                        <Row 
                            sr="1"
                            fname="Sidhraj"
                            lname="Mori"
                            dob="01/09/2001"
                            email="sdkm7016816547@gmail.com"
                            phone="910679097"
                            phoneA="9876543210"
                            userType={props.userType}
                            society="soc ABC"
                            housename="B-7"
                            housetype="2BHK"
                            isrented="false"
                            isdeleted="false"
                                
                            modal={setDisplayInfo}
                            changeMemberData={setMemberData}
                            changeAction={setAction}
                            />
                        <Row 
                           sr="1"
                           fname="Sidhraj"
                           lname="Mori"
                           dob="01/09/2001"
                           email="sdkm7016816547@gmail.com"
                           phone="910679097"
                           phoneA="9876543210"
                           userType={props.userType}
                           society="soc ABC"
                           housename="B-7"
                           housetype="2BHK"
                           isrented="false"
                           isdeleted="false"
                                
                           modal={setDisplayInfo}
                           changeMemberData={setMemberData}
                           changeAction={setAction}
                            />
                        <Row 
                            sr="1"
                            fname="Sidhraj"
                            lname="Mori"
                            dob="01/09/2001"
                            email="sdkm7016816547@gmail.com"
                            phone="910679097"
                            phoneA="9876543210"
                            userType={props.userType}
                            society="soc ABC"
                            housename="B-7"
                            housetype="2BHK"
                            isrented="false"
                            isdeleted="false"
                                
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
        dob:props.dob,
        email:props.email,
        phone:props.phone,
        phoneA:props.phoneA,
        type:props.userType,
        society:props.society,
        housename:props.housename,
        housetype:props.housetype,
        isrented:props.isrented,
        isdeleted:props.isdeleted,
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
                    <div>{props.housename}</div>
                </td>
                
                {
                    props.userType=="Admin"?(<td>
                        <div>{props.society}</div>
                    </td>):(<></>)
                }
                <td>
                    <div className="tenantPhone">{props.phone}</div>
                </td>
                <td>
                    <div className="tenantEmail">{props.email}</div>
                </td>
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

export default Members;