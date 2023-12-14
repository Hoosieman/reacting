import logo from './logo.svg';
import './App.css';
import Index from "./pages/Index";
import About from "./pages/About";
import Header from './components/header';
import Footer from './components/footer';
import Clickdrink from './components/clickdrink';
import Locations from './pages/Locations';
import Login from './pages/Login';
import Order from './pages/Order';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
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
