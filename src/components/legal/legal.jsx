import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../index.scss";

export const Legal = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* <div style={{ backgroundColor: "#f7a6a6", width: "100%" }}> */}
      <div className="container">
        <div className="row flex-xxl-row align-items-center g-5 mt-2">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 text-center">
            Legal Stuff &<span className="special-black"> Impressum</span>
          </h1>
          <div className="col-md-6 py-2 col-sm-12">
            <p className="lead mx-auto" style={{ textAlign: "justify" }}>
              <strong>Copyright Notice</strong>
              <br></br>
              All content on this website, including text, code, designs, and
              projects, is © 2024 and written by myself, unless otherwise
              specified. Unauthorized use, reproduction, or distribution of any
              material is prohibited without explicit permission. <br></br>
              <br></br>
              <br></br>
              <strong>Illustration of me</strong> Created with Tiktok Profile Avatar
              <strong>404 Error Page</strong> Illustration by <a className="footer-link" href="https://undraw.co/" target="_blank">unDraw</a>
              
              <hr></hr>

              <strong>Third-Party Libraries</strong>
              <br></br>
              This site uses third-party libraries, such as React.js and MUI X,
              in accordance with their respective licenses. Refer to their
              official documentation for license details.<hr></hr>
              <strong>Disclaimer</strong>
              <br></br>
              Examples and projects displayed are for illustrative and
              informative purposes only. Users are responsible for adhering to
              any third-party terms when implementing tools or libraries.
              <hr></hr>
            </p>
          </div>

          <div className="col-md-6 py-2 col-sm-12">
            <p className="lead mx-auto" style={{ textAlign: "justify" }}>
              <strong>Liability for Content</strong>
              <br></br>
              The content of this website has been created with the utmost care
              and is provided for informational purposes. However, I cannot
              guarantee the accuracy, completeness, or relevance of the
              information. As a private individual, I am not liable for any
              damages arising from the use of this website.<hr></hr>
              <strong>Liability for Links</strong>
              <br></br>
              This website contains links to third-party tools and resources. I
              have no control over the content of these external sites and do
              not assume responsibility for them. Users should verify the terms
              and policies of linked websites.<hr></hr>
              <strong>Webpage Owner: </strong> Claudia Koerner
              <br />
              <strong>Email: </strong><a className="footer-link" href="mailto:claudia.koerner@gmail.com" target="_blank" >claudia.koerner@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
