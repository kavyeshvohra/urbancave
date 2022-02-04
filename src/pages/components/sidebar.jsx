import '../../styles/sidebar.css';
import * as sidebar from '../../styles/sidebar-style.js'
// import Logo from '../../Images/Urbancave_Logo.svg'
import {IoDocumentTextOutline, IoDocumentText} from 'react-icons/io5'
import * as BsIcon from 'react-icons/bs'
import { useState } from 'react';
import PaymentUF from '../../Images/payment_unfilled.svg'
import PaymentF from '../../Images/payment_filled.svg'
import GalleryUF from '../../Images/gallery_unfilled.svg'
import GalleryF from '../../Images/gallery_filled.svg'
import MembersUF from '../../Images/members_unfilled.svg'
import MembersF from '../../Images/members_filled.svg'
import SocietyUF from '../../Images/society_unfilled.svg'
import SocietyF from '../../Images/society_filled.svg'
import UserUF from '../../Images/user_unfilled.svg'
import UserF from '../../Images/user_filled.svg'
import VisitorUF from '../../Images/visitor_unfilled.svg'
import VisitorF from '../../Images/visitor_filled.svg'
import ComplaintFeedbackUF from '../../Images/complaint_unfilled.svg'
import ComplaintFeedbackF from '../../Images/complaint_filled.svg'
import NoticeEventsUF from '../../Images/notice_unfilled.svg'
import NoticeEventsF from '../../Images/notice_filled.svg'
import { Link } from 'react-router-dom';


