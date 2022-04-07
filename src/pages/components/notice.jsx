import '../../styles/notice.css';
import { useState ,useEffect} from 'react';
import { SocietyContainer, SocietyContent, SocietyHead, SocList, Wrapper, ComplaintContainer, MenuWrapper, MenuItems, ButtonContainer, ComplaintDesc, DetailWrapper, ComplaintInfo, ComplaintHistoryHeader, ComplaintInfoDetails, ComplaintFooterInfo, MoreItemsContainer, DeleteCont, ComplaintHistoryContainer } from '../../styles/complaints';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import { FormGroup, Detailsform, FocusHtml, TextSpan, ButtonSubmit, ButtonWrapper, Detailsformdate } from '../../styles/register-styles';
import Select from 'react-select';
import {BiPencil} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {FileWrapper, DownloadButtonContainer,ContentCard, DateCard} from '../../styles/notice-modal'
import {useDropzone} from 'react-dropzone'
import {BsThreeDots,BsDownload } from 'react-icons/bs'
import {MdOutlineCancel} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
import { useCookies } from 'react-cookie';
const FormStyle = {
    width: "100%"
}
const FormStyle1 = {
    width: "100%",
    marginBottom: "1em",
}
const FormStyle2 = {
    width: "100%",
    marginTop: ".9em",
}
const FormStyle3 = {
    display: 'flex',
    columnGap: '1em',
    width: '100%',
}
const options = [
    { value: "Notice" ,label: "Notice / Announcement "},
    { value: "Events", label: "Events"},
]
function inputChange(e) {
    if (e.target.value !== "") {
        e.target.classList.add('text1');
    }
    else {
        e.target.classList.remove('text1');
    }
}

