import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <header className="d-flex flex-wrap justify-content-between py-4 mb-2">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">{language === "EN" ? "Simple header" : "Einfacher Header"}</span>
        </a>

 {/* Language Toggle Switch */}
 <div className="form-check form-switch me-3">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="languageToggle" 
            disabled={isDisabled} // Disabled attribute
            onChange={handleLanguageToggle} 
            checked={language === "DE"} 
          />
          <label className="form-check-label" htmlFor="languageToggle">
            {language === "EN" ? "EN" : "DE"}
          </label>
        </div>

        {/* Theme Toggle Switch */}
        <div className="form-check form-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="themeToggle" 
            disabled={isDisabled} // Disabled attribute
            onChange={handleThemeToggle} 
            checked={theme === "dark"} 
          />
          <label className="form-check-label" htmlFor="themeToggle">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </label>
</div>



        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="btn btn-outline-primary" aria-current="page">{language === "EN" ? "Home" : "Startseite"}</a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-primary">{language === "EN" ? "Projects" : "Projekte"}</a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-primary">{language === "EN" ? "Skills" : "Fähigkeiten"}</a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-outline-primary">{language === "EN" ? "Tools" : "Werkzeuge"}</a>
          </li>
        </ul>

       
        
      </header>
    </div>
  );
};
