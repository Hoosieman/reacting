import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from './pages/Locations';
import Login from './pages/Login';
import Order from './pages/Order';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/Locations' element={<Locations />} />
          <Route path='/About' element={<About />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
