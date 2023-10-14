import React from "react";
import style from "./style/index.module.css";
import Marquee from "react-fast-marquee";

const index: React.FC = () => {
  return (
    <div className={style.marquee}>
      <Marquee speed={200}>
        <div className={style.marquee__content}>
          <img src="./assets/star.svg" alt="" />
          <h2>
            Open<span className={style.italic}>to</span>
            <span className={style.bold}>work</span>
          </h2>
        </div>
        <div className={style.marquee__content}>
          <img src="./assets/star.svg" alt="" />
          <h2>
            Open<span className={style.italic}>to</span>
            <span className={style.bold}>work</span>
          </h2>
        </div>
      </Marquee>
    </div>
  );
};

export default index;
