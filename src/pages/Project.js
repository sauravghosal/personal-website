import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../constants";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    let project = projects.filter((project) => project.id === parseInt(id));
    if (project.length > 0) {
      setProject(project.pop());
    }
  }, [id]);

  return (
    <div>
      {Object.keys(project).length > 0 && (
        <div className="z-10">
          <div>{project.content}</div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Live Website
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
