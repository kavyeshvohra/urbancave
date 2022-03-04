import Images from "../images";
import SideBar from "./components/sidebar";
import {AiOutlineLogin,VscAccount} from 'react-icons/all';

import { Outlet } from 'react-router';
import '../styles/main.css';
import '../styles/navbar.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Main = (props)=> {

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

    const [hover,setHover] = useState(0);

    return (
      <div className="mainContainer">
        <div className="navContainer">
          
          <img src={Images.urbancaveLogo} className="logo"/>
          
          <div className="navItems">
            <Link to="/login"><AiOutlineLogin size="2.1em" color={hover=="profile"?"#FEB6B6":"707A8A"}
              onMouseOver={()=>setHover("profile")}
              onMouseLeave={()=>setHover(0)}
            /></Link>
            {/* <Link to="/main/profile"> */}
              <VscAccount size="2em" color={hover=="logout"?"#FEB6B6":"707A8A"}
                onMouseOver={()=>setHover("logout")}
                onMouseLeave={()=>setHover(0)}
              />
            {/* </Link> */}
          </div>
        </div>

        <div className="mainContent">
          
          <SideBar userType={props.userType}/>

          <div className="contentContainer">
            <Outlet/>
          </div>

        </div>
      </div>
    );

}

export default Main;
