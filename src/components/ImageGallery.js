import React, { useState, useEffect, useRef } from "react";
import { CgClose } from "react-icons/cg";

const ImageGallery = ({ images }) => {
  const [loading, setLoading] = useState(images.map((_) => true));
  const imageRef = useRef(null);
  const [clicked, setClicked] = useState(images.length);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        setClicked(images.length);
      }
    }

    function handleEscDown(event) {
      if (event.keyCode === 27) {
        setClicked(images.length);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscDown);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscDown);
    };
  }, [imageRef, images.length]);

  const handleImageLoaded = (index) => {
    const newLoading = [...loading];
    newLoading[index] = false;
    setLoading(newLoading);
  };

  const handleImageClicked = (index) => {
    setClicked(index);
  };

  const groupbyTwo = (arr) => {
    return arr.reduce((acc, currVal, currIndex, arr) => {
      if (currIndex % 2 === 0) {
        acc.push(arr.slice(currIndex, currIndex + 2));
      }
      return acc;
    }, []);
  };

  return (
    <div className="flex flex-col lg:flex-row flex-wrap m-5">
      {groupbyTwo(images).map((twoImages, outerIndex) => {
        return (
          <div className="flex flex-col lg:flex-row w-full" key={outerIndex}>
            {twoImages.map(({ src, name }, index) => {
              return (
                <div
                  className={`bg-white dark:bg-slate-700 p-5 pt-3 rounded-lg shadow-md m-3 border-solid border dark:border-slate-300/20 border-gray-200 ${
                    index % 2 && "relative lg:right-14 lg:top-5 shadow-lg"
                  } ${loading.every(Boolean) ? "hidden" : "visible"}`}
                  key={index}
                >
                  <p className="font-bold mb-2 dark:text-white">{name}</p>
                  <img
                    src={src}
                    alt={name}
                    onLoad={() => handleImageLoaded(index)}
                    onClick={() => handleImageClicked(index)}
                  ></img>
                  {index === clicked && (
                    <div
                      className="fixed z-50 left-0 top-0 w-full h-full flex items-center p-4 overflow-auto"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                    >
                      <CgClose className="absolute top-0 right-0 text-white h-5 w-5 mr-2 mt-2 cursor-pointer" />
                      <img
                        ref={imageRef}
                        className="max-w-screen-lg w-full p-5 m-auto"
                        alt={name}
                        src={src}
                        onLoad={() => handleImageLoaded(index)}
                        onClick={() => handleImageClicked(index)}
                      ></img>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
