import React from "react";
import '../../index.scss';
import myHeader from '../../assets/Header-bw-small.png';

export const Hero = () => {
  return (
   
    <div className="border-bottom border-top">
      <div className="container col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5 px-4">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={myHeader} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" loading="lazy" />
          </div>
          <div className="col-lg-6  py-5">
            <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-4">Claudia's  <span className="special-purple">Full Stack</span> Project&nbsp;Portfolio</h1>
            <p className="lead">This site showcases some web & app projects I set up during my Full Stack Development Training during the summer of 2024. Enjoy browsing!</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-md px-4 me-md-2">My Website</button>
              <button type="button" className="btn btn-secondary btn-md px-4">LinkedIn</button>
              <button type="button" className="btn btn-black btn-md px-4">Github</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}
