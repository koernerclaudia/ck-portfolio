import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "../../index.scss";

const ItemDetail = () => {
  const { id } = useParams();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/CF-Training/${id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
          }
        );
        setRecord(response.data);
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
    <div className="container py-5">
      <Link to="/" className="btn btn-secondary mb-3">Back to Projects</Link>
      <h2 className="display-6 fw-bold">{record.fields.AppTitle}</h2>
      <img
        src={record.fields.Image ? record.fields.Image[0].url : "#"}
        alt={record.fields.AppTitle || "Placeholder"}
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
        className="mb-4"
      />
      <div className="card p-4">
        <p className="lead">{record.fields.Blurb}</p>
        <p><strong>Tech Stack:</strong> {record.fields.TechStack?.join(", ")}</p>
        <p><strong>Tools Involved:</strong> {record.fields.ToolsInvolved?.join(", ")}</p>
        <a
          href={record.fields.LiveApp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-2"
        >
          View Live App
        </a>
        <p className="mt-3">
          <strong>Github:</strong> 
          <a href={record.fields.GithubLink} target="_blank" rel="noopener noreferrer">
            {record.fields.GithubLink}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
