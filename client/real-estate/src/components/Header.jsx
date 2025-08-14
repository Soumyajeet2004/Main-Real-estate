import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../components/Styles/Header.css';
import Button from 'react-bootstrap/Button';
import {Navbar, Nav} from 'react-bootstrap';


const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return <>
    <header>
    <div className="topbar">
      <h1>HomeConnect</h1>
      <div className="nav-links">
      {!token && (
        <>
          <Link to="/login"><Button className='button-85' variant="outline">Login</Button></Link>
          
          <Link to="/"><Button className="button-85">Register</Button></Link>
        </>
      )}
      
        { token && (<>
          <Link to="/home">Home</Link>
          <Link to="/buy">Buy</Link>
          <Link to="/sell">Sell</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Button className="button-85" onClick={handleLogout}>Logout</Button>
        </>)}
      
      </div>
    </div>
  </header>
  </>
}

export default Header