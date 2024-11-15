import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Card, Col, Row, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Correct brand icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemDetail = () => {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [techStackNames, setTechStackNames] = useState({});

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        // Fetch the main record details
        const response = await axios.get(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/CaseStudies/${id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
          }
        );
        setRecord(response.data);

        // If TechStack field exists, fetch related names
        const techStackIds = response.data.fields.TechStack || [];

        // Fetch names of all TechStack items referenced in this record
        if (techStackIds.length > 0) {
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

          // Map each TechStack ID to its name
          const techStackNameMapping = {};
          techStackResponse.data.records.forEach((record) => {
            techStackNameMapping[record.id] = record.fields.TechStack; // Assuming the field is named 'TechStack'
          });
          setTechStackNames(techStackNameMapping);
        }
      } catch (error) {
        console.error("Error fetching record:", error);
      }
    };

    fetchRecord();
  }, [id]);

  if (!record) {
    return <div className="container py-5">Loading...</div>;
  }

  return (
    <div className="container py-5 px-4">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4 align-items-start">
          <div className=" p-4">
            <h2 className="display-6 fw-bold">{record.fields.AppTitle}</h2>
            <p className="lead">
              {record.fields.Blurb}
              <hr></hr>
              <p className="mt-3">
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
                )}
              </p>{" "}
              <hr></hr>
              <strong>Topic: </strong> {record.fields.Topic}
              <br />
              <strong>Completion: </strong> {record.fields.Completion}
              <br />
              <strong>Client / Employer / Training: </strong>{" "}
              {record.fields.ClientEmployerTraining}
            </p>
            <hr></hr>

            <p className="lead">
              {" "}
              <strong>Project Objective:</strong>
              <br></br>
              {record.fields.ProjectObjective.split("\n").map(
                (feature, index) => (
                  <p key={index}>{feature}</p>
                )
              )}
            </p>
            <hr></hr>
            <p className="lead">
              <strong>TechStack - Tools - Methodology:</strong>
              <br />
              {(record.fields.TechStack || []).map((id) => (
                <button key={id} className="btn-small-tech">
                  {techStackNames[id] || id}{" "}
                  {/* Display name or fallback to ID */}
                </button>
              ))}
            </p>

            <hr></hr>
            <p className="lead">
              <strong>Key Features / User Stories:</strong>
              <br></br>
              {record.fields.KeyFeatures.split("\n").map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </p>

            <hr></hr>

            <p className="lead">
              <strong>Try it out:</strong>
              <br></br>
              {record.fields.TryIt}</p>
              
          
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div className="border rounded-3 p-4">
            {/* {record.fields.Image &&
              record.fields.Image.slice(0, 3).map((image, index) => (
                <div key={image.id || index}>
                  <img
                    src={image.url}
                    alt={record.fields.AppTitle || "Placeholder"}
                    style={{ objectFit: "cover", width: "100%" }}
                    className="mb-4"
                  />
                  {index < record.fields.Image.slice(0, 3).length - 1 && <hr />}
                </div>
              ))} */}
            <img
              className="bd-placeholder-img card-img-top"
              src={record.fields.Image1 ? record.fields.Image1[0].url : "#"}
              alt={record.fields.ImgTxt1 || "Placeholder"}
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
            <p>{record.fields.ImgTxt1}</p>
            <hr />
            <img
              className="bd-placeholder-img card-img-top"
              src={record.fields.Image2 ? record.fields.Image2[0].url : "#"}
              alt={record.fields.ImgTxt2 || "Placeholder"}
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
            <p>{record.fields.ImgTxt2}</p>
            <hr />
            <img
              className="bd-placeholder-img card-img-top"
              src={record.fields.Image3 ? record.fields.Image3[0].url : "#"}
              alt={record.fields.ImgTxt3 || "Placeholder"}
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
            <p>{record.fields.ImgTxt3}</p>
            <hr />
            <p className="lead">
              <strong>Related Apps:</strong>
              <br></br>
              {record.fields.RelatedProjects}</p>
      
          </div>
        </div>

        <div className=" p-4 mt-2">
          <div className="row border-bottom mb-3 ">
            <div className="lead col-lg-4 col-md-4 col-sm-12 mb-4">
              {" "}
              <strong>
                What was your role in this project, and what tasks did you face?
              </strong>
            </div>
            <div className="lead col-lg-8 col-md-8 col-sm-12 mb-4">
              {record.fields.Role.split("\n").map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>
          <div className="row border-bottom mb-3">
            <div className="lead col-lg-4 col-md-4 col-sm-12 mb-4">
              <strong>
                What decisions did you take and why? What were the consequences?
              </strong>
            </div>
            <div className="lead col-lg-8 col-md-8 col-sm-12 mb-4">
              {record.fields.DecisionsConsequences.split("\n").map(
                (feature, index) => (
                  <p key={index}>{feature}</p>
                )
              )}
            </div>
          </div>
          <div className="row border-bottom mb-3">
            <div className="lead col-lg-4 col-md-4 col-sm-12 mb-4">
              <strong>If you could, what would you do differently?</strong>
            </div>
            <div className="lead col-lg-8 col-md-8 col-sm-12 mb-4">
              {record.fields.Different.split("\n").map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>
          <div className="row mb-1">
            <div className="lead col-lg-4 col-md-4 col-sm-12 mb-4">
              <strong>
                Retrospective - What lessons did you learn during this project?
              </strong>
            </div>
            <div className="lead col-lg-8 col-md-8 col-sm-12 mb-4">
              {record.fields.Lessons.split("\n").map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

