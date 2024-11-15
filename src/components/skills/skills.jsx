import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

import axios from "axios";  // You'll need to install axios to make HTTP requests
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../index.scss";

export default function ChartsOverviewDemo() {
  // State to store chart data
  const [chartData, setChartData] = React.useState([]);

  // Function to fetch data from Airtable
  const fetchAirtableData = async () => {
    try {
      // Airtable API URL with filter and fields parameters
      const apiUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Skills?filterByFormula=AND({ToolCloud}=TRUE())`;

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      });

      // Process the data into chart-friendly format
      const processedData = processAirtableData(response.data.records);
      setChartData(processedData);
    } catch (error) {
      console.error("Error fetching data from Airtable", error);
    }
  };

  const processAirtableData = (records) => {
    // Group the records by PrimaryGroup and map to chart data
    const groups = {};
  
    records.forEach((record) => {
      const { PrimaryGroup, Status } = record.fields;
      if (PrimaryGroup && Status) {
        if (!groups[PrimaryGroup]) {
          groups[PrimaryGroup] = {
            title: PrimaryGroup,
            labels: [],
            values: [],
            color: getGroupColor(PrimaryGroup),
          };
        }
        groups[PrimaryGroup].labels.push(record.fields.TechStack || "Unknown");
        groups[PrimaryGroup].values.push(Status * 100);  // Convert decimal percentage to whole number
      }
    });
  
    const customOrder = [
      "WebDev Languages", "FrontEnd WebDev", "Styling", "Mobile App Dev", "NoCode & Automation", "APIs"
    ];
    
    const sortedGroups = Object.keys(groups)
      .sort((a, b) => customOrder.indexOf(a) - customOrder.indexOf(b))
      .map((key) => groups[key]);
    
  
    return sortedGroups;
  };
  

  // Helper function to get color based on PrimaryGroup (for simplicity, we are defining some static colors)
  const getGroupColor = (groupName) => {
    const colors = {
      "FrontEnd WebDev": "#528A8F",
      "BackEnd WebDev": "#BE97C6",
      "WebDev Languages": "#85BFB6",
      "Styling": "#EFBCD5",
      "Mobile App Dev": "#D7C6F3",
      "APIs": "#997dff",
      "NoCode & Automation": "#D7C6F3",
    };
    return colors[groupName] || "#6c757d";  // Default color
  };

  // Fetch the data when the component mounts
  React.useEffect(() => {
    fetchAirtableData();
  }, []);

  return (
    <div className="px-4 py-5 my-5 text-center border-top" id="skills">
      <div className="container">
        <h1 className="display-5 fw-bold text-body-emphasis">
          <span className="special-black">Knowledge </span>&amp; Skills
        </h1>
        <p className="lead mb-4">
          These are the tools, frameworks, libraries, programming & meta
          languages and more that I have been training on...
        </p>
        <div className="row">
          {chartData.map((data, index) => (
            <div className="col-lg-6 col-sm-12 mb-4" key={index}>
              <div className="card d-flex flex-column align-items-center">
                <div className="card-body text-center w-100">
                  <h6 className="card-title" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)' }}>
                    {data.title}
                  </h6>
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: data.labels,
                        sx: {
                          "& .MuiAxis-label": {
                            fontSize: "clamp(0.1rem, 1vw, 0.3rem)", // Adjusts label size responsively
                          },
                        },
                      },
                    ]}
                    series={[
                      {
                        data: data.values,
                        color: data.color,
                      },
                    ]}
                    yAxis={[
                      {
                        valueFormatter: (value) => `${value.toLocaleString()}%`,
                        max: 100,
                        increment: 20,
                      },
                    ]}
                    // width={350}
                    height={250}
                      barLabel="value"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// {
//   title: "Meta & Programming Languages",
//   labels: ["HTML", "Javascript", "Vanilla JS", "TypeScript"],
//   values: [90, 70, 70, 50],
//   color: "#997dff",
// },
// {
//   title: "Frontend Technologies",
//   labels: ["React", "Angular", "HTML5"],
//   values: [60, 50, 70],
//   color: "#EFBCD5",
// },
// {
//   title: "Backend Technologies",
//   labels: ["Node", "MongoDB", "Express", "AWS", "RestAPI", "Firebase"],
//   values: [65, 70, 50, 30, 65, 40],
//   color: "#85BFB6",
// },
// {
//   title: "Styling",
//   labels: ["CSS", "SCSS#", "Sass", "Bootstrap"],
//   values: [70, 60, 80],
//   color: "#528A8F",
// },
// {
//   title: "UI Design",
//   labels: ["Figma", "Illustrator", "Photoshop"],
//   values: [75, 85, 90],
//   color: "#BE97C6",
// },
// {
//   title: "NoCode Tools",
//   labels: ["Softr", "Airtable", "Made"],
//   values: [80, 80, 40],
//   color: "#D7C6F3",
// },