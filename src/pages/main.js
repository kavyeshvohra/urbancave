import Images from "../images";
import SideBar from "./components/sidebar";

import { Outlet } from 'react-router';
import '../styles/main.css';
import '../styles/navbar.css';

const Main = ()=> {

  // handleGetTest = async () => {
  //   const url = "http://localhost:8080/UrbanCave/index";
  //   let response = await fetch(url);
  //   console.log(await response.text());
  // };

  // handleTest = async () => {
  //   const url = "http://localhost:8080/UrbanCave/index";
  //   const data = "name=sid&password=sid@123";
  //   const options = {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, *cors, same-origin
  //     credential: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: data,
  //   };
  //   let response = await fetch(url, options);
  //   console.log(await response.text());
  //   console.log(0);
  // };

    return (
      <div className="mainContainer">
        <div className="navContainer">
          
          <img src={Images.urbancaveLogo} className="logo"/>
          
          <div className="navItems">
            <img src={Images.logoutIcon} className="logoutIcon" 
            onMouseOver={(e)=>{
              e.target.src=Images.logoutHover
            }}
            onMouseLeave={(e)=>{
              e.target.src=Images.logoutIcon
            }}
            />
            <img src={Images.logoutIcon} className="profileIcon" />
          </div>
        </div>

        <div className="mainContent">
          
          <SideBar/>

          <div className="contentContainer">
            <Outlet/>
          </div>

        </div>
      </div>
    );

}

export default Main;
