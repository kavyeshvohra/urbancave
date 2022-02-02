import Images from '../../images.js';
import '../../styles/tenants.css';

const Tenants = ()=>{
    return(
        <>
            <div className="galleryButtons">
                
            <div className="galleryCaption">Tenants</div>
                <button className="galleryButtonControls">Add New Tenant</button>
            </div>
            <div className="tenantsContainer">
                <table className="tenantsTable">
                    <tr>
                        <td className="tenantsCol0">Sr</td>
                        <td className="tenantsCol1">First Name</td>
                        <td className="tenantsCol2">Last Name</td>
                        <td className="tenantsCol4">Phone Number</td>
                        <td className="tenantsCol5">Email</td>
                        <td className="tenantsCol6">Documents</td>
                        <td className="tenantsCol7">Proof of Identification</td>
                        <td className="tenantsCol8">Rent Amount</td>
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
                    <div className="tenantPhone">{props.phone}</div>
                </td>
                <td>
                    <div className="tenantEmail">{props.email}</div>
                </td>
                <td>
                    <div className="tenantDocs">{props.documents}</div>
                </td>
                <td>
                    <div className="tenantPOI">{props.poi}</div>
                </td>
                <td>
                    <div className="tenantRent">{props.rent}</div>
                </td>
                <td>
                    <div className="noticeActions">
                        <img src={Images.showIcon}/>
                        <img src={Images.dustbinIcon}/>
                        <img src={Images.dustbinIcon}/>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default Tenants;