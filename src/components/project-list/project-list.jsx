import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './project-list.scss';
import '../../index.scss';
import { Link } from "react-router-dom";


const ProjectList = () => {
  const [records, setRecords] = useState([]);
  const [techStackNames, setTechStackNames] = useState({});
  const colors = ["#f3eefa"]; // add more colors as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch records from CF-Training table
        const response = await axios.get(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/CF-Training`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
            params: {
              sort: [{ field: "App#", direction: "asc" }]
            },
          }
        );
        setRecords(response.data.records);

        // Extract all unique TechStack IDs to fetch their names
        const techStackIds = [...new Set(response.data.records.flatMap(record => record.fields.TechStack || []))];

        // Fetch Tech Stack names from Skills table
        const techStackResponse = await axios.get(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Skills`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
            params: {
              filterByFormula: `OR(${techStackIds.map(id => `RECORD_ID()='${id}'`).join(",")})`,
            },
          }
        );

        // Create a mapping of ID to Name for the TechStack items
        const techStackNameMapping = {};
        techStackResponse.data.records.forEach(record => {
          techStackNameMapping[record.id] = record.fields.TechStack; // Assuming the field containing the name is called 'Name'
        });
        setTechStackNames(techStackNameMapping);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='px-4 py-2 my-5' id="projects">
      <div className="container">
         <h1 className="display-5 fw-bold text-body-emphasis text-center"><span className="special-purple">Projects</span> so far</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
          {records.map((record, index) => (
            <div className="col" key={record.id}>
              <div className="card h-100" style={{ backgroundColor: colors[index % colors.length] }}>
                <img
                  className="bd-placeholder-img card-img-top"
                  src={record.fields.Image ? record.fields.Image[0].url : "#"}
                  alt={record.fields.AppTitle || "Placeholder"}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{record.fields.AppTitle}</h5>
                  <p className="card-text">{record.fields.Blurb}</p>
                  <p>
  TechStack - Tools - Methodology:<br></br>{" "}
  {(record.fields.TechStack || []).map(id => (
    <button key={id} className="btn-small-tech">
      {techStackNames[id] || id}
    </button>
  ))}
</p>
                  <Link to={`/item/${record.id}`} className="btn btn-primary mt-2">
                    View Details
                  </Link>
                  <Link to={record.fields.GithubLink} className="btn btn-primary mt-2" target="_blank">
                    Github
                  </Link>
                  <Link to={record.fields.LiveApp} className="btn btn-primary mt-2" target="_blank">
                   Live App
                  </Link>
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