const Notice = (props)=>{

    const [socs,setSocieties] = useState();

    const [notices,setNotices] = useState();
    const [userCookie,setUserCookie] = useCookies();

    const addNotice = async () => {
        const notice = {
            "creation_date":new Date().toJSON().slice(0,10),
            "description":document.getElementById("description").value,
            "is_active":true,
            "is_deleted":false,
            "topic":document.getElementById("description").value,
            "societyID":null,
            "notice_id":null,
            "jwtToken":props.cookies.user
        }
        console.log(notice);

        const noticeURL="http://192.168.1.67:8080/addNotice";
        const noticeOptions={
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(notice)
        }
        const noticeResponse = await fetch(noticeURL,noticeOptions);
        const noticeRes = await noticeResponse.json();
        console.log(noticeRes);
    }

    useEffect(async ()=>{
        if(socs == null){
            const data={"jwtToken":props.cookies.user};
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
            setSocietyName(res[0].society_name);
            
            //get notices
            const noticeReqData = {"jwtToken":props.cookies.user,"noticeID":null};
            const noticeURL="http://192.168.1.67:8080/notices";
            const noticeOptions={
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(noticeReqData)
            }
            const noticeResponse = await fetch(noticeURL,noticeOptions);
            const noticeRes = await noticeResponse.json();
            console.log(noticeRes);
            setNotices(noticeRes);
        }
    },[socs]);

    const[files, setFiles] = useState([])
    const {getRootProps, getInputProps} = useDropzone({
        accept: "file/pdf",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
        }
    })

    const [society, setSocietyName] = useState()
    const [itemColor, setItemColor] = useState("All Tickets")
    const [CreateNotice, setCreateNotice] = useState(false);
    const [counter, setCount] = useState(0)
    const [showDate, setDateView ] = useState(false);
    function MenuItem(e){
        setItemColor(e.target.textContent)
    }

    function SocietySelect(e){
        setSocietyName(e.target.textContent);
    }
    const handleKeyPress = (e) => {
        const count = e.target.value;
        
        const countWords = (count) => {
          if (count.length === 0) {
            return 0;
          }
        }
        
        setCount({});
    }
    const date = new Date();
    const currentYear = date.getFullYear();
    const today = date.getDate()
    const currentMonth = date.getMonth() + 1;

    if(socs != null){
    return(
    <>
    <Wrapper>
        <SocietyContainer>
            <SocietyHead>
                <h3>Societies</h3>
            </SocietyHead>
            <SocietyContent>
            <SocList>
            {socs.map((soc)=>{
                    return(
                        <li onClick={SocietySelect} className={ society==soc.society_name? "active":""}>{soc.society_name}</li>
                    );
                })
            }
            </SocList>
            </SocietyContent>
        </SocietyContainer>
        <ComplaintContainer>
            <MenuWrapper>
                <MenuItems>
                    <li onClick={MenuItem}>
                        All Notices
                    </li>
                    <li onClick={MenuItem}>
                        Past Notices
                    </li>
                    <li onClick={MenuItem}>
                        Upcoming Events
                    </li>
                </MenuItems>
            </MenuWrapper>
        <ButtonContainer>
                <button className='newTicket' onClick={()=>{setCreateNotice(true)}}><BiPencil/> NEW NOTICE</button>
                <div>
                    <input type="search" placeholder='Search'/>
                    <button className='search-icon' type="submit"><AiOutlineSearch/></button>
                </div>
        </ButtonContainer>
        
        {
            notices != null ?
            notices.map( (notice)=>{
                return(
                    <NoticeCard
                        notice={notice}
                    />
                );
            }):(<h1>Loading</h1>)
        }
        {/* <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/> */}
        </ComplaintContainer>
    </Wrapper>

    <Modal show={CreateNotice} onHide={()=>{setCreateNotice(false)}} centered size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Create New Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Date: <span style={{fontStyle: 'italic', fontWeight: '500'}} id="date">{today}/{currentMonth}/{currentYear}</span></span>
                <span>User Name: <span style={{fontStyle: "italic", color: "#3e444e", fontWeight: "500"}}>{userCookie.userName}</span></span>
            </div>
            <form>
                <Row>
                    <Col xs={12} lg={12}>
                        <FormGroup style={FormStyle2}>
                            <Detailsform type="text" id="title" name="complaint_title" onChange={inputChange}/>
                            <FocusHtml data-placeholder="Title"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8}>
                        <FormGroup style={FormStyle}>
                            <ComplaintDesc id="description" name="complaint_desc" maxLength="255" rows="6"  />
                            <TextSpan style={{height: "auto"}}>Description</TextSpan>
                            <span style={{float: "right"}}>{counter}/180</span>
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={4}>
                        <Col>
                            <FormGroup style={FormStyle3}>
                                <input type="checkbox" id="showNotice" name="showNotice" value="setLater" onChange={()=>{setDateView(!showDate)}}/>
                                <label for="showNotice" style={{flex: '2'}}>Set End Date (Optional)</label>
                            </FormGroup>
                        </Col>
                        <Col>
                        {showDate ?
                        <FormGroup style={FormStyle2}>
                            <TextSpan style={{height: "auto"}}>Select Date</TextSpan>
                            <Detailsform type="date" name="noticeDate"/>
                        </FormGroup>:null}
                        </Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            <FileWrapper>
                <div {...getRootProps({className: 'dropzone customFileStyle'})}>
                    <input {...getInputProps()} />
                    
                    <p>Drag & Drop Your Files Here.<br/> OR <br/> (Click Here To Upload)</p>
                </div>
            </FileWrapper>
            <ButtonWrapper style={{marginBottom: "1em"}}>
                <ButtonSubmit name="submit" type="submit" onClick={(e)=>{ e.preventDefault();addNotice(); }}>Submit</ButtonSubmit>
            </ButtonWrapper>
            </form>
        </Modal.Body>
        </Modal>
        </>
    )
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

const NoticeCard = (props) => {
    const [ViewNotice, setViewNotice] = useState(false)
    const [MoreView, setMoreView] = useState(false);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return(
        <>
            <ComplaintHistoryContainer>
            <ComplaintInfo>
                <ComplaintHistoryHeader>
                    <h5>Notice #2022-1222</h5>
                    <button onClick={()=>{setMoreView(!MoreView)}}><BsThreeDots/></button>
                    { MoreView==true? <MoreItems notice={props.notice} /> : null }
                </ComplaintHistoryHeader>
                <ComplaintInfoDetails className='NoticeCard'>
                    <DateCard>
                        <h6>{monthNames[parseInt(props.notice.creation_date.split("-")[1])]}</h6>
                        <h5>{props.notice.creation_date.split("-")[2]}</h5>
                        <h6>{props.notice.creation_date.split("-")[0]}</h6>
                    </DateCard>
                    <ContentCard>
                        <h2>{props.notice.topic}</h2>
                        <p>
                            {props.notice.description}
                        </p>

                    </ContentCard>
                </ComplaintInfoDetails>
                <ComplaintFooterInfo>
                    <FaUserAlt/>
                    <h6 style={{flex: "1"}}>Kavyesh Vohra</h6>
                    <h6>Type: <span style={{fontStyle: "italic", color: '#707a8a', textDecoration: "underline", textDecorationColor: "#fab0b0", cursor: "pointer"}}>Notice / Announcement</span></h6>
                </ComplaintFooterInfo>
            </ComplaintInfo>
            </ComplaintHistoryContainer>
        

        </>
    )
}


