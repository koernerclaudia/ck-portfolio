import React from 'react';
import { createRoot } from "react-dom/client";
import { Main } from "./components/portfolio-main/main";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "./index.scss";



const Portfolio = () => {
 return <Main />

 ;
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Portfolio />);






