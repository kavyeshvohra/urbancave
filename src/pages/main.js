import Images from "../images";
import SideBar from "./components/sidebar";
import { VscAccount } from 'react-icons/vsc'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoSettings } from 'react-icons/io5'
import { Outlet } from 'react-router';
import { useState, useRef, } from "react";
import { Link } from "react-router-dom";
import * as Mstyle from '../styles/main-style'

const Main = (props) => {
  const accRef = useRef()


  

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
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!accRef.current.contains(event.target)) {
  //       setAccDetails(0);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  // }, [accRef]);

  const [hover, setHover] = useState(0);
  const [AccDetails, setAccDetails] = useState(0)
  return (
    <Mstyle.MainContainer>
      <Mstyle.NavContainer>

        <img src={Images.urbancaveLogo} className="logo" />

        <Mstyle.NavItems>
          {/* <Link to="/login"><AiOutlineLogin size="2.1em" color={hover == "profile" ? "#FEB6B6" : "707A8A"}
            onMouseOver={() => setHover("profile")}
            onMouseLeave={() => setHover(0)}
          /></Link> */}
          <span>
            <VscAccount size="2em" color={hover == "logout" ? "#FEB6B6" : "707A8A"}
              onMouseOver={() => setHover("logout")}
              onMouseLeave={() => setHover(0)} onClick={() => setAccDetails(!AccDetails)} onBlur={() => setAccDetails(!AccDetails)}
              style={{cursor: "pointer"}}
            />
          </span>
        </Mstyle.NavItems>
        {AccDetails ?
            <Mstyle.Profile ref={accRef}>
              <li className="header">
                <h5>Name: <span style={{ fontStyle: "italic" }}>Kavyesh Vohra</span></h5>
                <p>Siddhachal Flats - (Society Admin)</p>
              </li>
              <Link to='/dashboard/account'>
              <li>
                <IoSettings/> Account Settings
              </li>
              </Link>
              <Link to=''>
              <li>
                <BiSupport/> Support
              </li>
              </Link>
              <Link to='/login'>
              <li>
                <AiOutlineLogout/> Logout
              </li>
              </Link>
            </Mstyle.Profile>
          : <></>}
      </Mstyle.NavContainer>

      <div className="mainContent" >

        <SideBar userType={props.userType} />

        <Mstyle.ContentContainer >
          <Outlet />
        </Mstyle.ContentContainer>

      </div>
    </Mstyle.MainContainer>
  );

}

export default Main;
