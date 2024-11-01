import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "../../index.scss"; // If you have custom styles
import { useEffect, useState } from "react";
import axios from "axios";


// Define a mapping of PrimaryGroup values to Bootstrap button classes
const buttonClassMap = {
  frontend: "primary",
  backend: "secondary",
  styling: "black-green",
  meta: "black-green",
  programming: "primary",
  stack: "black-purple",
  databases: "secondary",
  webdev: "black-green", // For a link style button
  appdev: "black-purple", // For a link style button
  // Add more mappings as needed
};

export const Tools = () => {
  const [toolsData, setToolsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Skills`, 
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`, 
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Map the data to the desired structure
        const fetchedTools = data.records.map((record) => ({
          name: record.fields.TechStack || "Unknown", // Fallback for TechStack
          link: record.fields.Link || "#", // Fallback if Link is not available
          type: buttonClassMap[record.fields.PrimaryGroup?.toLowerCase()] || "primary", // Use the mapping for button type
        }));

        setToolsData(fetchedTools);
      } catch (error) {
        console.error("Error fetching data from Airtable:", error);
        setError("Failed to fetch tools data.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>; // Render error message
  }

  return (
    <>
      <div className="px-4 py-5 my-5 text-center mb-5" style={{ backgroundColor: "#f3eefa" }} id="tools">
        <h1 className="display-5 fw-bold text-body-emphasis">Tools & <span className="special-black">Technologies</span></h1>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4">These are the tools, frameworks, libraries, programming & meta languages and more that I have been training on...</p>
          <div className="d-grid d-sm-flex justify-content-sm-center flex-wrap">
            {toolsData.map((tool, index) => (
              <a key={index} href={tool.link} target="_blank" rel="noopener noreferrer">
                <button type="button" className={`btn btn-${tool.type} btn-md px-4 gap-1 m-2`}>
                  {tool.name}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

