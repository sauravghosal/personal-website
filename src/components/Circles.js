import React, { useState, useEffect } from "react";

const Circles = ({
  top = ["auto", "auto"],
  bottom = ["auto", "auto"],
  right = ["auto", "auto"],
  left = ["auto", "auto"],
}) => {
  const mediaMatch = window.matchMedia("(min-width: 650px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addEventListener("change", handler);
    return () => mediaMatch.removeEventListener("change", handler);
  }, [mediaMatch]);

  const styles = (small) => {
    return {
      top: small ? top[1] : top[0],
      bottom: small ? bottom[1] : bottom[0],
      right: small ? right[1] : right[0],
      left: small ? left[1] : left[0],
      zIndex: -1,
    };
  };

  return (
    <div className={`absolute`} style={styles(matches)}>
      <div className="relative w-80 h-80 filter blur-sm">
        <div className="absolute top-0 -left-4 w-60 h-60 bg-blue-400 rounded-full opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute top-0 -right-4  w-60 h-60  bg-orange-500 rounded-full  opacity-10 animate-blob"></div>
        <div className="absolute top-10 right-10 w-60 h-60  bg-green-500 rounded-full opacity-10 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Circles;
