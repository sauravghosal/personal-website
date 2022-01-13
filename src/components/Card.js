import React from "react";
import { FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ img, name, tags, preview, award, baseUrl, id }) => {
  return (
    <Link
      to={`${baseUrl}/${id}`}
      className="flex flex-col sm:flex-row w-full sm:h-60 border-gray-200 border bg-white m-2 no-underline rounded shadow-md transform hover:scale-105 hover:opacity-100 hover:shadow-2xl duration-500 ease-in-out cursor-pointer"
    >
      {award && (
        <div className="text-red-500 ml-auto absolute right-0 mr-3">
          <FaAward className="inline-block" />
          <p className="text-xs inline-block">AWARD WINNER</p>
        </div>
      )}
      <img src={img} className="p-2 w-full sm:w-60" alt="project graphic" />
      <div className="flex-grow">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{preview} </p>
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
    </Link>
  );
};

export default Card;
