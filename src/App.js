import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useState} from 'react';

import ComplaintsAndFeedback from './pages/components/complaintsAndFeedback';
import Home from './pages/home';
import Main from './pages/main';

import Dashboard from './pages/components/dashboard';
import SocietyDashboard from './pages/components/societyDashboard';
import MemberDashboard from './pages/components/memberDashboard';

import Gallery from './pages/components/gallery';
import Event from './pages/components/events';
import Notice from './pages/components/notice';
import Tenants from './pages/components/tenants';
import Societies from './pages/components/societies';
import Contact from './pages/contact';
import Login from './pages/login.js'
import Register from './pages/register.js';
import UserAccount from './pages/components/useraccount';
import Visitor from './pages/components/visitors';
import Payments from './pages/components/payments';
import Members from './pages/components/members';
import FamilyMembers from './pages/components/familyMembers';
import ForgotPass from './pages/components/forgotpassword'
function App() {

  const [userType,setUserType] = useState("SocietyMember");
  const [userType,setUserType] = useState("Admin");

  return (
    <>
    <Router>
      <div className = "App">
        <Routes>
          <Route path="/" element={ <Home userType={userType} /> }/>
          
          <Route path="/login" element={ <Login userType={userType} changeUserType={setUserType}/> }/>
          
          <Route path="/register" element={ <Register userType={userType} /> }/>
          <Route path="/forgotpassword" element={<ForgotPass/>}/>
          <Route path="/contactus" element={<Contact userType={userType} />} />
          <Route path="/dashboard" element={<Main userType={userType} />} >
            
            <Route path="" element={ 
                userType=="Admin"?( <Dashboard userType={userType} /> ):
                userType=="SocietyAdmin"?( <SocietyDashboard userType={userType}/> ):
                ( <MemberDashboard userType={userType}/> )
            }/>
            

            <Route path="familymembers" element={<FamilyMembers userType={userType}/>}/>

            <Route path="societies" element={<Societies userType={userType}/>}/>

            <Route path="members" element={<Members userType={userType}/>}/>
          
            <Route path="payments" element={ <Payments userType={userType} /> }/>
          
            <Route path="complaints" element={ <ComplaintsAndFeedback userType={userType} /> }/>
                      
            <Route path="notice" element= { <Notice userType={userType} /> } />           
            
            {
              userType=="Admin"?(<>
                <Route path="gallery/" element={<Societies userType={userType} />} />
                <Route path="gallery/:society" element={<Gallery userType={userType} />} />
                <Route path="gallery/:society/:event" element={<Event userType={userType} />} />
                
                </>):
              (
                <>
                  <Route path="gallery/:event" element={<Event userType={userType} />} />
                  <Route path="gallery" element={<Gallery userType={userType} />} />
                </>
              )
            }

            <Route path="profile" element={<UserAccount userType={userType} />}/>
            
            <Route path="visitors" element={<Visitor userType={userType} />}/>

            <Route path="tenants" element={ <Tenants userType={userType} /> }/>
            
            <Route path="reports" element={<h1>Reports</h1>}/>
          
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
