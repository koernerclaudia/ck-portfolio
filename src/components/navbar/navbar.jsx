import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../../index.scss";
import "./navbar.scss";

export const NavBar = () => {
  const [language, setLanguage] = useState("EN");
  const [theme, setTheme] = useState("light");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleLanguageToggle = () => {
    setLanguage(language === "EN" ? "DE" : "EN");
  };

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
    <div className="container">
      <Nav className="navbar navbar-expand-lg navbar-white bg-white py-3 mb-2">
        <div className="container-fluid">
          {/* Brand / Header Title */}
          
  

          {/* Right Side Toggle Switches */}
          <div className="d-flex align-items-center ms-auto">
            <div className="form-check form-switch me-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="languageToggle" 
                disabled={isDisabled}
                onChange={handleLanguageToggle} 
                checked={language === "DE"} 
              />
              <label className="form-check-label" htmlFor="languageToggle">
                {language === "EN" ? "EN" : "DE"}
              </label>
            </div>

            <div className="form-check form-switch">
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
            </div>
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

          {/* Collapsible Menu Content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Navigation Buttons */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom-nav-buttons">
              <li className="nav-item">
                <button className="btn btn-outline-primary">{language === "EN" ? "Home" : "Startseite"}</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">{language === "EN" ? "Projects" : "Projekte"}</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">{language === "EN" ? "Skills" : "Fähigkeiten"}</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary">{language === "EN" ? "Tools" : "Werkzeuge"}</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary">{language === "EN" ? "About me" : "Über mich"}</button>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </div>
  );
};
