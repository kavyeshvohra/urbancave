import {useState} from 'react';
import * as SStyle from '../../styles/societies'
import soc1_img from '../../Images/soc1.jpg'
import soc2_img from '../../Images/soc2.jpg'
import soc3_img from '../../Images/soc3.jpg'
import soc4_img from '../../Images/soc4.jpg'
// import '../../styles/fileAndFolder.css';
// import '../../styles/gallery';
// import Folder from './folder';


const Societies = () =>{
    const societies = ["Siddhachal Flats","Ankur Appartments","Goyal Intercity-C", "Mahasagar Appartments",,"Suryasagar Appartments","Swati Appartments"];
    const Area = ['Drive In Road', 'Gurukul', 'Mansi Charrasta', 'Bopal', 'Makarba', 'Isckon Cross Roads', 'Kalupur']
    const Image = [soc1_img,soc2_img,soc3_img,soc4_img,soc1_img,soc3_img]
    let area = 0;
    let image = 0 ;
    return(
        <>
            <SStyle.HeadingCont>
                <SStyle.Heading>Manage Societies</SStyle.Heading>
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
            </SStyle.Society>
             {/* <div className="galleryHeader">
                <div className="galleryCaption">Societies</div>
            </div>
            <div className="fileFolderContainer">
            {
                societies.map((soc)=>{
                        return( <Folder folderName={soc} type="society"  />)
                    })
            }
            </div> */}
        </>
    );
}

export default Societies;