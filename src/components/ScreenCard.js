import React from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import Tag from "./Tag";

const ScreenCard = ({ name, screens, preview, id }) => {
  return (
    <div
      className={`shadow-lg rounded-lg border dark:border-slate-300/20 p-5 dark:bg-slate-800 relative`}
    >
      <div className="hidden lg:block">
        <FaRegCircle
          className={`absolute -left-20 top-1/2 w-10 h-10 z-20 text-blue-400 dark:text-blue-200`}
        />
        <FaCircle
          className={`absolute -left-20 top-1/2 w-10 h-10 z-10 transition-colors text-white`}
        />
      </div>
      <h2 className="font-bold mb-4 dark:text-white">{name}</h2>
      <div className="space-y-3 font-light">
        <p> who: {preview?.who}</p>
        <p> what: {preview?.what}</p>
        <p>
          when: {preview?.when?.startDate.toLocaleString().split(",")[0]} -{" "}
          {preview?.when?.endDate.toLocaleString().split(",")[0]}
        </p>
        <p>
          {" "}
          where:{" "}
          <a
            href={preview?.where}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 cursor-pointer hover:underline overflow-clip"
          >
            link
          </a>
        </p>
      </div>
      {screens}
      <div>
        {preview?.how.map((tag, index) => (
          <Tag tag={tag} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ScreenCard;
