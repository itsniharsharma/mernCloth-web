import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,  //changing Switch-->Routes, change accorging to new version
  Route
} from "react-router-dom";

import Login from './screens/Login';
import Istore from './screens/Istore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <Router>
      <div>
       
       <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/login" element={<Login/>}/>
           <Route exact path="/Istore" element={<Istore/>}/>
       </Routes>

      </div>
    </Router>
  );
}

export default App;