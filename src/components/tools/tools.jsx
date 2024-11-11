import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../index.scss"; // If you have custom styles
import axios from "axios";

// Define a mapping of PrimaryGroup values to Bootstrap button classes
const buttonClassMap = {
  "front end webdev": "primary",
  "testing": "secondary",
  "styling": "black-purple",
  "no code": "info",
  programming: "secondary",
  databases: "secondary",
  "backend webdev": "black-green",
  "mobile app dev": "primary",
  // More mappings as needed
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

        // Filter and map the data as needed
        const fetchedTools = data.records
          .filter((record) => record.fields.ToolCloud === true) // Only include records where ToolCloud is checked
          .map((record) => ({
            name: record.fields.TechStack || "Unknown", // Fallback for TechStack
            link: record.fields.Link || "#", // Fallback if Link is not available
            type:
              buttonClassMap[record.fields.PrimaryGroup?.toLowerCase()] ||
              "primary", // Use the mapping for button type
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
      <div
        className="px-4 py-5 my-5 text-center mb-5"
        style={{ backgroundColor: "#f3eefa" }}
        id="tools"
      >
        <h1 className="display-5 fw-bold text-body-emphasis">
          Tools & <span className="special-black">Technologies</span>
        </h1>
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 mx-auto">
          <p className="lead mb-4">
            A list of tools, technologies, frameworks and libraries that I have
            used in my projects. Click on the buttons to learn more and be
            taken to the official documentation.
          </p>
          <div className="random-button-grid d-flex flex-wrap justify-content-center gap-0">
            {toolsData.map((tool, index) => (
              <a
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className={`btn btn-${tool.type} px-3 py-2 d-inline-flex align-items-center`}
                  style={{
                    maxWidth: "200px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
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
