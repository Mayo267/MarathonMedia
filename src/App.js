import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//import Button from 'react-bootstrap/Button'
import Home from './Pages/Home'
import News from './Pages/News'
import Reviews from './Pages/Reviews'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile';

function App() {
  return ( 
    <Router>
     {/* Navbar here */}
      <Link to="/"> Home </Link>
      <Link to="/News"> News </Link>
      <Link to="/Reviews"> Reviews </Link>
      <Link to="/Contact"> Contact </Link>
      <Link to="/Login"> Login </Link>
      <Link to="/Signup"> Signup </Link>
      <Link to="/Profile"> Profile </Link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/Reviews" element={<Reviews/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
