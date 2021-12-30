import React, { useState, useEffect, useRef } from "react";

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
  }, [imageRef]);

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
    <div class="flex flex-col lg:flex-row flex-wrap m-5">
      {groupbyTwo(images).map((twoImages) => {
        return (
          <div class="flex flex-col lg:flex-row w-full">
            {twoImages.map(({ src, name }, index) => {
              return (
                <div
                  className={`bg-white p-5 pt-3 rounded-lg shadow-md m-3 border-solid border border-gray-200 ${
                    index % 2 && "relative lg:right-14 lg:top-5 shadow-lg"
                  } ${loading.every(Boolean) ? "hidden" : "visible"}`}
                >
                  <p className="font-bold mb-2">{name}</p>
                  <img
                    src={src}
                    onLoad={() => handleImageLoaded(index)}
                    onClick={() => handleImageClicked(index)}
                  ></img>
                  {index === clicked && (
                    <div
                      className="fixed z-50 left-0 top-0 w-full h-full flex items-center p-4 justify-center"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                    >
                      <img
                        ref={imageRef}
                        style={{ maxHeight: "750px" }}
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
