import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div>
    <div className="container">
      <div className="row py-1 my-1 mt-0 mb-5">
       
        <div
          className="col-lg-4 col-md-12 text-center text-lg-center mb-3 mb-lg-0"
          style={{ color: "#212529" }}
        >
          Made in 2024 with loads of{" "}
          <FontAwesomeIcon style={{ color: "#997dff" }} icon={faCoffee} />
          &nbsp; &{" "}
          <FontAwesomeIcon style={{ color: "#997dff" }} icon={faHeart} />.
        </div>
  
    
        <div
        className="col-lg-4 col-md-12 d-flex flex-wrap justify-content-center align-items-center"
        style={{ gap: "12px" }} // Set a fixed gap here
      >
        <a href="https://github.com/koernerclaudia" target="_blank">
          <FontAwesomeIcon
            style={{ color: "#997dff", fontSize: "1.5rem" }}
            icon={faGithub}
          />
        </a>
        <a href="https://www.instagram.com/cldkrnr/" target="_blank">
          <FontAwesomeIcon
            style={{ color: "#997dff", fontSize: "1.5rem" }}
            icon={faInstagram}
          />
        </a>
        <a href="https://www.linkedin.com/in/claudiakoerner81/" target="_blank">
          <FontAwesomeIcon
            style={{ color: "#997dff", fontSize: "1.5rem" }}
            icon={faLinkedin}
          />
        </a>
      </div>
  
     
        <ul className="col-lg-4 col-md-12 nav justify-content-center justify-content-lg-end">
          <li className="nav-item">
            <a href="/legal" className="footer-link px-2 text-body-secondary">
              Legal & Impressum
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  );
};
