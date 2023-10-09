import React, { useEffect } from "react";
import style from "../style/star.module.css";
import star from "../assets/star_full.svg";

type Props = {
  rate: number;
  customStyle: any;
};

const Star: React.FC<Props> = ({ rate, customStyle }) => {
  const starStyle = {
    width: `${rate}%`, // Utilisez rate pour définir la largeur de l'étoile
  };
  useEffect(() => {
    return () => {};
  }, [rate]);

  return (
    <div
      className={style.star__container}
      style={{
        maskImage: `url(${star})`,
        WebkitMaskImage: `url(${star})`,
      }}
    >
      <div
        className={style.star__bg}
        style={{ ...starStyle, ...customStyle }}
      ></div>
      <svg
        className={style.star}
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
          fill="#FFE247"
        />
      </svg>
    </div>
  );
};

export default Star;
