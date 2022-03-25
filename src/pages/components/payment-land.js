import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import * as SStyle from '../../styles/societies'
import soc1_img from '../../Images/soc1.jpg'
import soc2_img from '../../Images/soc2.jpg'
import soc3_img from '../../Images/soc3.jpg'
import soc4_img from '../../Images/soc4.jpg'

const PaymentLanding = () => {
        useEffect(()=>{
             window.scroll(0,0)
        })
        const navigate = useNavigate()

        const gotoMembers = (id)=>{
                navigate(`/dashboard/payments/${id}`);
            }
        
        const societies = ["Siddhachal Flats","Ankur Appartments","Goyal Intercity-C", "Mahasagar Appartments",,"Suryasagar Appartments","Swati Appartments"];
        const Area = ['Drive In Road', 'Gurukul', 'Mansi Charrasta', 'Bopal', 'Makarba', 'Isckon Cross Roads', 'Kalupur']
        const Image = [soc1_img,soc2_img,soc3_img,soc4_img,soc1_img,soc3_img]
        let area = 0;
        let image = 0;
        return(
        <>
                <SStyle.HeadingCont>
                        <SStyle.Heading>Societies</SStyle.Heading>
                </SStyle.HeadingCont>
                <SStyle.Society>
                {societies.map((soc)=>{
                return(
                    <SStyle.SocietyCont onClick={()=>{gotoMembers(0)}}>
                        <SStyle.Image src={Image[image++]}/>
                        <SStyle.Content>
                                <h3>{soc}</h3>
                                <p>{Area[area++]}</p>
                        </SStyle.Content>
                        </SStyle.SocietyCont>
                    );
                })
                }
            </SStyle.Society>
        </>
  )
}

export default PaymentLanding