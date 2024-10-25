import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../../index.scss";

export const NavBar = () => {
  // State for language and theme toggles
  const [language, setLanguage] = useState("EN");
  const [theme, setTheme] = useState("light"); // Light theme is default
  const [isDisabled, setIsDisabled] = useState(true); // Disable toggles for now
  

  // Function to toggle language
  const handleLanguageToggle = () => {
    setLanguage(language === "EN" ? "DE" : "EN");
  };

  // Function to toggle theme
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Apply theme class to the body
  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
   <div className="container">
      <Nav className="navbar navbar-expand-md navbar-white bg-white py-3 mb-2">
  <div className="container-fluid">
    {/* Brand / Header Title */}
    <a href="/" className="navbar-brand d-flex align-items-center">
      <svg className="bi me-2" width="40" height="32"></svg>
      <span className="fs-4">{language === "EN" ? "Simple header" : "Einfacher Header"}</span>
    </a>



 

      {/* Right Side Toggle Switches */}
      <div className="d-flex align-items-center ms-auto">
        {/* Language Toggle */}
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

        {/* Theme Toggle */}
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
                <button className="btn btn-primary ">{language === "EN" ? "Projects" : "Projekte"}</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">{language === "EN" ? "Skills" : "Fähigkeiten"}</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary ">{language === "EN" ? "Tools" : "Werkzeuge"}</button>
              </li>
            </ul>
         
    
    </div>
  </div>
</Nav>
</div>


 
  );
};
