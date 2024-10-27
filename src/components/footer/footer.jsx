import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../index.scss";
import { faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Footer = () => {
  return (
    <div className="border-top">
     <div className="container" >
  <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
    <p className="col-md-4 mb-0" style={{color: "#212529"}}>Made in 2024 with loads of <FontAwesomeIcon style={{color: "#997dff"}} icon={faCoffee} />&nbsp; & <FontAwesomeIcon style={{color: "#997dff"}} icon={faHeart} />.</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"></svg>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Email me</a></li>
    </ul>
  </div>
</div>
</div>
  );
}