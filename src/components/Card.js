import React from "react";
import { FaAward } from "react-icons/fa";

const Card = ({ img, name, link, tags, content, award }) => {
  return (
    <a
      className="no-underline flex flex-col md:flex-row rounded shadow-md transform hover:-translate-y-1 hover:scale-105 opacity-100 hover:bg-gray-100 hover:shadow-2xl duration-500 ease-in-out cursor-pointer"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {award && (
        <div className="text-red-500 ml-auto md:absolute right-0 mr-3">
          <FaAward className="inline-block" />
          <p className="text-xs inline-block">HACKATHON WINNER</p>
        </div>
      )}
      <img
        src={img}
        className="p-2 w-full md:w-60 lg:w-52 xl:w-60 object-contain"
        alt="project graphic"
      />
      <div className="flex-grow">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{content} </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => {
            return (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{tag}
              </span>
            );
          })}
        </div>
      </div>
    </a>
  );
};

export default Card;