const MoreItems =  (props) => {
    const [DeleteNoticeModal, setDeleteNoticeModal] = useState(false);
    const [ViewNoticeModal, setViewNoticeModal] = useState(false);
    
    const [userCookie,setUserCookies] = useCookies();
    console.log(props.notice);

    const deleteNotice = async (notice) =>{
        const data = {"jwtToken":userCookie.user,"noticeID":notice.notice_id};
        const url="http://192.168.1.67:8080/deleteNotice";
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
    }

    return(
        <>
            <MoreItemsContainer>
                <ul>
                    <li onClick={()=>{setViewNoticeModal(true)}}>View</li>
                    <li onClick={()=>{setDeleteNoticeModal(true)}}>Delete</li>
                </ul>
            </MoreItemsContainer>

        <Modal show={ViewNoticeModal} onHide={()=>{setViewNoticeModal(false)}} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Notice Details</Modal.Title>
                </Modal.Header>
                <Modal.Body closeButton style={{paddingBottom: "2em"}} >
                    <DetailWrapper>
                    <Row>
                    <Col xs={12} md={8}>
                        <span>Title</span>
                        <Detailsform type="text" value={props.notice.topic} disabled/>
                    </Col>
                    <Col xs={12} md={4}>
                        <span>Category</span>
                        <Detailsform type="text" value="Technical Support" disabled/>
                    </Col>
                    <Row>
                        <Col xs={12} md={12}>
                        <span>Description</span>
                        <ComplaintDesc disabled rows="6" maxLength="255" value={props.notice.description}/>
                        </Col>
                    </Row>
                    </Row>
                    <Row>
                    <Col xs={12} md={3}>
                        <span>Date</span>
                        <Detailsformdate type="date" disabled value={props.notice.creation_date}/>
                    </Col>
                    <Col xs={12} md={5}>
                        <span>User (<span style={{fontStyle: "italic"}}>Society Admin</span>)</span>
                        <Detailsform type="text" value="Kavyesh Vohra" disabled/>
                    </Col>
                    <Col xs={12} md={4}>
                        <span>Attachments</span>
                        <DownloadButtonContainer><ButtonSubmit name="submit" type="submit" className='attachments-download'>Download <BsDownload/></ButtonSubmit></DownloadButtonContainer>
                    </Col>
                    </Row>

                    </DetailWrapper>
                </Modal.Body>
            </Modal>

            <Modal show={DeleteNoticeModal} onHide={()=>{setDeleteNoticeModal(false)}} centered>
                <Modal.Header closeButton style={{borderBottom: "none"}}>
                    {/* <Modal.Title>Delete Complaint</Modal.Title> */}
                </Modal.Header>
                <Modal.Body closeButton style={{paddingTop: "unset"}}>
                    <DeleteCont>
                        <MdOutlineCancel style={{fontSize: "8em", color: "red"}}/>
                        <h2>Are you sure?</h2>
                        <p>Do you really want to delete this record? This process cannot be undone.</p>
                        <Button variant='outline-danger' onClick={()=>{deleteNotice(props.notice)}}>Delete</Button>
                    </DeleteCont>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Notice;

//const [ createNotice , setCreateNotice ] = useState(0);

//     const [ displayInfo , setDisplayInfo ] = useState(0);
//     const [ noticeData,setNoticeData] = useState();
//     const [ action,setAction ] = useState();
//     return(
//         <>
//             { displayInfo ?( <NoticeInfoModal action={action} data={noticeData} closeModal={setDisplayInfo}/> ):(<></>) }
//             {createNotice != 0 ? ( <CreateNoticeModal changeCreateNotice={setCreateNotice} /> ) : (<></>) }
//             <div className="galleryButtons">
                
//                 <div className="galleryCaption">Notices</div>
//                 {
//                     props.userType=="SocietyAdmin"?(<button className="galleryButtonControls" onClick={()=>setCreateNotice(1)}>
//                         Create New Notice
//                     </button>):(<></>)
//                 }
//             </div>
//             <div className="noticeContainer">
//             <table className="noticeTable">
//                 <tr>
//                     <td className="noticeCol0">SrNo</td>
//                     <td className="noticeCol1">Topic</td>
//                     {props.userType=="Admin"?(<td className="noticeCol4">Society</td>):(<></>)}
//                     <td className="noticeCol2">Date</td>
//                     <td className="noticeCol4">Posted By</td>
//                     <td className="noticeCol3">Action</td>
//                 </tr>
//                 <Row 
//                         sr="1"
//                         caption="Health Notice" 
//                         des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
//                         postedby="sidhraj"
//                         society="soc ABC"
//                         userType={props.userType}
//                         noticeDoc="none"
//                         modal={setDisplayInfo}
//                         changeNoticeData={setNoticeData}
//                         changeAction={setAction}
//                         date="01/01/2001 01:00 PM"/>
//                 <Row 
//                         sr="2"
//                         modal={setDisplayInfo}
//                         changeNoticeData={setNoticeData}
//                         changeAction={setAction}
//                         caption="Health Notice" 
//                         des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
//                         postedby="sidhraj"
//                         society="soc ABC"
//                         noticeDoc="none"
//                         userType={props.userType}
//                         date="01/01/2001 01:00 PM"/>
//                     <Row 
//                         sr="3"
//                         modal={setDisplayInfo}
//                         changeNoticeData={setNoticeData}
//                         changeAction={setAction}
//                         noticeDoc="none"
//                         caption="Health Notice" 
//                         des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
//                         postedby="sidhraj"
//                         society="soc ABC"
//                         userType={props.userType}
//                         date="01/01/2001 01:00 PM"/>
//                     <Row 
//                         sr="4"
//                         modal={setDisplayInfo}
//                         changeNoticeData={setNoticeData}
//                         changeAction={setAction}
//                         noticeDoc="none"
//                         caption="Health Notice" 
//                         des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
//                         postedby="sidhraj"
//                         society="soc ABC"
//                         userType={props.userType}
//                         date="01/01/2001 01:00 PM"/>
//                     <Row 
//                         sr="5"
//                         modal={setDisplayInfo}
//                         changeNoticeData={setNoticeData}
//                         changeAction={setAction}
//                         noticeDoc="none"
//                         caption="Health Notice" 
//                         des="Health NoticeHealth NoticeHealth NoticeHealth Notice" 
//                         postedby="sidhraj"
//                         society="soc ABC"
//                         userType={props.userType}
//                         date="01/01/2001 01:00 PM"/>
//             </table>
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
//         caption:props.caption,
//         description:props.des,
//         society:props.society,
//         date:props.date,
//         postedby:props.postedby,
//         noticeDoc:props.noitceDoc,
//     }
//     return(
//         <>
//             <tr className="notHeading">
//                 <td>
//                     <div>{props.sr}</div>
//                 </td>
//                 <td>
//                     <div className="noticeCaption">{props.caption}</div>
//                     <div className="noticeDes">{props.des}</div>
//                 </td>
//                 {
//                     props.userType=="Admin"?
//                     (<td>
//                         <div className="visitorText">{props.society}</div>
//                     </td>):(<></>)
//                 }
//                 <td>
//                     <div className="noticeDate">{props.date}</div>
//                 </td>
//                 <td>
//                     <div className="postedBy">{props.postedby}</div>
//                 </td>
//                 <td>
//                     <div className="noticeActions">
//                         <AiFillEye size="2em" color={hover=="eye"?"#FEB6B6":"#707A8A"}
//                             onMouseOver={()=>setHover("eye")}
//                             onMouseLeave={()=>setHover(0)}
//                             onClick={()=>{props.changeAction("show");props.changeNoticeData(data);props.modal(1) }}
//                         />
//                         {
//                             props.userType!="SocietyMember"?(<>
//                                 <MdModeEditOutline size="2em" color={hover=="edit"?"#FEB6B6":"#707A8A"}
//                                     onMouseOver={()=>setHover("edit")}
//                                     onMouseLeave={()=>setHover(0)}
//                                     onClick={()=>{props.changeAction("edit");props.changeNoticeData(data);props.modal(1) }}
//                                 />
//                                 <FaTrash size="1.6em" color={hover=="bin"?"#FEB6B6":"#707A8A"}
//                                     onMouseOver={()=>setHover("bin")}
//                                     onMouseLeave={()=>setHover(0)}
//                                 />
//                             </>):(<></>)
//                         }
//                     </div>
//                 </td>
//             </tr>
//         </>
//     );
// }