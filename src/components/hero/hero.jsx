import React from "react";
import '../../index.scss';
import myHeader from '../../assets/Header-bw-small.png';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Correct brand icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = () => {
  return (
   
    <div className="border-top">
      <div className="container col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5 px-4">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={myHeader} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" loading="lazy" />
          </div>
          <div className="col-lg-6 py-5">
            <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-4">Claudia's  <span className="special-purple">Full Stack</span> Project&nbsp;Portfolio</h1>
            <p className="lead">This site showcases some my web & app projects I set up during, mainly during my Full Stack Development Training in summer of 2024. Enjoy browsing!</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-md px-4 me-md-2">My Website</button>
              <button type="button" className="btn btn-black-green btn-md px-4"><FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;LinkedIn</button>
              <button type="button" className="btn btn-black-purple btn-md px-4"> <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Github</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}
