import React from "react";
import { useLanguage } from "../language";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../index.scss';
import Dekra from '../../assets/Dekra-Siegel.png'
import CIW from '../../assets/CIW.png'


export const Ambition = () => {
  const { language } = useLanguage();

  return (
    <div style={{ backgroundColor: "#e4e5fa", width: "100%" }}>
      <div className="container">
        <div className="my-5 text-center px-4">
          <div className="row flex-xxl-row align-items-center g-5">
            {/* Left Section */}
            <div className="col-md-6 py-4 col-sm-12">
              <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-5 text-center">
                {language === "EN" ? (
                  <>
                    Passion &amp;<span className="special-black"> Ambition</span>
                  </>
                ) : (
                  <>
                    Meine <span className="special-black"> Ambitionen</span>
                  </>
                )}
              </h1>
              <p className="lead mx-auto" style={{ textAlign: "justify" }}>
                {language === "EN" ? (
                  <>
                    I love building visuals, always have! I was lucky that early
                    in my career assisting startup founders & leaders, I was
                    given the opportunity to dive into web development &amp; UI
                    Design and spearhead some creative projects for my
                    employers, including websites, newsletters, internal wikis;
                    also pitch decks, presentations & other visual materials.
                    <br />
                    <br />
                    With an enhanced set of skills in Full Stack Development
                    and my current deep dive into the Automation & AI
                    landscape, I am aiming for a full-time career in creating
                    digital products with a focus on FrontEnd solutions using
                    code, low-code, and no-code tools.
                  </>
                ) : (
                  <>
                    Ich liebe es, visuelle Inhalte zu erstellen – das war schon
                    immer so! Früh in meiner Karriere, als ich Startup-Gründer
                    und Führungskräfte unterstützte, hatte ich das Glück, die
                    Möglichkeit zu bekommen, in die Webentwicklung und UI-Design
                    einzutauchen und kreative Projekte für meine Arbeitgeber zu
                    leiten, darunter Websites, Newsletter, interne Wikis sowie
                    Pitch-Decks, Präsentationen und andere visuelle Materialien.
                    <br />
                    <br />
                    Mit erweiterten Fähigkeiten in der Full-Stack-Entwicklung
                    und meinem aktuellen intensiven Einstieg in die
                    Automatisierungs- und KI-Landschaft strebe ich eine
                    Vollzeitkarriere in der Erstellung digitaler Produkte an,
                    mit einem Fokus auf Frontend-Lösungen unter Verwendung von
                    Code-, Low-Code- und No-Code-Tools.
                  </>
                )}
              </p>
            </div>

            {/* Right Section */}
            <div className="col-md-6 py-4 col-sm-12">
              <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-5 text-center">
                {language === "EN" ? (
                  <>
                    <span className="special-black">Full Stack </span>Trained
                  </>
                ) : (
                  <>
                    <span className="special-black">Full Stack </span>trainiert
                  </>
                )}
              </h1>
              <p className="lead mx-auto" style={{ textAlign: "justify" }}>
                {language === "EN" ? (
                  <>
                    I started out with HTML and CSS (CIW certified) over 15
                    years ago and have been navigating through different web
                    tools ever since.
                    <br />
                    <br />
                    In 2024, I took the leap to become a Full Stack Web
                    Developer (DEKRA certified).
                  </>
                ) : (
                  <>
                    Ich habe vor über 15 Jahren mit HTML und CSS (CIW-zertifiziert) angefangen und mich seitdem durch verschiedene Web-Tools bewegt.
                    <br />
                    <br />
                    2024 wagte ich den Sprung zum Full Stack Web Developer (DEKRA-zertifiziert).
                  </>
                )}
              </p>
              <img className="p-4" src={CIW} alt="CIW Certification" />
              <img className="p-4" src={Dekra} alt="Dekra Certification" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
