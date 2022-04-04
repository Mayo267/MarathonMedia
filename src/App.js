import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import NavBar from './Components/Navbar'
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
      <NavBar/>
    
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
