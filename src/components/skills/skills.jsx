import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

import axios from "axios"; // You'll need to install axios to make HTTP requests
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
      const apiUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Skills?filterByFormula=AND({Skills}=TRUE())`;

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
        groups[PrimaryGroup].values.push(Status * 100); // Convert decimal percentage to whole number
      }
    });

    const customOrder = [
      "FrontEnd & Mobile App Dev",
      "BackEnd WebDev",
      "WebDev Languages",
      "Styling",
      "APIs & Databases",
      "NoCode & Automation",
    ];

    const sortedGroups = Object.keys(groups)
      .sort((a, b) => customOrder.indexOf(a) - customOrder.indexOf(b))
      .map((key) => groups[key]);

    return sortedGroups;
  };

  // Helper function to get color based on PrimaryGroup (for simplicity, we are defining some static colors)
  const getGroupColor = (groupName) => {
    const colors = {
      FrontEnd: "#997dff", // dark lavender
      BackEnd: "#BE97C6", // mauve
      "WebDev Languages": "#EFBCD5", // rose pink
      Styling: "#85BFB6", // light green
      "APIs & Databases": "#528A8F", // dark green
      "NoCode & AI": "#D7C6F3", // light lavender
    };
    return colors[groupName] || "#6c757d"; // Default color
  };

  // Fetch the data when the component mounts
  React.useEffect(() => {
    fetchAirtableData();
  }, []);

  return (
    <div className="px-4 py-5 my-5 text-center border-top" id="skills">
      <div className="container">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Knowledge &amp; <span className="special-purple">Skills</span>
        </h1>
        <p className="lead mb-4">
          These are the tools, frameworks, libraries, programming & meta
          languages and more that I have been training on and am using in my
          projects. <br></br>Percentages shown are based on my self-assessment
          of my proficiency level.
        </p>
        <div className="row">
          {chartData.map((data, index) => (
            <div className="col-lg-6 col-sm-12 mb-4" key={index}>
              <div className="card d-flex flex-column align-items-center">
                <div className="card-body text-center w-100">
                  <h6
                    className="card-title"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)" }}
                  >
                    {data.title}
                  </h6>
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: data.labels,
                        sx: {
                          "& .MuiAxis-tickLabel": {
                            fontSize: "clamp(0.1rem, 1vw, 0.1rem)", // Adjusts label size responsively
                            transform: "rotate(-45deg)", // Rotate labels 45 degrees
                            textAnchor: "end", // Align labels to end for better readability
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
                    tooltip={{
                      formatter: (params) => {
                        const index = params.dataIndex;
                        const label = data.labels[index];
                        const value = data.values[index];
                        return `${label}: ${value}%\nAdditional Info: Lorem Ipsum`;
                      },
                    }}
                    height={250}
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
