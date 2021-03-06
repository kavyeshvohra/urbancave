import '../../styles/tenants.css';
// import {AiFillEye,FaTrash,MdModeEditOutline} from 'react-icons/all';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import soc1_img from '../../Images/soc1.jpg'
import soc2_img from '../../Images/soc2.jpg'
import soc3_img from '../../Images/soc3.jpg'
import soc4_img from '../../Images/soc4.jpg'
import * as Sstyle from '../../styles/societies'

const Tenants = (props)=>{


    const [socs,setSocieties] = useState();

    useEffect(async ()=>{
        if(socs == null){
        console.log(props.cookies);
        const data={"jwtToken":props.cookies.user,"id":null};
        const url="http://192.168.1.67:8080/getSocieties";
        const options={
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        }
        const response = await fetch(url,options);
        const res = await response.json();
        console.log(res);
        setSocieties(res);
        }
    },[socs]);

    useEffect(()=>{
        window.scroll(0,0)
    })
    const navigate = useNavigate();
    // const {pathname} = useLocation();
    // const OpenView = () =>
    // {
    //     navigate(`${pathname}/${soc}`)
    // }
    
    const gotoVisitors = (id)=>{
        navigate(`/dashboard/tenants/${id}`);
    }
    const Image = [soc1_img,soc2_img,soc3_img,soc4_img,soc1_img,soc3_img]
    let image = 0 ;
    
    if(socs != null ){
        return (
        <>
            <Sstyle.HeadingCont>
                    <Sstyle.Heading>Tenants</Sstyle.Heading>
            </Sstyle.HeadingCont>
            <Sstyle.Society>
                {socs.map((soc)=>{
                    return(
                    <Sstyle.SocietyCont onClick={()=>gotoVisitors(soc.society_id)}>
                    <Sstyle.Image src={Image[image++]}/>
                    <Sstyle.Content>
                        <h3>{soc.society_name}</h3>
                        <p>{soc.address}</p>
                    </Sstyle.Content>
                    </Sstyle.SocietyCont>
                    );
                })
                }
            </Sstyle.Society>
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
}
export default Tenants;

// const [ tenantModal , setTenantModal ] = useState(0);
    
//     const [ displayInfo , setDisplayInfo ] = useState(0);
//     const [ tenantData,setTenantData] = useState();
//     const [ action,setAction ] = useState();
//     return(
//         <>
//             { displayInfo ?( <TenantInfoModal action={action} data={tenantData} closeModal={setDisplayInfo}/> ):(<></>) }
//             { tenantModal ?(<CreateTenantModal changeTenant={setTenantModal} />):(<></>) }
//             <div className="galleryButtons">
                
//                 <div className="galleryCaption">Tenants</div>
//                 {
//                     props.userType!="Admin"?(<button className="galleryButtonControls" onClick={()=>setTenantModal(1)}>Add New Tenant</button>):(<></>)
//                 }
//             </div>
//             <div className="tenantsContainer">
//                 <table className="tenantsTable">
//                     <tr>
//                         <td className="tenantsCol0">Sr</td>
//                         <td className="tenantsCol1">First Name</td>
//                         <td className="tenantsCol2">Last Name</td>
//                         <td className="tenantsCol2">House</td>
//                         {
//                             props.userType=="Admin"?(<td className="tenantsCol2">Society</td>):(<></>)
//                         }
//                         <td className="tenantsCol4">Phone Number</td>
//                         <td className="tenantsCol5">Email</td>
//                         {/* <td className="tenantsCol6">Documents</td>
//                         <td className="tenantsCol7">Proof of Identification</td>
//                         <td className="tenantsCol8">Rent Amount</td> */}
//                         <td className="tenantsCol9">Actions</td>
//                     </tr>
//                         <Row 
//                             sr="1"
//                             fname="Sidhraj"
//                             lname="Mori"
//                             phone="910679097"
//                             email="sdkm7016816547@gmail.com"
//                             documents="No Documents"
//                             poi="No POI"
//                             rent="15000"
//                             society="soc ABC"
//                             userType={props.userType}
//                             house="B-7"
//                             modal={setDisplayInfo}
//                             changeTenantData={setTenantData}
//                             changeAction={setAction}
//                             />
//                         <Row 
//                             sr="2"
//                             fname="Sidhraj"
//                             lname="Mori"
//                             phone="910679097"
//                             email="sdkm7016816547@gmail.com"
//                             documents="No Documents"
//                             poi="No POI"
//                             rent="15000"
//                             society="soc ABC"
//                             userType={props.userType}
//                             house="B-7"
//                             modal={setDisplayInfo}
//                             changeTenantData={setTenantData}
//                             changeAction={setAction}
//                             />
//                         <Row 
//                             sr="3"
//                             fname="Sidhraj"
//                             lname="Mori"
//                             phone="910679097"
//                             email="sdkm7016816547@gmail.com"
//                             documents="No Documents"
//                             poi="No POI"
//                             rent="15000"
//                             society="soc ABC"
//                             userType={props.userType}
//                             house="B-7"
//                             modal={setDisplayInfo}
//                             changeTenantData={setTenantData}
//                             changeAction={setAction}
//                             />
//                         <Row 
//                             sr="4"
//                             fname="Sidhraj"
//                             lname="Mori"
//                             phone="910679097"
//                             email="sdkm7016816547@gmail.com"
//                             documents="No Documents"
//                             poi="No POI"
//                             rent="15000"
//                             society="soc ABC"
//                             userType={props.userType}
//                             house="B-7"
//                             modal={setDisplayInfo}
//                             changeTenantData={setTenantData}
//                             changeAction={setAction}
//                             />
//                         <Row 
//                             sr="5"
//                             fname="Sidhraj"
//                             lname="Mori"
//                             phone="910679097"
//                             email="sdkm7016816547@gmail.com"
//                             documents="No Documents"
//                             poi="No POI"
//                             rent="15000"
//                             society="soc ABC"
//                             userType={props.userType}
//                             house="B-7"
//                             modal={setDisplayInfo}
//                             changeTenantData={setTenantData}
//                             changeAction={setAction}
//                             />
//                 </table>
//             <div>
//                 <div>showing 1 out of 10 entries</div>
//             </div>
//             </div>
//         </>
//     );
// }

// const Row=(props)=>{

//     const [hover,setHover] = useState(0);
//     const data={
//         fname:props.fname,
//         lname:props.lname,
//         house:props.house,
//         society:props.society,
//         phone:props.phone,
//         email:props.email,
//         documents:props.documents,
//         poi:props.poi,
//         rent:props.rent,
//     }

//     return(
//         <>
//             <tr className="notHeading">
//                 <td>
//                     <div>{props.sr}</div>
//                 </td>
//                 <td>
//                     <div className="tenantFName">{props.fname}</div>
//                 </td>
//                 <td>
//                     <div className="tenantLName">{props.lname}</div>
//                 </td>
                
//                 <td>
//                     <div>{props.house}</div>
//                 </td>
                
//                 {
//                     props.userType=="Admin"?(<td>
//                         <div>{props.society}</div>
//                     </td>):(<></>)
//                 }
//                 <td>
//                     <div className="tenantPhone">{props.phone}</div>
//                 </td>
//                 <td>
//                     <div className="tenantEmail">{props.email}</div>
//                 </td>
//                 {/* <td>
//                     <div className="tenantDocs">{props.documents}</div>
//                 </td>
//                 <td>
//                     <div className="tenantPOI">{props.poi}</div>
//                 </td>
//                 <td>
//                     <div className="tenantRent">{props.rent}</div>
//                 </td> */}
//                 <td>
//                     <div className="noticeActions">
//                         <AiFillEye size="2em" color={hover=="eye"?"#FEB6B6":"#707A8A"}
//                             onMouseOver={()=>setHover("eye")}
//                             onMouseLeave={()=>setHover(0)}
//                             onClick={()=>{props.changeAction("show");props.changeTenantData(data);props.modal(1) }}
//                         />
//                         {

//                             props.userType=="SocietyAdmin"?(<MdModeEditOutline size="2em" color={hover=="edit"?"#FEB6B6":"#707A8A"}
//                                 onMouseOver={()=>setHover("edit")}
//                                 onMouseLeave={()=>setHover(0)}
//                                 onClick={()=>{console.log(0);props.changeAction("edit");props.changeTenantData(data);props.modal(1) }}
//                             />):(<></>)
//                         }
//                         {
                        
//                             props.userType=="Admin"?(<FaTrash size="1.6em" color={hover=="bin"?"#FEB6B6":"#707A8A"}
//                                 onMouseOver={()=>setHover("bin")}
//                                 onMouseLeave={()=>setHover(0)}
//                             />):(<></>)
//                         }
//                     </div>
//                 </td>
//             </tr>
//         </>
//     );
// }
