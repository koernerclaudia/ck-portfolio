import React from "react";
import "../../index.scss";


export const AboutMe = () => {
  return (
    <div className='px-4 py-5 my-5 border-top'>
    <div className="container">
       <h1 className="display-5 fw-bold text-body-emphasis text-center">Quick info <span className="special-purple">about me</span></h1>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <h3 className="fs-2 text-body-emphasis">Back then...</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" className="icon-link">
          Call to action
          <svg className="bi"></svg>
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <h3 className="fs-2 text-body-emphasis">Now</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" className="icon-link">
          Call to action
          <svg className="bi"></svg>
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" className="icon-link">
          Call to action
          <svg className="bi"></svg>
        </a>
      </div>
    </div>
  </div>
  </div>
  );
}