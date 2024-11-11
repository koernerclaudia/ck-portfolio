import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "../../index.scss";
import { faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
  return (
    <div>
     <div className="container" >
  <div className="d-flex flex-wrap justify-content-between align-items-center py-1 my-1 mt-0">
    <p className="col-md-4 col-sm-12 mb-3" style={{color: "#212529"}}>Made in 2024 with loads of <FontAwesomeIcon style={{color: "#997dff"}} icon={faCoffee} />&nbsp; & <FontAwesomeIcon style={{color: "#997dff"}} icon={faHeart} />.</p>

    {/* <div className="col-md-4 col-sm-12 d-flex align-items-start justify-content-start link-body-emphasis text-decoration-none">
    <a href="https://github.com/koernerclaudia" target="_blank"><svg width="40" height="32"><FontAwesomeIcon style={{color: "#997dff"}} icon={faGithub} /></svg></a> */}
      {/* <svg  width="40" height="32"><FontAwesomeIcon style={{color: "#997dff"}} icon={faInstagram} /></svg> */}
      {/* <a href="https://www.linkedin.com/in/claudiakoerner81/" target="_blank"><svg  width="40" height="32"><FontAwesomeIcon style={{color: "#997dff"}} icon={faLinkedin} /></svg></a>
    </div> */}

    <ul className="nav col-md-4 col-sm-12 justify-content-end">
 
      {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Legal Stuff</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Impressum</a></li> */}
    </ul>
  </div>
</div>
</div>
  );
}