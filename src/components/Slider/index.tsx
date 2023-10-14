import React, { useEffect, useRef } from "react";
import Slide from "./components/Slide";
import style from "./style/index.module.css";

const slides = ["About", "What I Do", "Experience", "History", "Contact"];

const Slider: React.FC = () => {
  const smoothDelta = 5;
  const minimum = useRef(-100);
  const minimumSmoothDelta = useRef(-110);
  const maximum = useRef(100);
  const maximumSmoothDelta = useRef(110);
  const slider = useRef<HTMLImageElement>(null);
  const mouseDownAt = useRef<number | null>(null);
  const prevPercentage = useRef(50);
  const percentage = useRef(0);
  const windowWidth = window.innerWidth;

  const handleOnDown = (e: MouseEvent) => {
    mouseDownAt.current = e.clientX;
  };

  const handleOnUp = () => {
    mouseDownAt.current = null;
    if (slider.current) {
      if (percentage.current < minimum.current) {
        slider.current.animate(
          {
            transform: `translateX(${minimum.current}%)`,
          },
          { duration: 400, fill: "forwards" }
        );
        prevPercentage.current = minimum.current;
      } else if (percentage.current > maximum.current) {
        slider.current.animate(
          {
            transform: `translateX(${maximum.current}%)`,
          },
          { duration: 400, fill: "forwards" }
        );
        prevPercentage.current = maximum.current;
      } else {
        prevPercentage.current = percentage.current;
      }
    }
  };

  const handleOnMove = (e: MouseEvent) => {
    if (mouseDownAt.current === null) return;

    const mouseDelta = mouseDownAt.current - e.clientX;
    const maxDelta = window.innerWidth;
    const currentPercentage = (mouseDelta / maxDelta) * -100;
    let currentPercentageHandler = Math.round(currentPercentage);
    let nextPercentageHandler = Math.max(
      minimumSmoothDelta.current,
      Math.min(
        Math.round(prevPercentage.current + currentPercentageHandler),
        maximumSmoothDelta.current
      )
    );

    percentage.current = nextPercentageHandler;

    if (slider.current) {
      slider.current.animate(
        {
          transform: `translateX(${nextPercentageHandler}%)`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
    };
  }, []);

  useEffect(() => {
    if (slider.current) {
      minimum.current =
        -100 + (windowWidth / 2 / slider.current?.scrollWidth) * 100;
      minimumSmoothDelta.current = minimum.current - smoothDelta;
      maximum.current = (100 / slider.current?.scrollWidth) * 100;
      maximumSmoothDelta.current = maximum.current + smoothDelta;
      prevPercentage.current = maximum.current;
    }
    return () => {};
  }, []);

  return (
    <div className={style.slider}>
      <div
        id="slider__container"
        ref={slider}
        className={style.slide__container}
      >
        {slides.map((slide, i) => (
          <Slide key={i} slide={slide} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
