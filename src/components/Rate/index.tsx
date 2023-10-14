import React, { useEffect } from "react";
import style from "./style/rate.module.css";
import star from "./assets/star_full.svg";

type StarRatingProps = {
  rate: number;
};

const MAX_RATE = 5;

const Rate: React.FC<StarRatingProps> = ({ rate }) => {
  useEffect(() => {}, [rate]);
  return (
    <div
      className={style.rate__component}
      style={{ maskImage: `url(${star})`, WebkitMaskImage: `url(${star})` }}
    >
      <div
        className={style.rate__bg}
        style={{ width: `${(rate / MAX_RATE) * 100}%` }}
      ></div>
    </div>
  );
};

export default Rate;
