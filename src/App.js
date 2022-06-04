import './App.css';
import { BrowserRouter as Router, Routes, Route, withRouter, BrowserRouter } from "react-router-dom";
import NGO from './components/NGO/ngo.js';
import Landing from './components/Landing/landing';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
          <Route exact path="/" element={<Landing />}/>
            
          <Route exact path="/ngo" element={<NGO/>}/>
            
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
