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

  const [relatedProjectNames, setRelatedProjectNames] = useState({});

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

      // Fetch related project names if RelatedProjects field exists
      const relatedProjectIds = response.data.fields.RelatedProjects || [];
      if (relatedProjectIds.length > 0) {
        const relatedProjectsResponse = await axios.get(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/CaseStudies`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
            params: {
              filterByFormula: `OR(${relatedProjectIds
                .map((id) => `RECORD_ID()='${id}'`)
                .join(",")})`,
            },
          }
        );

        // Map each RelatedProject ID to its name
        const relatedNamesMapping = {};
        relatedProjectsResponse.data.records.forEach((record) => {
          relatedNamesMapping[record.id] = record.fields.AppTitle; // Assuming 'AppTitle' is the name field
        });
        setRelatedProjectNames(relatedNamesMapping);
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
        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3">
            <img
              className="bd-placeholder-img card-img-top"
              src={record.fields.Logo ? record.fields.Logo[0].url : "#"}
              alt={record.fields.AppTitle || "Placeholder"}
              style={{
            width: "100px",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            /></div>
             <div className="col-lg-9 col-md-9 col-sm-9">
            <h2 className="display-6 fw-bold py-2">{record.fields.AppTitle}</h2>
           </div>
            </div>
            <p className="lead border-top" style={{ paddingTop: "10px" }}>
            {record.fields.Blurb}
            </p>
            <p className="lead border-top" style={{ paddingTop: "10px" }}>
              <strong>Topic: </strong> {record.fields.Topic}
              <br />
              <strong>Completion: </strong> {record.fields.Completion}
              <br />
              <strong>Client / Employer / Training: </strong>
              {record.fields.ClientLink && record.fields.ClientLink.trim() ? (
                <a
                  className="footer-link"
                  href={record.fields.ClientLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {record.fields.ClientEmployerTraining}
                </a>
              ) : (
                <span>{record.fields.ClientEmployerTraining}</span>
              )}
            </p>
            {record.fields.TryIt && (
              <p className="lead border-top" style={{ paddingTop: "10px" }}>
                <strong>Try it out:</strong>
                <br></br>
                {record.fields.TryIt}
              </p>
            )}
            <p className="lead">
              {record.fields.GithubLink && (
                <a
                  href={record.fields.GithubLink}
                  className="btn btn-black-purple mt-2 me-2"
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
                  className="btn btn-secondary mt-2 me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              )}
            </p>{" "}
            <p className="lead border-top" style={{ paddingTop: "10px" }}>
              {" "}
              <strong>Project Objective:</strong>
              <br></br>
              {record.fields.ProjectObjective.split("\n").map(
                (feature, index) => (
                  <p key={index}>{feature}</p>
                )
              )}
            </p>
            {record.fields.Purpose && (
              <p className="lead border-top" style={{ paddingTop: "10px" }}>
                {" "}
                <strong>Purpose:</strong>
                <br></br>
                {record.fields.Purpose.split("\n").map((feature, index) => (
                  <p key={index}>{feature}</p>
                ))}
              </p>
            )}
            {record.fields.Duration && (
              <p className="lead border-top" style={{ paddingTop: "10px" }}>
                {" "}
                <strong>Duration:</strong>
                <br></br>
                {record.fields.Duration.split("\n").map((feature, index) => (
                  <p key={index}>{feature}</p>
                ))}
              </p>
            )}
            <p className="lead border-top" style={{ paddingTop: "10px" }}>
              {" "}
              <strong>Role:</strong>
              <br></br>
              {record.fields.Role.split("\n").map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </p>
            <p className="lead border-top" style={{ paddingTop: "10px" }}>
              <strong>TechStack - Tools - Methodology:</strong>
              <br />
              {(record.fields.TechStack || []).map((id) => (
                <button
                  key={id}
                  className="btn-small-tech px-2 mt-2"
                  style={{ fontSize: "1rem" }}
                >
                  {techStackNames[id] || id}{" "}
                  {/* Display name or fallback to ID */}
                </button>
              ))}
            </p>
            {(record.fields.Tutor || record.fields.Mentor) && (
  <p className="lead border-top" style={{ paddingTop: "10px" }}>
    <strong>Credits:</strong>
    <br />
    Tutor:&nbsp;{record.fields.Tutor}
    <br />
    Mentor:&nbsp;{record.fields.Mentor}
  </p>
)}

{record.fields.DesignInspiration && record.fields.DesignInspiration.trim() !== "" && (
  <p
  className="lead border-top"
  style={{ paddingTop: "10px" }}
>
  <h3
    className="fw-bold border-bottom"
    style={{ paddingBottom: "5px" }}
  >
    <span className="special-purple">Design</span> & Inspiration
  </h3>
  {record.fields.DesignInspiration.split("\n").map(
                  (feature, index) => (
                    <p key={index}>{feature}</p>
                  )
                )}
              </p>
            )}
         

         {record.fields.RelatedProjects && record.fields.RelatedProjects.length > 0 && (
  <div className="border-top mt-3 pt-3">
    <p className="lead">
    <strong>Related Projects</strong></p>
    <div className="gap-2">
      {record.fields.RelatedProjects.map((projectId) => (
        <Link
          to={`/item/${projectId}`} // Assuming your route structure uses this format
          key={projectId}
          className="btn btn-black-purple me-2 px-3"
          onClick={() => {
            window.scrollTo(0, 0); // Scroll to the top of the page
          }}
        >
          {relatedProjectNames[projectId] || "Loading..."} {/* Show name or fallback */}
        </Link>
      ))}
    </div>
  </div>
)}

      
         
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div
            className=" p-4"
            style={{
              border: "1px solid #f3eefa", // Add border width and style
              borderRadius: "15px",
              borderColor: "#f3eefa", // Optional, included for clarity
              backgroundColor: "#f3eefa", // Optional, included for clarity
            }}
          >
            {" "}
            <h3 className="fw-bold text-center">
              {" "}
              <span className="special-purple">Views</span> & Features
            </h3>
            <img
              className="bd-placeholder-img card-img-top"
              src={record.fields.Image1 ? record.fields.Image1[0].url : "#"}
              alt={record.fields.ImgTxt1 || "Placeholder"}
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <p className="small lh-sm fst-italic">{record.fields.ImgTxt1}</p>
            {record.fields.Image2 && (
              <>
                <img
                  className="bd-placeholder-img card-img-top border-top"
                  src={record.fields.Image2 ? record.fields.Image2[0].url : "#"}
                  alt={record.fields.ImgTxt2 || "Placeholder"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
                <p className="small lh-sm fst-italic">
                  {record.fields.ImgTxt2}
                </p>
              </>
            )}
            {record.fields.Image3 && (
              <>
                <img
                  className="bd-placeholder-img card-img-top border-top"
                  src={record.fields.Image3 ? record.fields.Image3[0].url : "#"}
                  alt={record.fields.ImgTxt3 || "Placeholder"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
                <p className="small lh-sm fst-italic">
                  {record.fields.ImgTxt3}
                </p>
              </>
            )}
            {record.fields.Image4 && (
              <>
                <img
                  className="bd-placeholder-img card-img-top border-top"
                  src={record.fields.Image4 ? record.fields.Image4[0].url : "#"}
                  alt={record.fields.ImgTxt4 || "Placeholder"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={() =>
                    window.open(
                      record.fields.Image4 ? record.fields.Image4[0].url : "#",
                      "_blank"
                    )
                  }
                />
                <p className="small lh-sm fst-italic">
                  {record.fields.ImgTxt4}
                </p>
              </>
            )}


          </div>
        </div>

        <div>
          <div className="row border-top border-bottom" style={{ paddingTop: "10px" }}>
            <h3 className="fw-bold text-center">
              Approach &amp; <span className="special-purple">Steps taken</span>
            </h3>
          </div>

          <div className="row" style={{ paddingTop: "10px" }}>
      
          
          <div className="lead col-lg-6 col-md-6 col-sm-12 mb-4">
  <h3 className="fw-bold">
    <span className="special-black">FrontEnd</span>
  </h3>
  {[
    { field: 'FrontEndContentOrga', label: 'Content & Organisation' },
    { field: 'FrontEndFunctionality', label: 'Functionality' },
    { field: 'FrontEndDesign', label: 'Design' },
    { field: 'FrontEndSecurity', label: 'Security' },
  ].map(({ field, label }) =>
    record.fields[field] ? (
      <p key={field}>
        <strong>{label}:</strong> {record.fields[field]}
      </p>
    ) : null
  )}
</div>

       
<div className="lead col-lg-6 col-md-6 col-sm-12 mb-4">
  <h3 className="fw-bold">
    <span className="special-black">Backend</span>
  </h3>
  {[
    { field: 'BackEndContentOrga', label: 'Content & Organisation' },
    { field: 'BackEndFunctionality', label: 'Functionality' },
    { field: 'BackEndSecurity', label: 'Security' },
    { field: 'BackEndTesting', label: 'Testing' },
  ].map(({ field, label }) =>
    record.fields[field] ? (
      <p key={field}>
        <strong>{label}:</strong> {record.fields[field]}
      </p>
    ) : null
  )}
</div>
           
          </div>
          {record.fields.DecisionsConsequences && (
            <div className="row border-bottom" style={{ paddingTop: "10px" }}>
              <div className="lead col-lg-2 col-md-4 col-sm-12 mb-4">
                <strong>
                  What decisions did you take?<br></br><br></br>What were the
                  consequences?
                </strong>
              </div>
              <div className="lead col-lg-10 col-md-8 col-sm-12 mb-4">
                {record.fields.DecisionsConsequences.split("\n").map(
                  (feature, index) => (
                    <p key={index}>{feature}</p>
                  )
                )}
              </div>
            </div>
          )}

          <div className="row border-bottom" style={{ paddingTop: "10px" }}>
            <h3 className="fw-bold text-center">Retrospective</h3>
          </div>

        
          {record.fields.Challenges && record.fields.Challenges.trim() !== "" && (
  <div className="row border-bottom" style={{ paddingTop: "10px" }}>
    <>
      <div className="lead col-lg-2 col-md-4 col-sm-12 mb-2">
        <strong>Challenges:</strong>
      </div>
      <div className="lead col-lg-10 col-md-8 col-sm-12 mb-2">
        {record.fields.Challenges.split("\n").map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
    </>
  </div>
)}

          <div className="row border-bottom" style={{ paddingTop: "10px" }}>
            {record.fields.Different && (
              <>
                <div className="lead col-lg-2 col-md-4 col-sm-12 mb-2">
                  <strong>If you could, what would you do differently?</strong>
                </div>
                <div className="lead col-lg-10 col-md-8 col-sm-12 mb-2">
                  {record.fields.Different.split("\n").map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}
                </div>
              </>
            )}
          </div> 
       

          {record.fields.Well && record.fields.Well.trim() !== "" && (
  <div className="row border-bottom" style={{ paddingTop: "10px" }}>
    <>
      <div className="lead col-lg-2 col-md-4 col-sm-12 mb-2">
        <strong>Successes:</strong>
      </div>
      <div className="lead col-lg-10 col-md-8 col-sm-12 mb-2">
        {record.fields.Well.split("\n").map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
    </>
  </div>
)}


          {record.fields.Future && (
          <div className="row border-bottom" style={{ paddingTop: "10px" }}>
           
              <>
                <div className="lead col-lg-2 col-md-4 col-sm-12">
                  <strong>Possible Future Features:</strong>
                </div>
                <div className="lead col-lg-10 col-md-8 col-sm-12">
                  {record.fields.Future.split("\n").map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}
                </div>
              </>
          
          </div>  )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
