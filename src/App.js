import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react';

import { useCookies } from 'react-cookie';

import ComplaintsAndFeedback from './pages/components/complaintsAndFeedback';
import Home from './pages/home';
import Main from './pages/main';
import NotFound from './pages/NotFound';
import Dashboard from './pages/components/dashboard';
import SocietyDashboard from './pages/components/societyDashboard';
import MemberDashboard from './pages/components/memberDashboard';
import SocMembers from './pages/components/socMembers';
import Gallery from './pages/components/gallery';
import Event from './pages/components/events';
import Notice from './pages/components/notice';
import Tenants from './pages/components/tenants';
import Societies from './pages/components/societies';
import Contact from './pages/contact';
import Login from './pages/login.js'
import Register from './pages/register.js';
import UserAccount from './pages/components/useraccount';
import Visitors from './pages/components/Visitor';
import PaymentLanding from './pages/components/payment-land';
import Payments from './pages/components/payments';
import Members from './pages/components/members';
import FamilyMembers from './pages/components/familyMembers';
import ForgotPass from './pages/components/forgotpassword'
import SocVisitors from './pages/components/socVisitors';
import Test from './pages/test';
import SocTenants from './pages/components/socTenants';
import VisitorForm from './pages/Visitor-form';
function App() {

  //const [userType,setUserType] = useState("SocietyMember");
  const [userType, setUserType] = useState("Admin");
  
  const [cookies, setCookie] = useCookies(['user']);
  // const Location = useLocation()
  console.log(cookies);
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home userType={userType} />} />

            <Route path="/login" element={
              <Login 
                userType={userType} 
                changeUserType={setUserType} 
                cookies={cookies}
                changeCookies={setCookie}
              />
              } />

            
            <Route path="/register" element={
              <Register userType={userType} userCookies={cookies.user}/>
            } />
            <Route path="/forgotpassword" element={
              <ForgotPass userCookies={cookies.user} />
              } />
            <Route path="test" element={<Test/>}/>
            <Route path="/contactus" element={<Contact userType={userType} />} />
            <Route path="/visitor/:id" element={
              <VisitorForm userType={userType} userCookies={cookies.user} />
              }/>

            <Route path="/dashboard" element={
              cookies.user == null ?
              <Navigate to="/login" replace />
              :<Main userType={userType}/>
            
            } title="Dashboard">

              <Route path="" element={
                cookies.user == null ?
                <Navigate to="/login" replace />
                :(
                userType == "Admin" ? (<Dashboard userType={userType} />) :
                  userType == "SocietyAdmin" ? (<SocietyDashboard userType={userType} />) :
                    (<MemberDashboard userType={userType} />))
              } />


              <Route path="familymembers" element={<FamilyMembers userType={userType} cookies={cookies}/>} />

              <Route path="societies" element={<Societies userType={userType} />} />

              

              <Route path="members" element={
                cookies.user == null ?
                <Navigate to="/login" replace />
                :<Members userType={userType} cookies={cookies}/>
              } />
              <Route path="members/:id" element={<SocMembers userType={userType} cookies={cookies}/>} />
              <Route path="payments" element={<PaymentLanding userType={userType} cookies={cookies}/>}/>
              <Route path="payments/:id" element={<Payments userType={userType} cookies={cookies}/>} />

              <Route path="complaints" element={<ComplaintsAndFeedback userType={userType} cookies={cookies}/>} />

              <Route path="notice" element={

                cookies.user == null ?
                <Navigate to="/login" replace />
                :<Notice userType={userType} cookies={cookies}/>
              } />

              {
                userType == "Admin" ? (<>
                  <Route path="gallery/" element={<Societies userType={userType} cookies={cookies}/>} />
                  <Route path="gallery/:society" element={<Gallery userType={userType} cookies={cookies}/>} />
                  <Route path="gallery/:society/:event" element={<Event userType={userType} cookies={cookies}/>} />

                </>) :
                  (
                    <>
                      <Route path="gallery/:event" element={<Event userType={userType} cookies={cookies}/>} />
                      <Route path="gallery" element={<Gallery userType={userType} cookies={cookies}/>} />
                    </>
                  )
              }

              <Route path="profile" element={<UserAccount userType={userType} cookies={cookies}/>} />

              <Route path="visitors" element={<Visitors userType={userType} cookies={cookies}/>} />
              <Route path="visitors/:id" element={<SocVisitors userType={userType} cookies={cookies}/>} />

              <Route path="account" element={<UserAccount userType={userType} cookies={cookies}/>}/>

              <Route path="tenants" element={
                cookies.user == null ?
                <Navigate to="/login" replace />
                :<Tenants userType={userType} cookies={cookies}/>
              } />
              <Route path="tenants/:id" element={<SocTenants userType={userType} cookies={cookies}/>}/>

              <Route path="reports" element={<h1>Reports</h1>} />

            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
