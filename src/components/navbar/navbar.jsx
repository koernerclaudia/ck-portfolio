// NavBar.js
import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../language";

export const NavBar = () => {
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  return (
    <div className="border-bottom sticky-top bg-white">
      <div className="container">
        <Nav className="navbar navbar-expand-md navbar-white py-3 w-100 ">
          <div className="container-fluid">
            <div className="d-flex align-items-center me-auto ms-md-auto">
            {/* <div className="form-check form-switch me-3">
  <input
    className="form-check-input"
    type="checkbox"
    id="languageToggle"
    onChange={toggleLanguage}
    checked={language === "DE"}
    style={{ backgroundColor: language === "DE" ? "#528A8F" : "#997dff", borderColor: language === "DE" ? "#528A8F" : "#997dff", }}
  />
  <label className="form-check-label" htmlFor="languageToggle">
    {language === "EN" ? "EN" : "DE"}
  </label>
</div> */}
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
                {location.pathname === "/" ? (
                  <>
                    <li className="nav-item custom-nav-buttons">
                      <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        className="btn btn-outline-primary"
                      >
                        {language === "EN" ? "Home" : "Startseite"}
                      </ScrollLink>
                    </li>
                    <li className="nav-item custom-nav-buttons">
                      <ScrollLink
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="btn btn-primary"
                      >
                        {language === "EN" ? "Projects" : "Projekte"}
                      </ScrollLink>
                    </li>
                    {/* <li className="nav-item custom-nav-buttons">
                      <ScrollLink
                        to="skills"
                        smooth={true}
                        duration={500}
                        className="btn btn btn-primary"
                      >
                        {language === "EN" ? "Skills" : "Fähigkeiten"}
                      </ScrollLink>
                    </li> */}
                    <li className="nav-item custom-nav-buttons">
                      <ScrollLink
                        to="tools"
                        smooth={true}
                        duration={500}
                        className="btn btn btn-primary"
                      >
                        {language === "EN" ? "Tools" : "Tools"}
                      </ScrollLink>
                    </li>
                  </>
                ) : (
                  <li className="nav-item custom-nav-buttons">
                    <Link to="/" className="btn btn-outline-primary">
                      {language === "EN"
                        ? "Back to Home"
                        : "Zurück zur Startseite"}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </Nav>
      </div>
    </div>
  );
};





// import React, { useState, useEffect } from "react";
// import Nav from "react-bootstrap/Nav";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Link as ScrollLink } from "react-scroll";
// import { Link, useLocation } from "react-router-dom";
// import "../../index.scss";

// export const NavBar = () => {
//   const [language, setLanguage] = useState("EN");
//   const [theme, setTheme] = useState("light");
//   const [isDisabled, setIsDisabled] = useState(true);
//   const location = useLocation();

 
//   const handleLanguageToggle = () => {
//     setLanguage(language === "EN" ? "DE" : "EN");
//   };

//   const handleThemeToggle = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   useEffect(() => {
//     document.body.className = theme === "light" ? "light-theme" : "dark-theme";
//   }, [theme]);

//   return (
//     <div className="border-bottom">
//       <div className="container">
//         <Nav className="navbar navbar-expand-md navbar-white bg-white py-3 w-100">
//           <div className="container-fluid">
//             <div className="d-flex align-items-center me-auto ms-md-auto">

//               {/* Language Toggle */}
//                <div className="form-check form-switch me-3">
//                 <input 
//                   className="form-check-input" 
//                   type="checkbox" 
//                   id="languageToggle" 
//                   onChange={handleLanguageToggle} 
//                   checked={language === "DE"} 
//                 />
//                 <label className="form-check-label" htmlFor="languageToggle">
//                   {language === "EN" ? "EN" : "DE"}
//                 </label>
//               </div> 

              {/* Theme Toggle */}
              {/* <div className="form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="themeToggle" 
                  disabled={isDisabled}
                  onChange={handleThemeToggle} 
                  checked={theme === "dark"} 
                />
                <label className="form-check-label" htmlFor="themeToggle">
                  {theme === "light" ? "Light" : "Dark"}
                </label>
              </div>*/}
//             </div> 

//             <button 
//   className="navbar-toggler" 
//   type="button" 
//   data-bs-toggle="collapse" 
//   data-bs-target="#navbarNav" 
//   aria-controls="navbarNav" 
//   aria-expanded="false" 
//   aria-label="Toggle navigation"
// >
//   <span className="navbar-toggler-icon"></span>
// </button>

//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
//                 {location.pathname === "/" ? (
//                   <>
//                     <li className="nav-item custom-nav-buttons">
//                       <ScrollLink to="home" smooth={true} duration={500} className="btn btn-outline-primary">
//                         {language === "EN" ? "Home" : "Startseite"}
//                       </ScrollLink>
//                     </li>
//                     <li className="nav-item custom-nav-buttons">
//                       <ScrollLink to="projects" smooth={true} duration={500} className="btn btn-primary">
//                         {language === "EN" ? "Projects" : "Projekte"}
//                       </ScrollLink>
//                     </li>
//                     {/* <li className="nav-item custom-nav-buttons">
//                       <ScrollLink to="skills" smooth={true} duration={500} className="btn btn-primary">
//                         {language === "EN" ? "Skills" : "Fähigkeiten"}
//                       </ScrollLink>
//                     </li> */}
//                     <li className="nav-item custom-nav-buttons">
//                       <ScrollLink to="tools" smooth={true} duration={500} className="btn btn-outline-primary">
//                         {language === "EN" ? "Tools" : "Tools"}
//                       </ScrollLink>
//                     </li>
//                   </>
//                 ) : (
//                   <li className="nav-item custom-nav-buttons">
//                     <Link to="/" className="btn btn-outline-primary">
//                       {language === "EN" ? "Back to Home" : "Zurück zur Startseite"}
//                     </Link>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </Nav>
//       </div>
//     </div>
//   );
// };
