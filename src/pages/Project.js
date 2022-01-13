import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiArrowBack, BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
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
      <Link
        className="text-gray-400 flex items-center my-3 hover:cursor hover:text-gray-500"
        to="/projects"
      >
        <BiArrowBack className="mr-1" />
        Back to Projects
      </Link>
      {Object.keys(project).length > 0 && (
        <div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <h2 className="font-bold flex items-center hover:text-gray-800 my-2">
              {project.name} <BiLinkExternal className="mx-2" />
            </h2>
          </a>
          <div className="tags">
            {project.tags.map((tag) => {
              return (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{tag}
                </span>
              );
            })}
          </div>
          <div className="content">{project.content}</div>
          <div className="screens">{project.screens}</div>
        </div>
      )}
    </div>
  );
};

export default Project;
