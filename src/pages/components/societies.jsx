import { useEffect, useState } from 'react'
import * as SStyle from '../../styles/societies'
import soc1_img from '../../Images/soc1.jpg'
import soc2_img from '../../Images/soc2.jpg'
import soc3_img from '../../Images/soc3.jpg'
import soc4_img from '../../Images/soc4.jpg'
import '../../styles/fileAndFolder.css';
import '../../styles/gallery';
import Folder from './folder';

import { Cookies, useCookies } from 'react-cookie';
import { useParams } from "react-router-dom";


const Societies = (props) =>{
    const [socs,setSocieties] = useState();
    const [userCookies,setUserCookies] = useCookies();
    const params = useParams();

    useEffect(async ()=>{
        if(socs == null){
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
    const Image = [soc1_img,soc2_img,soc3_img,soc4_img,soc1_img,soc3_img]
    let image = 0 ;
    if(socs != null){
    return(
        <>
            {/* <SStyle.HeadingCont>
                <SStyle.Heading>Gallery</SStyle.Heading>
            </SStyle.HeadingCont>
            <SStyle.Society>
                {societies.map(society => {
                    return(
                        <SStyle.SocietyCont>
                            <SStyle.Image src={Image[image++]}/>
                        <SStyle.Content>
                            <h3>{society}</h3>
                            <p>{Area[area++]}</p>
                        </SStyle.Content>
                    </SStyle.SocietyCont>
                    )
                })}
            </SStyle.Society> */}
             {/* <div className="galleryHeader">
                <div className="galleryCaption">Societies</div>
            </div> */}
            <SStyle.HeadingCont>
                <SStyle.Heading>Gallery</SStyle.Heading>
            </SStyle.HeadingCont>
            <SStyle.Society>
                {socs.map((soc)=>{
                        return( <Folder folderName={soc.society_name} area={soc.address} image={Image[image++]} type="society"  />)
                    })
                }
            </SStyle.Society>
        </>
    );
    }else{
        return(
            <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <center>
                <h1>Loading...</h1>
            </center>
            </>
        );
    }
}


export default Societies;