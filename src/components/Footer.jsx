import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="center">
        <div className="link center">
          <Link to="/contact" className="footer-link nav-link" href="">
            Contact
          </Link>
          <Link to="/about" className="footer-link nav-link" href="">
            About Us
          </Link>
        </div>
        <div className="copy center">
          <p>Copyright ⓒ {year}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
