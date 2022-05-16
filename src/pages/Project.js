import React from "react";
import { projects } from "../constants";
import ScreenCard from "../components/ScreenCard";

const Project = () => {
  return (
    <section className="relative min-h-screen mx-5 pt-20" id="projects">
      <h1 className="dark:text-white">My Projects</h1>
      <div className="space-y-10">
        <div
          className="absolute bg-blue-300 dark:bg-blue-100 -left-20 w-10 rounded-md hidden lg:block"
          style={{ height: "calc(100% - 150px)" }}
        />
        {projects.map(
          ({ name, link, preview, img, award, tags, id, screens }) => {
            return (
              <ScreenCard
                key={id}
                name={name}
                link={link}
                preview={preview}
                baseUrl={"projects"}
                img={img}
                screens={screens}
                award={award}
                tags={tags}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default Project;
