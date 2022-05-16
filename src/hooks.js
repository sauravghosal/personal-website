import { useEffect, useState } from "react";

export function useCarousel(length, interval) {
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setCurrSlide((currSlide + 1) % length),
      interval
    );

    return () => {
      clearTimeout(timer);
    };
  }, [currSlide]);

  return [currSlide, setCurrSlide];
}
