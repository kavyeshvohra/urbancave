import Images from '../../images.js';
import '../../styles/tenants.css';
import {AiFillEye,FaTrash,MdModeEditOutline} from 'react-icons/all';
import TenantInfoModal from './tenantInfoModal.jsx';
import { useState } from 'react';
import CreateTenantModal from './createTenantModal.jsx';

const Tenants = (props)=>{
    const [ tenantModal , setTenantModal ] = useState(0);
    
    const [ displayInfo , setDisplayInfo ] = useState(0);
    const [ tenantData,setTenantData] = useState();
    const [ action,setAction ] = useState();
    return(
        <>
            { displayInfo ?( <TenantInfoModal action={action} data={tenantData} closeModal={setDisplayInfo}/> ):(<></>) }
            { tenantModal ?(<CreateTenantModal changeTenant={setTenantModal} />):(<></>) }
            <div className="galleryButtons">
                
                <div className="galleryCaption">Tenants</div>
                {
                    props.userType!="Admin"?(<button className="galleryButtonControls" onClick={()=>setTenantModal(1)}>Add New Tenant</button>):(<></>)
                }
            </div>
            <div className="tenantsContainer">
                <table className="tenantsTable">
                    <tr>
                        <td className="tenantsCol0">Sr</td>
                        <td className="tenantsCol1">First Name</td>
                        <td className="tenantsCol2">Last Name</td>
                        <td className="tenantsCol2">House</td>
                        {
                            props.userType=="Admin"?(<td className="tenantsCol2">Society</td>):(<></>)
                        }
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
                            phone="910679097"
                            email="sdkm7016816547@gmail.com"
                            documents="No Documents"
                            poi="No POI"
                            rent="15000"
                            society="soc ABC"
                            userType={props.userType}
                            house="B-7"
                            modal={setDisplayInfo}
                            changeTenantData={setTenantData}
                            changeAction={setAction}
                            />
                        <Row 
                            sr="2"
                            fname="Sidhraj"
                            lname="Mori"
                            phone="910679097"
                            email="sdkm7016816547@gmail.com"
                            documents="No Documents"
                            poi="No POI"
                            rent="15000"
                            society="soc ABC"
                            userType={props.userType}
                            house="B-7"
                            modal={setDisplayInfo}
                            changeTenantData={setTenantData}
                            changeAction={setAction}
                            />
                        <Row 
                            sr="3"
                            fname="Sidhraj"
                            lname="Mori"
                            phone="910679097"
                            email="sdkm7016816547@gmail.com"
                            documents="No Documents"
                            poi="No POI"
                            rent="15000"
                            society="soc ABC"
                            userType={props.userType}
                            house="B-7"
                            modal={setDisplayInfo}
                            changeTenantData={setTenantData}
                            changeAction={setAction}
                            />
                        <Row 
                            sr="4"
                            fname="Sidhraj"
                            lname="Mori"
                            phone="910679097"
                            email="sdkm7016816547@gmail.com"
                            documents="No Documents"
                            poi="No POI"
                            rent="15000"
                            society="soc ABC"
                            userType={props.userType}
                            house="B-7"
                            modal={setDisplayInfo}
                            changeTenantData={setTenantData}
                            changeAction={setAction}
                            />
                        <Row 
                            sr="5"
                            fname="Sidhraj"
                            lname="Mori"
                            phone="910679097"
                            email="sdkm7016816547@gmail.com"
                            documents="No Documents"
                            poi="No POI"
                            rent="15000"
                            society="soc ABC"
                            userType={props.userType}
                            house="B-7"
                            modal={setDisplayInfo}
                            changeTenantData={setTenantData}
                            changeAction={setAction}
                            />
                </table>
            <div>
                <div>showing 1 out of 10 entries</div>
            </div>
            </div>
        </>
    );
}

const Row=(props)=>{

    const [hover,setHover] = useState(0);
    const data={
        fname:props.fname,
        lname:props.lname,
        house:props.house,
        society:props.society,
        phone:props.phone,
        email:props.email,
        documents:props.documents,
        poi:props.poi,
        rent:props.rent,
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
                    <div>{props.house}</div>
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
                            onClick={()=>{props.changeAction("show");props.changeTenantData(data);props.modal(1) }}
                        />
                        {

                            props.userType!="Admin"?(<MdModeEditOutline size="2em" color={hover=="edit"?"#FEB6B6":"#707A8A"}
                                onMouseOver={()=>setHover("edit")}
                                onMouseLeave={()=>setHover(0)}
                                onClick={()=>{console.log(0);props.changeAction("edit");props.changeTenantData(data);props.modal(1) }}
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

export default Tenants;