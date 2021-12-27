import Login from './pages/login';
import Register from './pages/register'
// import Email from './pages/email-register'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <div className = "App">
        <Routes>
          <Route path = "/login" element = { <Login /> } />
          <Route path = "/register" element = { <Register /> } />
          {/* <Route path = "/email" element = { <Email /> } /> */}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
