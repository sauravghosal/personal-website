import React from "react";
import Card from "../components/Card";
import { projects } from "../constants";
import { Route, useRouteMatch, Link } from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="min-h-screen my-5" style={{ zIndex: 5 }}>
      <div className="flex flex-col">
        <h2 className="mr-2 font-extrabold">Projects</h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
          {projects.map(({ name, preview, link, img, award, tags, id }) => {
            return (
              <Link to={`${url}/${id}`}>
                <Card
                  name={name}
                  preview={preview}
                  link={link}
                  img={img}
                  award={award}
                  tags={tags}
                  id={id}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
