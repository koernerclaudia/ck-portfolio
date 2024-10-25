import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../index.scss"; // If you have custom styles

// Define the tools data as a constant
const toolsData = [
  { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", type: "primary" },
  { name: "Python", link: "https://www.python.org/", type: "secondary" },
  { name: "React", link: "https://reactjs.org/", type: "success" },
  { name: "Node.js", link: "https://nodejs.org/", type: "danger" },
  { name: "Angular", link: "https://angular.io/", type: "warning" },
  { name: "Vue", link: "https://vuejs.org/", type: "info" },
  { name: "Ruby", link: "https://www.ruby-lang.org/en/", type: "secondary" },
  { name: "Django", link: "https://www.djangoproject.com/", type: "success" },
  { name: "Flask", link: "https://flask.palletsprojects.com/", type: "primary" },
  { name: "PHP", link: "https://www.php.net/", type: "danger" },
  { name: "Java", link: "https://www.java.com/", type: "warning" },
  { name: "C#", link: "https://dotnet.microsoft.com/en-us/languages/csharp", type: "info" },
  { name: "Go", link: "https://golang.org/", type: "success" },
  { name: "Swift", link: "https://swift.org/", type: "primary" },
  { name: "TypeScript", link: "https://www.typescriptlang.org/", type: "secondary" },
  { name: "Kotlin", link: "https://kotlinlang.org/", type: "danger" },
  { name: "Rust", link: "https://www.rust-lang.org/", type: "warning" },
  { name: "Scala", link: "https://www.scala-lang.org/", type: "info" },
  { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", type: "primary" },
  { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", type: "secondary" },
  // Add more button objects as needed
];

export const Tools = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center border-top">
        <h1 className="display-5 fw-bold text-body-emphasis">Tools & <span className="special-black">Technologies</span></h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">These are the tools, frameworks, libraries, programming & meta languages and more that I have been training on...</p>
          <div className="d-grid d-sm-flex justify-content-sm-center flex-wrap">
            {toolsData.map((tool, index) => (
              <a key={index} href={tool.link} target="_blank" rel="noopener noreferrer">
                <button type="button" className={`btn btn-${tool.type} btn-md px-4 gap-1 m-1`}>
                  {tool.name}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

