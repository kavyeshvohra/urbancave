import React, {useEffect,useState} from 'react'
import * as SStyle from '../../styles/societies'
import soc1_img from '../../Images/soc1.jpg'
import soc2_img from '../../Images/soc2.jpg'
import soc3_img from '../../Images/soc3.jpg'
import soc4_img from '../../Images/soc4.jpg'
import { useNavigate } from 'react-router-dom'

const Visitors = (props) => {

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
  
const navigate = useNavigate();
// const {pathname} = useLocation();
// const OpenView = () =>
// {
//     navigate(`${pathname}/${soc}`)
// }

const gotoVisitors = (id)=>{
    navigate(`/dashboard/visitors/${id}`);
}
        const Image = [soc1_img,soc2_img,soc3_img,soc4_img,soc1_img,soc3_img]
        let image = 0 ;

        if(socs != null){
          return (
            <>
          <SStyle.HeadingCont>
              <SStyle.Heading>Visitors</SStyle.Heading>
          </SStyle.HeadingCont>
          <SStyle.Society>
          {socs.map((soc)=>{
              return(
              <SStyle.SocietyCont onClick={()=>gotoVisitors(soc.society_id)}>
              <SStyle.Image src={Image[image++]}/>
              <SStyle.Content>
                  <h3>{soc.society_name}</h3>
                  <p>{soc.address}</p>
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

export default Visitors