const SideBar = (props) =>{

    const [changeicon, iconStateChange ] = useState(false);
    const [ clickedIcon , clickedIconState ] = useState(false);

    const replaceIcon = (e,selected) =>
    {
                
        clickedIconState(selected);

        let listItems = document.getElementById('menuItems').childNodes;

        var elements = Array.from(listItems);
    
        elements.map( (item)=>{

            // item.childNodes[0].classList.remove('clickedStyle');
            item.childNodes[0].classList.remove('clickedStyle');
        });

        e.target.classList.add("clickedStyle");
    }

    const url=window.location.href.split("/");
    const dashboard=['main','societies','members','payments',"gallery",'profile','visitors','reports','notice','complaints'];

    // dashboard.map(element=>{
    //     if (url.includes(element)){
    //         clickedIconState(element);
    //     }
    // });
    
    return(
    <>
        <sidebar.SideBarContainer>
            
            <div>
                <sidebar.MenuItems id="menuItems">
                    <Link to="/main">
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("dashboard")} 
                            onMouseLeave={()=>iconStateChange(false)} 
                            onClick={(e)=>replaceIcon(e,"dashboard")}
                        >
                            {   clickedIcon==="dashboard" || changeicon==="dashboard"?(<BsIcon.BsHouseDoorFill/>):(<BsIcon.BsHouseDoor/>)}Dashboard
                        </sidebar.MenuListItem>
                    </Link>

                    <Link to="/main/societies">
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("societies")} 
                            onMouseLeave={()=>iconStateChange(false)} 
                            onClick={(e)=>replaceIcon(e,"societies")}>
                            {   clickedIcon==="societies" || changeicon==="societies"?(<img src={SocietyF} width="20px" height="24px" alt="" class="custommenuicon"/>):(<img src={SocietyUF} width="20px" height="20px" alt="" class="custommenuicon"/>)}Societies
                        </sidebar.MenuListItem>
                    </Link>

                    <Link to="/main/members">
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("members")} 
                            onMouseLeave={()=>iconStateChange(false)} 
                            onClick={(e)=>replaceIcon(e,"members")}>
                            {   clickedIcon==="members" || changeicon==="members"?(<img src={MembersF} alt="" class="custommenuicon"/>):(<img src={MembersUF} alt="" class="custommenuicon"/>)}Members
                        </sidebar.MenuListItem>
                    </Link>

                    <Link to="/main/payments">
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("payment")} 
                            onMouseLeave={()=>iconStateChange(false)}
                            onClick={(e)=>replaceIcon(e,"payment")}>
                            {   clickedIcon==="payment" || changeicon==="payment"?(<img src={PaymentF} alt="" class="custommenuicon"/>):(<img src={PaymentUF} alt="" class="custommenuicon"/>)}Payments
                        </sidebar.MenuListItem>
                    </Link>

                    <Link to="/main/complaints">
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("complaintsfeedbacks")} 
                            onMouseLeave={()=>iconStateChange(false)} 
                            onClick={(e)=>replaceIcon(e,"complaintsfeedbacks")}>
                            {   clickedIcon==="complaintsfeedbacks" || changeicon==="complaintsfeedbacks"?(<img src={ComplaintFeedbackF} alt="" class="custommenuicon"/>):(<img src={ComplaintFeedbackUF} alt="" class="custommenuicon"/>) }Complaints & Feedback
                        </sidebar.MenuListItem>
                    </Link>

                    <Link to="/main/notice">
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("notices")} 
                            onMouseLeave={()=>iconStateChange(false)} 
                            onClick={(e)=>replaceIcon(e,"notices")}>
                            {   clickedIcon==="notices" || changeicon==="notices"?(<img src={NoticeEventsF} alt="" class="custommenuicon"/>):(<img src={NoticeEventsUF} alt="" class="custommenuicon"/>) }Notices & Events
                        </sidebar.MenuListItem>
                    </Link>

                    <Link to="/main/gallery">
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("gallery")} 
                            onMouseLeave={()=>iconStateChange(false)} 
                            onClick={(e)=>replaceIcon(e,"gallery")}>
                            {   clickedIcon==="gallery" || changeicon==="gallery"?(<img src={GalleryF} alt="" class="custommenuicon"/>):(<img src={GalleryUF} alt="" class="custommenuicon"/>)}Gallery
                        </sidebar.MenuListItem>
                    </Link>

                    <Link to="/main/visitors">
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("visitors")} 
                            onMouseLeave={()=>iconStateChange(false)} 
                            onClick={(e)=>replaceIcon(e,"visitors")}>
                            {   clickedIcon==="visitors" || changeicon==="visitors"?(<img src={VisitorF} alt="" class="custommenuicon"/>):(<img src={VisitorUF} alt="" class="custommenuicon"/>)}Visitors
                        </sidebar.MenuListItem>
                    </Link>


                    <Link to="/main/Tenants">
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("Tenants")} 
                            onMouseLeave={()=>iconStateChange(false)} 
                            onClick={(e)=>replaceIcon(e,"visitors")}>
                            {   clickedIcon==="tenants" || changeicon==="tenants"?(<img src={VisitorF} alt="" class="custommenuicon"/>):(<img src={VisitorUF} alt="" class="custommenuicon"/>)}Tenants
                        </sidebar.MenuListItem>
                    </Link>

                    <Link to="/main/profile">
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("profile")} 
                            onMouseLeave={()=>iconStateChange(false)} 
                            onClick={(e)=>replaceIcon(e,"profile")}>
                            {   clickedIcon==="profile" || changeicon==="profile"?(<img src={UserF} alt="" class="custommenuicon"/>):(<img src={UserUF} alt="" class="custommenuicon"/>)}Profile
                        </sidebar.MenuListItem>
                    </Link>

                    <Link to="/main/reports">    
                        <sidebar.MenuListItem 
                            onMouseOver={()=>iconStateChange("reports")} 
                            onMouseLeave={()=>iconStateChange(false)} 
                            onClick={(e)=>replaceIcon(e,"reports")}>
                            {   clickedIcon==="reports" || changeicon==="reports"?(<IoDocumentText/>):(<IoDocumentTextOutline/>)}Reports
                        </sidebar.MenuListItem>
                    </Link>
                </sidebar.MenuItems>
            </div>
        </sidebar.SideBarContainer>
    </>
    );

}

export default SideBar;