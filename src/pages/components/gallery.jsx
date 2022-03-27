import * as FStyle from '../../styles/file-folder-style'
import { Heading, HeadingCont } from '../../styles/societies';
import Folder from './folder';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import CreateGalleryModal from './Modals/createGalleryModal';
import { Modal } from 'react-bootstrap';
import { ButtonContainer } from '../../styles/complaints';
import { GalleryButtons } from '../../styles/gallery';
import { Container, Heading1 } from '../../styles/soc-members';
import { ButtonSubmit, Detailsform, FocusHtml, FormGroup, TextSpan } from '../../styles/register-styles';

const Gallery=(props)=>{
    useEffect(()=>{
        window.scroll(0,0)
    })
    //const {pathname} = useLocation();
    //const lastName=pathname.split("/")[ pathname.split("/").length-1 ];
    const params = useParams();
    console.log(params)
    const [folders,setFolders] = useState(["Diwali","Holi","Christmas","Uttrayan","Navratri","Halloween"]);
    const [ galleryModal , setGalleryModal ] =  useState(0);
    return(
        <>
            <div className="galleryHeader">
                <Container>
                    <Heading1>{params.society}</Heading1>
                    {
                        props.userType=="Admin"?
                        (   
                            <ButtonContainer style={{marginBottom: "1em", marginTop: "1em"}}>
                                <button className="newGallery" onClick={()=>setGalleryModal(1)}><MdOutlineCreateNewFolder style={{fontSize: "1.5em"}}/>New Gallery</button>
                            </ButtonContainer>
                        ):
                        (<></>)
                    }</Container>
            </div>
            <Modal show={galleryModal} onHide={()=>{setGalleryModal(false)}} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Gallery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div style={{textAlign: "right"}}>
                    <span>User Name: <span style={{fontStyle: "italic", color: "#3e444e", fontWeight: "500"}}>Patel Manikbhai</span></span>
                </div>
                <form>
                    <FormGroup style={{width: "100%", marginTop: "1em"}}>
                        <Detailsform type="text"/>
                        <FocusHtml data-placeholder="Gallery Name"/>
                    </FormGroup>
                    <ButtonContainer>
                        <ButtonSubmit type="submit">Create</ButtonSubmit>
                    </ButtonContainer>
                </form>
                </Modal.Body>
            </Modal>
            <FStyle.FolderCont>
                {
                    folders.map((folder)=>{
                        return( <Folder folderName={folder} type="folder"  />)
                    })
                }
            </FStyle.FolderCont>
        </>
    );
}

export default Gallery;