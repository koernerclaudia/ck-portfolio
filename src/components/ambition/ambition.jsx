import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../index.scss';
import Dekra from '../../assets/Dekra-Siegel.png'
import CIW from '../../assets/CIW.png'


export const Ambition = () => {
  return (
    <div style={{ backgroundColor: "#f3eefa", width: "100%" }}>
       {/* <div style={{ backgroundColor: "#f7a6a6", width: "100%" }}> */}
    <div className="container" >
      <div className="my-5 text-center px-4">
        <div className="row flex-xxl-row align-items-center g-5">
          <div className="col-md-6 py-4 col-sm-12">
            <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-5 text-center">
              Passion &amp;<span className="special-black"> Ambition</span>
            </h1>
            <p className="lead mx-auto" style={{textAlign: "justify"}}>
            I love building visuals, always have! I was lucky that early my career in assisting startup founders & leaders I was given the opportunity to dive into web development &amp; UI Design and spearhead some creative projects for my employers, including websites, newsletters, internal wikis; also pitch decks, presentations & other visual materials.
              <br></br><br></br>With an enhanced set of skills in Full Stack Development and my current deep dive into the Automation & AI landscape, I am aiming for a full time career in creating digital products with a focus in FrontEnd solutions using code, low-code and no-code tools.
                         </p>

          </div>
          <div className="col-md-6 py-4 col-sm-12">
            <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-5 text-center">
              <span className="special-black">Full Stack </span>Trained
            </h1>
           
            <p className="lead mx-auto" style={{textAlign: "justify"}}>
              I started out with HTML and CSS (CIW certified) over 15 years ago and have been navigating through different web tools ever since.<br></br><br></br> In 2024 I took the leap to become a Full Stack Web Developer
               (DEKRA certified).
            </p>
           
            <img className="p-4"src={CIW} />
            <img className="p-4" src={Dekra} />
             
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};
