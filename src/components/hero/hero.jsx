import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../index.scss';
import myHeader from '../../assets/Header-bw-small.png';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Correct brand icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Hero = () => {
  return (
   
    <div className="border-top" id="home">
      <div className="col-xxl-8 container">
        <div className="row flex-sm-row-reverse align-items-center g-5 px-4">
          <div className="col-12 col-sm-6">
            <img src={myHeader} className="d-block mx-md-auto" alt="Bootstrap Themes" width="400" loading="lazy" />
          </div>
          <div className="col-12 col-sm-6 py-4">
            <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-3" style={{ fontSize: 'clamp(2.5rem, 3.5vw, 4rem)' }}>Claudia's  <span className="special-purple">Full&nbsp;Stack</span> Project&nbsp;Portfolio</h1>
            <p className="lead" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '30px' }}>This is a collection of my web projects across the years. Enjoy browsing!</p>
            <div>
  {/* <a href="https://koernerclaudia.com" target="_blank">
    <button type="button" className="btn btn-primary btn-md px-3 me-2 mb-2 fs-6 fs-sm-5">My Website</button>
  </a> */}
  <a href="https://www.linkedin.com/in/claudiakoerner81/" target="_blank">
    <button type="button" className="btn btn-black-purple btn-md px-3 me-2 mb-2 fs-6 fs-sm-5">
      <FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;LinkedIn
    </button>
  </a>
  <a href="https://github.com/koernerclaudia" target="_blank">
    <button type="button" className="btn btn-black-purple btn-md px-3 mb-2 fs-6 fs-sm-5">
      <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Github
    </button>
  </a>
</div>


          </div>
        </div>
      </div>
      </div>
  );
}
