import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./project-list.scss";
import "../../index.scss";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Correct brand icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectList = () => {
  const [records, setRecords] = useState([]);
  const [techStackNames, setTechStackNames] = useState({});
  const colors = ["#f3eefa"]; // add more colors as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/CaseStudies`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
            params: { sort: [{ field: "App#", direction: "asc" }] },
          }
        );
        setRecords(response.data.records);

        const techStackIds = [
          ...new Set(
            response.data.records.flatMap(
              (record) => record.fields.TechStack || []
            )
          ),
        ];

        const techStackResponse = await axios.get(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Skills`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
            params: {
              filterByFormula: `OR(${techStackIds
                .map((id) => `RECORD_ID()='${id}'`)
                .join(",")})`,
            },
          }
        );

        const techStackNameMapping = {};
        techStackResponse.data.records.forEach((record) => {
          techStackNameMapping[record.id] = record.fields.TechStack;
        });
        setTechStackNames(techStackNameMapping);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-4 py-2 my-5" id="projects">
      <div className="container">
        <h1 className="display-5 fw-bold text-body-emphasis text-center">
          <span className="special-purple">Projects</span> so far
        </h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
          {records.map((record, index) => (
            <div className="col" key={record.id}>
              <div
                className="card h-100"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <img
                  className="bd-placeholder-img card-img-top"
                  src={record.fields.Image1 ? record.fields.Image1[0].url : "#"}
                  alt={record.fields.AppTitle || "Placeholder"}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />

                <div className="card-body">
                  <div><h5 style={{fontWeight: "bold"}} className="card-title">{record.fields.AppTitle}</h5>
                  <h6 style={{fontWeight: "bold", color:'#212529'}} className="card-title">Topic: <span style={{fontWeight: "bold", color:'#997dff'}}>{record.fields.Topic}</span></h6>
                  <p className="card-text">{record.fields.Blurb}</p>
                  <hr></hr>
                  <p style={{fontWeight: "bold"}}>
                    TechStack - Tools - Methodology:
                    <br />
                    {(record.fields.TechStack || []).map((id) => (
                      <button key={id} className="btn-small-tech">
                        {techStackNames[id] || id}
                      </button>
                    ))}
                  </p></div><hr></hr>
                  <div  style={{
      marginTop: "auto", // Push this div to the bottom
      display: "flex",
      gap: "5px", // Add spacing between buttons
      justifyContent: "left", // Center buttons horizontally
      paddingRight: "5px",
    }}>
                  <Link
                    to={`/item/${record.id}`}
                    className="btn btn-primary mt-2"
                  >
                    View Details
                  </Link>
                  {record.fields.GithubLink && (
                    <a
                      href={record.fields.GithubLink}
                      className="btn btn-black-purple mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      &nbsp;&nbsp;Github
                    </a>
                  )}
                  {record.fields.LiveApp && (
                    <a
                      href={record.fields.LiveApp}
                      className="btn btn-secondary mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live App
                    </a>
                  )}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
