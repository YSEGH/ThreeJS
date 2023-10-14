import React from "react";
import style from "../style/Place.module.css";

const Place: React.FC = () => {
  return (
    <div className={style.place}>
      <div className={style.address}>
        <h2>
          Saint <br />
          Genis <br />
          Pouilly <br />
          01630, <br />
          <span className={style.bold}>France</span>
        </h2>
      </div>
      <div className={style.map}>Map</div>
    </div>
  );
};

export default Place;
