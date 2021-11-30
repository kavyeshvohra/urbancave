import Login from './pages/login';
import Register from './pages/register'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <div className = "App">
        <Routes>
          <Route path = "/login" element = { <Login /> } />
          <Route path = "/register" element = { <Register /> } />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
