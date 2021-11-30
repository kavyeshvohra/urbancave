import './App.css';

import Home from './pages/home';
import Main from './pages/main';
import Contact from './pages/contact';

import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/main" element={<Main />} />
                  <Route path="/contactus" element={<Contact />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
