import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sample/sample.scss";

const Sample = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/CF-Training`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
          }
        );
        setRecords(response.data.records);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-4 px-3">Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {records.map((record) => (
          <div className="col" key={record.id}>
            <div className="card h-100">
              <img
                className="bd-placeholder-img card-img-top"
                src={record.fields.Image ? record.fields.Image[0].url : "#"}
                alt={record.fields.AppTitle || "Placeholder"}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{record.fields.AppTitle}</h5>
                <p className="card-text">{record.fields.Blurb}</p>
                <Link to={`/item/${record.id}`} className="btn btn-primary mt-2">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sample;
