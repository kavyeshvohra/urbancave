import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ComplaintsAndFeedback from './pages/components/complaintsAndFeedback';
import Home from './pages/home';
import Main from './pages/main';
import Dashboard from './pages/components/dashboard';
import Gallery from './pages/components/gallery';
import Event from './pages/components/events';
import Notice from './pages/components/notice';
import Tenants from './pages/components/tenants';
import Societies from './pages/components/societies';
import Contact from './pages/contact';
import Login from './pages/login.js'
import Register from './pages/register.js';
import UserAccount from './pages/components/useraccount';

function App() {
  return (
    <>
    <Router>
      <div className = "App">
        <Routes>
          <Route path="/" element={ <Home/> }/>
          
          <Route path="/login" element={ <Login/> }/>
          
          <Route path="/register" element={ <Register/> }/>

          <Route path="/contactus" element={<Contact/>} />
          <Route path="/main" element={<Main/>} >
            
            <Route path="" element={ <Dashboard/> }/>
            
            <Route path="societies" element={ <Societies/> }/>
            
            <Route path="members" element={<h1>Members</h1>}/>
          
            <Route path="payments" element={<h1>Payments</h1>}/>
          
            <Route path="complaints" element={ <ComplaintsAndFeedback/> }/>
                      
            <Route path="notice" element= { <Notice/> } />
            
            <Route path="gallery" element={<Gallery/>} />
            <Route path="gallery/:event" element={<Event/>} />
            
            <Route path="profile" element={ <UserAccount/> }/>
            
            <Route path="visitors" element={<h1>visitors</h1>}/>

            <Route path="tenants" element={ <Tenants/> }/>
            
            <Route path="reports" element={<h1>Reports</h1>}/>
          
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
