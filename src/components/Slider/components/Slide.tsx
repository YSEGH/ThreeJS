import React, { useContext, useRef } from "react";
import style from "../style/index.module.css";
import cx from "classnames";

type Props = {
  slide: string;
};

const Slide: React.FC<Props> = ({ slide }) => {
  const elem = useRef<HTMLDivElement>(null);

  return (
    <div ref={elem} className={cx(style.slide, "slide")}>
      {slide.split("").map((letter, i) => (
        <span key={i} className={style.letter}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Slide;
