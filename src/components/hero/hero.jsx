// Hero.js
import React from "react";
import { useLanguage } from "../language";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../index.scss";
import myHeader from "../../assets/Header-bw-small.png";
import myCV from "../../assets/ClaudiaKoerner-CV.pdf";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = () => {
  const { language } = useLanguage();

  return (
    <div id="home">
      <div className="col-xxl-8 col-sm-12 container">
        <div className="row flex-sm-row-reverse align-items-center g-5 px-4">
          <div className="col-12 col-sm-6 d-flex justify-content-center flex-shrink-0">
            <img
              src={myHeader}
              className="d-block mx-md-auto img-fluid"
              loading="lazy"
              style={{ maxWidth: "450px" }}
            />
          </div>
          <div className="col-12 col-sm-6 py-4" minWidth="350px">
          <h1
  className="display-5 fw-bold text-body-emphasis lh-2 mb-3"
  style={{ fontSize: "clamp(2.1rem, 3.5vw, 3.7rem)" }}
>
  {language === "EN" ? (
    <>
      Claudia's <span className="special-purple">Full&nbsp;Stack</span>{" "}
      Project&nbsp;Portfolio
    </>
  ) : (
    <>
      Claudias <span className="special-purple">Full&nbsp;Stack</span>{" "}
      Projekt&nbsp;Portfolio
    </>
  )}
</h1>
            <p
              className="lead"
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                marginBottom: "30px",
              }}
            >
              {language === "EN"
                ? "This site is a collection of my web projects since 2007 including static websites, web apps, HTML newsletters and more. Enjoy browsing!"
                : "Diese Seite ist eine Sammlung meiner Webprojekte seit 2007, einschließlich statischer Websites, Web-Apps, HTML-Newsletter und mehr. Viel Spaß beim Stöbern!"}
            </p>
            <div>
              <a
                href="https://www.linkedin.com/in/claudiakoerner81/"
                target="_blank"
              >
                <button
                  type="button"
                  className="btn btn-black-purple btn-md px-3 me-2 mb-2 fs-6 fs-sm-5"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  &nbsp;&nbsp;LinkedIn
                </button>
              </a>
              <a href="https://github.com/koernerclaudia" target="_blank">
                <button
                  type="button"
                  className="btn btn-black-purple btn-md px-3 mb-2 me-2 fs-6 fs-sm-5"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  &nbsp;&nbsp;Github
                </button>
              </a>
              {/* <a href={myCV} target="_blank">
                <button
                  type="button"
                  className="btn btn-black-green btn-md px-3 mb-2 me-2 fs-6 fs-sm-5"
                >
                  {language === "EN" ? "CV (PDF)" : "Lebenslauf Herunterladen"}
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../../index.scss';
// import myHeader from '../../assets/Header-bw-small.png';
// import myCV from '../../assets/ClaudiaKoerner-CV.pdf';
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Correct brand icon
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// export const Hero = () => {
//   return (
   
//     <div id="home">
//       <div className="col-xxl-8 col-sm-12 container">
//         <div className="row flex-sm-row-reverse align-items-center g-5 px-4">
//           <div className=" col-12 col-sm-6 d-flex justify-content-center flex-shrink-0">
//             <img src={myHeader} className="d-block mx-md-auto img-fluid" loading="lazy" style={{maxWidth: "450px"}}/>
//           </div>
//           <div className="col-12 col-sm-6 py-4" minWidth="350px">
//             <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-3" style={{ fontSize: 'clamp(2.1rem, 3.5vw, 3.7rem)' }}>Claudia's  <span className="special-purple">Full&nbsp;Stack</span> Project&nbsp;Portfolio</h1>
//             <p className="lead" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '30px' }}>This site is a collection of my web projects since 2007 including static websites, web apps, HTML newsletters and more. Enjoy browsing!</p>
//             <div>
//   {/* <a href="https://koernerclaudia.com" target="_blank">
//     <button type="button" className="btn btn-primary btn-md px-3 me-2 mb-2 fs-6 fs-sm-5">My Website</button>
//   </a> */}
//   <a href="https://www.linkedin.com/in/claudiakoerner81/" target="_blank">
//     <button type="button" className="btn btn-black-purple btn-md px-3 me-2 mb-2 fs-6 fs-sm-5">
//       <FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;LinkedIn
//     </button>
//   </a>
//   <a href="https://github.com/koernerclaudia" target="_blank">
//     <button type="button" className="btn btn-black-purple btn-md px-3 mb-2 me-2 fs-6 fs-sm-5">
//       <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Github
//     </button>
//   </a>
//   <a href={myCV} download>
//     <button type="button" className="btn btn-black-green btn-md px-3 mb-2 me-2 fs-6 fs-sm-5">
//      CV Download
//     </button>
//   </a>
// </div>


//           </div>
//         </div>
//       </div>
//       </div>
//   );
// }
