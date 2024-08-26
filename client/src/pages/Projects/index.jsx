import React from "react";
import datenight from "../../assets/datenight.jpg";
import socialpulse from "../../assets/socialpulse.jpg";
import travelBuddy from "../../assets/travelbuddy.png";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./project.css";

const Projects = () => {
  const projects = [
    {
      title: "Date Night",
      image: datenight,
      deployed: "https://tannerhicks02.github.io/date-night-website-proj-1/",
      github: "https://github.com/TannerHicks02/date-night-website-proj-1",
    },
    {
      title: "Social Pulse",
      image: socialpulse,
      deployed: "https://social-pulse-x72y.onrender.com/",
      github: "https://github.com/JohnnyBaldyga/social-pulse",
    },
    {
      title: "Travel Buddy",
      image: travelBuddy,
      deployed: "https://travel-buddy-e7hd.onrender.com/",
      github: "https://github.com/crestonesoftware/travel-buddy",
    },

    // Add more projects here
  ];

  return (
    <section>
      <h3>Projects</h3>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h4>{project.title}</h4>
            <img src={project.image} alt={project.title} />
            <div className="project-links">
              <Link
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deployed Application"
              >
                <LaunchIcon />
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <GitHubIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
