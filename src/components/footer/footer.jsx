import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "../../index.scss";
import { faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
  return (
    <div className="border-top">
     <div className="container" >
  <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
    <p className="col-md-4 col-sm-12 mb-0" style={{color: "#212529"}}>Made in 2024 with loads of <FontAwesomeIcon style={{color: "#997dff"}} icon={faCoffee} />&nbsp; & <FontAwesomeIcon style={{color: "#997dff"}} icon={faHeart} />.</p>

    <a href="/" className="col-md-4 col-sm-12 d-flex align-items-start justify-content-start link-body-emphasis text-decoration-none">
      <svg width="40" height="32"><FontAwesomeIcon style={{color: "#997dff"}} icon={faGithub} /></svg>
      <svg  width="40" height="32"><FontAwesomeIcon style={{color: "#997dff"}} icon={faInstagram} /></svg>
      <svg  width="40" height="32"><FontAwesomeIcon style={{color: "#997dff"}} icon={faLinkedin} /></svg>
    </a>

    <ul className="nav col-md-4 col-sm-12 justify-content-end">
 
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Legal Stuff</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Impressum</a></li>
    </ul>
  </div>
</div>
</div>
  );
}