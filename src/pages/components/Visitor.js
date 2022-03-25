import React, {useEffect} from 'react'
import * as SStyle from '../../styles/societies'
import soc1_img from '../../Images/soc1.jpg'
import soc2_img from '../../Images/soc2.jpg'
import soc3_img from '../../Images/soc3.jpg'
import soc4_img from '../../Images/soc4.jpg'
import { useNavigate } from 'react-router-dom'

const Visitors = () => {

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
    navigate(`/dashboard/visitors/${id}`);
}
        const societies = ["Siddhachal Flats","Ankur Appartments","Goyal Intercity-C", "Mahasagar Appartments","Suryasagar Appartments","Swati Appartments"];
        const Area = ['Drive In Road', 'Gurukul', 'Mansi Charrasta', 'Bopal', 'Makarba', 'Isckon Cross Roads', 'Kalupur']
        const Image = [soc1_img,soc2_img,soc3_img,soc4_img,soc1_img,soc3_img]
        let area = 0;
        let image = 0 ;
        return (
          <>
        <SStyle.HeadingCont>
            <SStyle.Heading>Visitors</SStyle.Heading>
    </SStyle.HeadingCont>
    <SStyle.Society>
        {societies.map((soc)=>{
            return(
            <SStyle.SocietyCont onClick={()=>gotoVisitors(1)}>
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

export default Visitors