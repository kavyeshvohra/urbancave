import '../../styles/notice.css';
import { useState } from 'react';
import { SocietyContainer, SocietyContent, SocietyHead, SocList, Wrapper, ComplaintContainer, MenuWrapper, MenuItems, ButtonContainer, ComplaintDesc, DetailWrapper, ComplaintInfo, ComplaintHistoryHeader, ComplaintInfoDetails, ComplaintFooterInfo, MoreItemsContainer, DeleteCont, ComplaintHistoryContainer } from '../../styles/complaints';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import { FormGroup, Detailsform, FocusHtml, TextSpan, ButtonSubmit, ButtonWrapper, Detailsformdate } from '../../styles/register-styles';
import Select from 'react-select';
import {BiPencil} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {FileWrapper, DownloadButtonContainer} from '../../styles/notice-modal'
import {useDropzone} from 'react-dropzone'
import {BsThreeDots,BsDownload } from 'react-icons/bs'
import {MdOutlineCancel} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
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

    const [society, setSocietyName] = useState("Siddhachal Flats")
    const [itemColor, setItemColor] = useState("All Tickets")
    const [CreateNotice, setCreateNotice] = useState(false);
    const [counter, setCount] = useState(0)
    const [showDate, setDateView ] = useState(false);
    function MenuItem(e){
        setItemColor(e.target.textContent)
    }

    function SocietySelect(e){
        setSocietyName(e.target.textContent)
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


    return(
    <>
    <Wrapper>
        <SocietyContainer>
            <SocietyHead>
                <h3>Societies</h3>
            </SocietyHead>
            <SocietyContent>
            <SocList>
                <li onClick={SocietySelect} className={society=="Siddhachal Flats" && "active"}>Siddhachal Flats</li>
                <li onClick={SocietySelect} className={society=="Ankur Appartments" && "active"}>Ankur Appartments</li>
                <li onClick={SocietySelect} className={society=="Richmond Grand" && "active"}>Richmond Grand</li>
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
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        </ComplaintContainer>
    </Wrapper>

    <Modal show={CreateNotice} onHide={()=>{setCreateNotice(false)}} centered size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Create New Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Date: <span style={{fontStyle: 'italic', fontWeight: '500'}}>{today}/{currentMonth}/{currentYear}</span></span>
                <span>User Name: <span style={{fontStyle: "italic", color: "#3e444e", fontWeight: "500"}}>Patel Manikbhai</span></span>
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
                            <ComplaintDesc id="description" name="complaint_desc" maxLength="255" rows="6" onInput={handleKeyPress} />
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
                <ButtonSubmit name="submit" type="submit">Submit</ButtonSubmit>
            </ButtonWrapper>
            </form>
        </Modal.Body>
        </Modal>
        </>
    )
}

const NoticeCard = (props) => {
    const [ViewNotice, setViewNotice] = useState(false)
    const [MoreView, setMoreView] = useState(false);


    return(
        <>
            <ComplaintHistoryContainer>
            <ComplaintInfo>
                <ComplaintHistoryHeader>
                    <h5>Notice #2022-1222</h5>
                    <span style={{fontWeight: "300", fontSize: "18px"}}>11:30PM</span>
                    <button onClick={()=>{setMoreView(!MoreView)}}><BsThreeDots/></button>
                    { MoreView==true? <MoreItems/> : null }
                </ComplaintHistoryHeader>
                <ComplaintInfoDetails>
                    <h2>Maintenance - 03/2022</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,</p>
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


const MoreItems = () => {
    const [DeleteNoticeModal, setDeleteNoticeModal] = useState(false);
    const [ViewNoticeModal, setViewNoticeModal] = useState(false);
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
                        <Detailsform type="text" value="How to change my password?" disabled/>
                    </Col>
                    <Col xs={12} md={4}>
                        <span>Category</span>
                        <Detailsform type="text" value="Technical Support" disabled/>
                    </Col>
                    <Row>
                        <Col xs={12} md={12}>
                        <span>Description</span>
                        <ComplaintDesc disabled rows="6" maxLength="255" value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,"/>
                        </Col>
                    </Row>
                    </Row>
                    <Row>
                    <Col xs={12} md={3}>
                        <span>Date</span>
                        <Detailsformdate type="date" disabled value="2022-01-22"/>
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
                        <Button variant='outline-danger'>Delete</Button>
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