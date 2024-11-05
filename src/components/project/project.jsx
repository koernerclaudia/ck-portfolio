import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/CF-Training/${id}`,
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
                filterByFormula: `OR(${techStackIds.map(id => `RECORD_ID()='${id}'`).join(",")})`,
              },
            }
          );

          // Map each TechStack ID to its name
          const techStackNameMapping = {};
          techStackResponse.data.records.forEach(record => {
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
            <p className="lead">{record.fields.Blurb}
              <hr></hr>
              <strong>Topic: </strong> {record.fields.Topic}
            <br />
            <strong>Completion: </strong> {record.fields.Completion}
              <br />
              <strong>Client / Employer / Training: </strong> {record.fields.ClientEmployerTraining}
             



            </p><hr></hr>
           
            <p className="mt-3">
              
              <Link to={record.GithubLink} className="btn btn-primary mt-2"> <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;
                Github
              </Link>
              <Link to={record.LiveApp} className="btn btn-primary mt-2">
               Live App
              </Link>
        </p>
       
            <p className="lead">
              <strong>TechStack - Tools - Methodology:</strong>
              <br />
              {(record.fields.TechStack || []).map(id => (
                <button key={id} className="btn-small-tech">
                  {techStackNames[id] || id}  {/* Display name or fallback to ID */}
                </button>
              ))}
            </p>
           
           
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="border rounded-3 p-4">
  {record.fields.Image && record.fields.Image.slice(0, 3).map((image, index) => (
    <div key={image.id || index}>
      <img
        src={image.url}
        alt={record.fields.AppTitle || "Placeholder"}
        style={{ objectFit: "cover", width: "100%" }}
        className="mb-4"
      />
      {index < record.fields.Image.slice(0, 3).length - 1 && <hr />}
    </div>
  ))}
</div>

        </div>

    <div className=" p-4 mt-2">
<div className="row border-bottom mb-3 ">
<div className="lead col-lg-4 col-md-4 col-sm-12 mb-4"> <strong>What was your role in this project, and what tasks did you face?</strong></div>
<div className="lead col-lg-8 col-md-8 col-sm-12 mb-4">{record.fields.Role}</div>
</div>
<div className="row border-bottom mb-3">
<div className="lead col-lg-4 col-md-4 col-sm-12 mb-4"><strong>What decisions did you take and why? What were the consequences?</strong></div>
<div className="lead col-lg-8 col-md-8 col-sm-12 mb-4">{record.fields.DecisionsConsequences}</div>
</div>
<div className="row border-bottom mb-3">
<div className="lead col-lg-4 col-md-4 col-sm-12 mb-4"><strong>If you could, what would you do differently?</strong></div>
<div className="lead col-lg-8 col-md-8 col-sm-12 mb-4">{record.fields.Different}</div>
</div>
<div className="row mb-1">
<div className="lead col-lg-4 col-md-4 col-sm-12 mb-4"><strong>What lessons did you learn during this project?</strong></div>
<div className="lead col-lg-8 col-md-8 col-sm-12 mb-4">{record.fields.Lessons}</div>
</div>
</div>


      </div>
    </div>
  );
};

export default ItemDetail;









// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Card, Col, Row, Button } from "react-bootstrap";
// import { ListGroup } from "react-bootstrap";
// // import "../../index.scss";

// const ItemDetail = () => {
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);
//   const [techStackNames, setTechStackNames] = useState([]);

//   useEffect(() => {
//     const fetchRecord = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/CF-Training`,
//           {
//             headers: {
//               Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
//             },
//           }
//         );
//         setRecord(response.data);
     
//         // Fetch TechStack names if they exist
//         if (response.data.fields.TechStack) {
//           const techStackIds = response.data.fields.TechStack;
//           const techStackNamesPromises = techStackIds.map(async (techId) => {
//             const techResponse = await axios.get(
//               `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/TechStack/${techId}`,
//               {
//                 headers: {
//                   Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
//                 },
//               }
//             );
//             return techResponse.data.fields.Name; // Assuming "Name" is the field containing the tech stack name
//           });
//           const techNames = await Promise.all(techStackNamesPromises);
//           setTechStackNames(techNames);
//         }
//       } catch (error) {
//         console.error("Error fetching record:", error);
//       }
//     };

//     fetchRecord();
//   }, [id]);

//   if (!record) {
//     return <div className="container py-5">Loading...</div>;
//   }

//   return (
  
// <div className="container py-5">
//   <div className="row">
//     <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
//     <div className="card p-4">
//       <img
//         src={record.fields.Image ? record.fields.Image[0].url : "#"}
//         alt={record.fields.AppTitle || "Placeholder"}
//         style={{ objectFit: "cover", width: "100%" }} // Ensure image covers full width
//         className="mb-4"
//       /></div>
//     </div>
//     <div className="col-lg-6 col-md-6 col-sm-12 mb-4 align-items-start">
     
//       <div className="card p-4">
//       <h2 className="display-6 fw-bold">{record.fields.AppTitle}</h2>
//         <p className="lead">{record.fields.Blurb}</p>
//         <p>
//               <strong>Tech Stack:</strong> {techStackNames.join(", ")}
//             </p>
//         <a
//           href={record.fields.LiveApp}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn btn-primary mt-2"
//         >
//           View Live App
//         </a>
//         <p className="mt-3">
//           <strong>Github:</strong> 
//           <a href={record.fields.GithubLink} target="_blank" rel="noopener noreferrer">
//             {record.fields.GithubLink}
//           </a>
//         </p>
//       </div>
//     </div>
  
//   <div className="card p-3 me-3">
//   <div className="row border-bottom mb-3">
//   <div className="col-lg-4 col-md-4 col-sm-12 mb-4">{record.fields.Blurb}</div>
//   <div className="col-lg-8 col-md-8 col-sm-12 mb-4">{record.fields.Blurb}</div>
//   </div>
//   <div className="row border-bottom mb-3">
//   <div className="col-lg-4 col-md-4 col-sm-12 mb-4">{record.fields.Blurb}</div>
//   <div className="col-lg-8 col-md-8 col-sm-12 mb-4">{record.fields.Blurb}</div>
//   </div>
// </div>
//   </div>
 
// </div>

//   );
// };

// export default ItemDetail;
