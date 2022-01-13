import React from "react";
import Card from "../components/Card";
import { projects } from "../constants";
import { Route, useRouteMatch } from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="min-h-screen my-5">
      <div className="flex flex-col">
        <h2 className="mr-2 font-extrabold">Projects</h2>

        <div className="flex flex-wrap">
          {projects.map(({ name, preview, link, img, award, tags, id }) => {
            return (
              <Card
                name={name}
                preview={preview}
                link={link}
                baseUrl={url}
                img={img}
                award={award}
                tags={tags}
                id={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
