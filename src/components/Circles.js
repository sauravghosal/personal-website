import React from "react";

const Circles = ({
  top = ["auto", "auto"],
  bottom = ["auto", "auto"],
  right = ["auto", "auto"],
  left = ["auto", "auto"],
}) => (
  <div
    className={`absolute top-${top[0]} bottom-${bottom[0]} right-${right[0]} left-${left[0]} md:top-${top[1]} md:top-${top[1]} md:bottom-${bottom[1]} md:right-${right[1]} md:left-${left[1]} z-0`}
  >
    <div className="relative z-0 w-80 h-80">
      <div className="absolute top-0 -left-4 w-60 h-60 bg-blue-400 rounded-full opacity-10"></div>
      <div className="absolute top-0 -right-4  w-60 h-60  bg-orange-500 rounded-full  opacity-10"></div>
      <div className="absolute top-10 right-10 w-60 h-60  bg-green-500 rounded-full opacity-10"></div>
    </div>
  </div>
);

export default Circles;
