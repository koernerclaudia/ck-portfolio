import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "../../index.scss";

export default function ChartsOverviewDemo() {
  // Define your chart data in a JSON format
  const chartData = [
    {
      title: "Meta & Programming Languages",
      labels: ['HTML','Javascript', 'Vanilla JS', 'TypeScript'],
      values: [90, 70, 70, 50],
      color: '#997dff'
    },
    {
      title: "Frontend Technologies",
      labels: ['React', 'Angular', 'HTML5'],
      values: [60, 50, 70],
      color: '#EFBCD5'
    },
    {
      title: "Backend Technologies",
      labels: ['Node.js', 'MongoDB', 'Express', 'AWS', 'RestAPI', 'Firebase'],
      values: [65, 70, 50, 30, 65, 40],
      color: '#85BFB6'
    },
    {
      title: "Styling",
      labels: ['CSS', 'SCSS#', 'Sass', 'Bootstrap'],
      values: [70, 60, 80],
      color: '#528A8F'
    },
    {
      title: "UI Design",
      labels: ['Figma', 'Illustrator', 'Photoshop'],
      values: [75, 85, 90],
      color: '#BE97C6'
    },
    {
      title: "NoCode Tools",
      labels: ['Softr', 'Airtable', 'Made'],
      values: [80, 80, 40],
      color: '#D7C6F3'
    },
  ];

  return (
    <div className='px-4 py-5 my-5 text-center border-top' id="skills">
    <div className="container">
       <h1 className="display-5 fw-bold text-body-emphasis"><span className="special-black">Knowledge </span>&amp; Skills</h1>
       <p className="lead mb-4">These are the tools, frameworks, libraries, programming & meta languages and more that I have been training on...</p>
      <div className="row">
        {chartData.map((data, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <BarChart
                  xAxis={[{ scaleType: 'band', data: data.labels }]}
                  series={[
                    { data: data.values, color: data.color }
                  ]}
                  yAxis={[
                    {
                      valueFormatter: (value) => `${(value).toLocaleString()}%`,
                      // label: 'Skills Level',
                      max: 100,
                      increment: 20,
                    },
                  ]}
                  width={350} // You can adjust the width if needed
                  height={250} // You can adjust the height if needed
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
