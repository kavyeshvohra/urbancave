import { useEffect,useState } from "react";
import { JsonToTable } from "react-json-to-table";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Report = () => {

    const [notices,setNotices] = useState();
    const [users,setUser] = useState();
    const [maintenances,setMaintenance] = useState();
    const [donations,setDonations] = useState();
    const [familiy,setFamilies] = useState();
    const [society,setSociety] = useState();
    const [tenants,setTenant] = useState();
    const [visitor,setVisitor] = useState();
    const [cnf,setCnf] = useState();
    const [gallery,setGallery] = useState();
    const [display,setDisplay] = useState("notices");
    const FilterableTable = require('react-filterable-table');

    const noticeFileds=[
        { name: 'notice_id', displayName: "Notice ID", inputFilterable: true, sortable: true },
	    { name: 'creation_date', displayName: "Date of creation", inputFilterable: true, exactFilterable: true, sortable: true },
	    { name: 'is_active', displayName: "Is Active", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'topic', displayName: "Topic", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'description', displayName: "Description", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'is_deleted', displayName: "Is Deleted", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'society_id', displayName: "Society ID", inputFilterable: true, exactFilterable: true, sortable: true },
    ];

    const userFileds=[
        { name: 'user_id', displayName: "User ID", inputFilterable: true, sortable: true },
	    { name: 'first_name', displayName: "First Name", inputFilterable: true, exactFilterable: true, sortable: true },
	    { name: 'last_name', displayName: "Last Name", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'dob', displayName: "Date of birth", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'email', displayName: "Email", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'phone_number', displayName: "Phone", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'alternate_phone_number', displayName: "Alternate Phone", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'type', displayName: "User Type", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'is_rented', displayName: "Is Rented", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'house_name', displayName: "House Name", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'house_type', displayName: "House Type", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'img_url', displayName: "Image Url", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'is_deleted', displayName: "Is Deleted", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'society_id', displayName: "Society ID", inputFilterable: true, exactFilterable: true, sortable: true },
    ];

    const maintenanceFileds=[
        { name: 'maintenance_id', displayName: "Maintenance ID", inputFilterable: true, sortable: true },
	    { name: 'societyID', displayName: "Society ID", inputFilterable: true, exactFilterable: true, sortable: true },
	    { name: 'date_of_transaction', displayName: "Date of transaction", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'late_fees', displayName: "Late fees", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'status', displayName: "Status", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'is_deleted', displayName: "Is Deleted", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'amount', displayName: "Amount", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'user_id', displayName: "User ID", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'transaction_id', displayName: "Transaction ID", inputFilterable: true, exactFilterable: true, sortable: true },
    ];

    const donationsFileds=[
        { name: 'donation_id', displayName: "Donation ID", inputFilterable: true, sortable: true },
	    { name: 'societyID', displayName: "Society ID", inputFilterable: true, exactFilterable: true, sortable: true },
	    { name: 'date_of_donation', displayName: "Date of Donation", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'status', displayName: "Status", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'description', displayName: "Description", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'is_deleted', displayName: "Is Deleted", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'amount', displayName: "Amount", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'user_id', displayName: "User ID", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'transaction_id', displayName: "Transaction ID", inputFilterable: true, exactFilterable: true, sortable: true },
    ];
    
    const familyFileds=[
        { name: 'member_id', displayName: "Member ID", inputFilterable: true, sortable: true },
	    { name: 'societyID', displayName: "Society ID", inputFilterable: true, exactFilterable: true, sortable: true },
	    { name: 'first_name', displayName: "First Name", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'last_name', displayName: "Last Name", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'gender', displayName: "Gender", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'age', displayName: "Age", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'relation', displayName: "Relation", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'is_deleted', displayName: "Is Deleted", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'user_id', displayName: "User ID", inputFilterable: true, exactFilterable: true, sortable: true },
    ];

    const societyFileds=[
        { name: 'society_id', displayName: "Society ID", inputFilterable: true, sortable: true },
	    { name: 'society_name', displayName: "Society Name", inputFilterable: true, exactFilterable: true, sortable: true },
	    { name: 'type', displayName: "Society Type", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'address', displayName: "Address", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'pincode', displayName: "Pincode", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'is_deleted', displayName: "Is Deleted", inputFilterable: true, exactFilterable: true, sortable: true },
    ];

    
    const tenantFileds=[
        { name: 'tenant_id', displayName: "Tenant ID", inputFilterable: true, sortable: true },
	    { name: 'user_id', displayName: "User ID", inputFilterable: true, exactFilterable: true, sortable: true },
	    { name: 'societyID', displayName: "Society ID", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'first_name', displayName: "First Name", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'last_name', displayName: "Last Name", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'phone_number', displayName: "Phone", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'email', displayName: "Email", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'documents', displayName: "Documents", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'proof_of_identification', displayName: "Proof Of Identification", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'rent_fixed_amount', displayName: "Rent", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'is_deleted', displayName: "Is Deleted", inputFilterable: true, exactFilterable: true, sortable: true },
    ];

    
    const visitorFileds=[
        { name: 'visitor_id', displayName: "Visitor ID", inputFilterable: true, sortable: true },
	    { name: 'societyID', displayName: "Society ID", inputFilterable: true, exactFilterable: true, sortable: true },
	    { name: 'first_name', displayName: "First Name", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'last_name', displayName: "Last Name", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'phone_number', displayName: "Phone", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'entry_time', displayName: "Entry Date", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'exit_time', displayName: "Exit Date", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'user_id', displayName: "User ID", inputFilterable: true, exactFilterable: true, sortable: true },
    ];

    const complaintFileds=[
        { name: 'cf_id', displayName: "Complaint ID", inputFilterable: true, sortable: true },
	    { name: 'description', displayName: "Description", inputFilterable: true, exactFilterable: true, sortable: true },
	    { name: 'status', displayName: "Status", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'date_of_creation', displayName:"Date of Complaint", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'topic', displayName: "Topic", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'category', displayName: "Category", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'is_deleted', displayName: "Is Deleted", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'societyID', displayName: "Society ID", inputFilterable: true, exactFilterable: true, sortable: true },
        { name: 'user_id', displayName: "User ID", inputFilterable: true, exactFilterable: true, sortable: true },
    ];

    const galleryFileds=[
        { name: 'url', displayName: "URL", inputFilterable: true, sortable: true },
	    { name: 'society_id', displayName: "Society ID", inputFilterable: true, exactFilterable: true, sortable: true },
	    { name: 'no_of_photos', displayName: "No of photos", inputFilterable: true, exactFilterable: true, sortable: true },
    ];

    useEffect( async ()=>{
        if(notices == null){
            const url = "http://192.168.1.67:8080/reports";
            const options={
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            }

            const response = await fetch(url,options);
            const res = await response.json();
            console.log(res);
            setNotices(res.noticeIterable);
            const key = "password";
            const newUsers = [];

            res.userIterable.map((user)=>{
                delete user[key];
                newUsers.push(user);
            })

            setUser(newUsers);
            setMaintenance(res.maintenanceIterable);
            setDonations(res.donationIterable);
            setFamilies(res.familyMemberIterable);
            setSociety(res.societies);
            setTenant(res.tenants);
            setVisitor(res.visitors);
            setCnf(res.complaintsAndFeedbacks);
            setGallery(res.galleryIterable);
        }
    })

    const createPDF = ()=>{
       const table = document.getElementById("reportPDF").firstChild.firstChild.nextSibling;

        html2canvas(table).then(canvas => {
            // document.body.appendChild(canvas); 
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'l', // landscape
                unit: 'pt', // points, pixels won't work properly
                format: [canvas.width, canvas.height]
            });
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("report.pdf"); 
        });
        
    }

    if(notices != null){
        return(
            <>
                <br/><br/> <br/>
                <button onClick={()=>setDisplay("notices")}> Notices</button> 
                <button onClick={()=>setDisplay("users")}>Users</button> 
                <button onClick={()=>setDisplay("maintenances")}>Maintenance</button> 
                <button onClick={()=>setDisplay("donations")}>Donations</button> 
                <button onClick={()=>setDisplay("familiy")}>Family</button> 
                <button onClick={()=>setDisplay("society")}>Society</button> 
                <button onClick={()=>setDisplay("tenants")}>Tenant</button> 
                <button onClick={()=>setDisplay("visitor")}>Visitor</button> 
                <button onClick={()=>setDisplay("cnf")}>Complaints</button> 
                <button onClick={()=>setDisplay("gallery")}>Gallery</button> 
                <br/><br/><br/>
                <button onClick={()=>createPDF()}>Download Report</button>
                <br/><br/>
                {
                    display == "notices"?(
                        <>
                            <div  width="100%" id="reportPDF">
                                <FilterableTable
                                namespace="Notice"
                                initialSort="notice_id"
                                data={notices}
                                fields={noticeFileds}
                                noRecordsMessage="There are no people to display"
                                noFilteredRecordsMessage="No people match your filters!"
                            /></div>
                            <br/><br/>
                        </>
                    ):(<></>)
                }
                
                {
                    display == "users"?(
                        <>
                        <div  width="100%" id="reportPDF">
                            <FilterableTable
                                namespace="Users"
                                initialSort="user_id"
                                data={users}
                                fields={userFileds}
                                noRecordsMessage="There are no people to display"
                                noFilteredRecordsMessage="No people match your filters!"
                            /></div><br/><br/>
                        </>
                    ):(<></>)
                }
                
                {
                    display == "maintenances"?(
                        <>
                        <div  width="100%" id="reportPDF">
                            <FilterableTable
                                namespace="Maintenance"
                                initialSort="maintenance_id"
                                data={maintenances}
                                fields={maintenanceFileds}
                                noRecordsMessage="There are no people to display"
                                noFilteredRecordsMessage="No people match your filters!"
                            /></div><br/><br/>
                        </>
                    ):(<></>)
                }
                
                {
                    display == "donations"?(
                        <>
                        <div  width="100%" id="reportPDF">
                            <FilterableTable
                                namespace="Donations"
                                initialSort="donation_id"
                                data={donations}
                                fields={donationsFileds}
                                noRecordsMessage="There are no people to display"
                                noFilteredRecordsMessage="No people match your filters!"
                            /></div><br/><br/>
                        </>
                    ):(<></>)
                }
                
                {
                    display == "familiy"?(
                        <>
                        <div  width="100%" id="reportPDF">
                            <FilterableTable
                                namespace="Family Members"
                                initialSort="member_id"
                                data={familiy}
                                fields={familyFileds}
                                noRecordsMessage="There are no people to display"
                                noFilteredRecordsMessage="No people match your filters!"
                            /></div><br/><br/>
                        </>
                    ):(<></>)
                }
                
                {
                    display == "society"?(
                        <>
                        <div  width="100%" id="reportPDF">
                            <FilterableTable
                                namespace="Society"
                                initialSort="society_id"
                                data={society}
                                fields={societyFileds}
                                noRecordsMessage="There are no people to display"
                                noFilteredRecordsMessage="No people match your filters!"
                            /></div><br/><br/>
                        </>
                    ):(<></>)
                }
                
                {
                    display == "tenants"?(
                        <>
                        <div  width="100%" id="reportPDF">
                            <FilterableTable
                                namespace="Tenant"
                                initialSort="tenant_id"
                                data={tenants}
                                fields={tenantFileds}
                                noRecordsMessage="There are no people to display"
                                noFilteredRecordsMessage="No people match your filters!"
                            />
                            </div><br/><br/>
                        </>
                    ):(<></>)
                }
                
                {
                    display == "visitor"?(
                        <>
                        <div  width="100%" id="reportPDF">
                            <FilterableTable
                                namespace="Visitor"
                                initialSort="visitor_id"
                                data={visitor}
                                fields={visitorFileds}
                                noRecordsMessage="There are no people to display"
                                noFilteredRecordsMessage="No people match your filters!"
                            />
                            </div><br/><br/>
                        </>
                    ):(<></>)
                }
                
                {
                    display == "cnf"?(
                        <>
                        <div  width="100%" id="reportPDF">
                            <FilterableTable
                                namespace="Complaints"
                                initialSort="cf_id"
                                data={cnf}
                                fields={complaintFileds}
                                noRecordsMessage="There are no people to display"
                                noFilteredRecordsMessage="No people match your filters!"
                            />
                            </div><br/><br/>
                        </>
                    ):(<></>)
                }
                
                {
                    display == "gallery"?(
                        <>
                        <div  width="100%" id="reportPDF">
                            <FilterableTable
                                namespace="Gallery"
                                initialSort="url"
                                data={gallery}
                                fields={galleryFileds}
                                noRecordsMessage="There are no people to display"
                                noFilteredRecordsMessage="No people match your filters!"
                            />
                            </div><br/><br/>
                        </>
                    ):(<></>)
                }
            </>
        );
    }
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

export default Report;