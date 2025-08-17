import React from 'react';
import '../components/Styles/Footer.css';
import {Link} from 'react-router-dom';
import { FaLinkedin, FaLaptopCode } from "react-icons/fa"; // 🔹 icons


function Footer() {
  return <>
  <div className="ft">
  <footer className="footer">
      <div className="container d-flex justify-content-center gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/soumyajeet-saha-2b281125a/" // 🔹 replace
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaLinkedin size={28} />
        </a>

        {/* Portfolio */}
        <a
          href="https://main-portfolio-one-gamma.vercel.app" // 🔹 replace
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaLaptopCode size={28} />
        </a>
      </div>
      <p className="mt-3 mb-0 small">
        © {new Date().getFullYear()} Soumyajeet Saha | Full Stack Developer
      </p>
      <p><Link to ="/about" style={{textDecoration:"none",color: "antiquewhite"}}>About Us</Link> | 
    <Link to="/contact" style={{textDecoration:"none",color: "antiquewhite"}}> Contact Us</Link> </p>
    </footer>
  </div>
    
  </>
}

export default Footer