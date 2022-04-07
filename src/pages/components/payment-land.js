import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import * as SStyle from '../../styles/societies'
import soc1_img from '../../Images/soc1.jpg'
import soc2_img from '../../Images/soc2.jpg'
import soc3_img from '../../Images/soc3.jpg'
import soc4_img from '../../Images/soc4.jpg'

const PaymentLanding = (props) => {
    
    const [socs,setSocieties] = useState();

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

        const navigate = useNavigate()

        const gotoMembers = (id)=>{
                navigate(`/dashboard/payments/${id}`);
            }
        
        
        const Image = [soc1_img,soc2_img,soc3_img,soc4_img,soc1_img,soc3_img]
        
        let image = 0;
        if(socs != null){
        return(
        <>
                <SStyle.HeadingCont>
                        <SStyle.Heading>Payments</SStyle.Heading>
                </SStyle.HeadingCont>
                <SStyle.Society>
                {socs.map((soc)=>{
                return(
                    <SStyle.SocietyCont onClick={()=>{gotoMembers(soc.society_id)}}>
                        <SStyle.Image src={Image[image++]}/>
                        <SStyle.Content>
                                <h3>{soc.society_name}</h3>
                                <p>{soc.society_name}</p>
                        </SStyle.Content>
                        </SStyle.SocietyCont>
                    );
                })
                }
            </SStyle.Society>
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

export default PaymentLanding