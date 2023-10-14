import React from "react";
import style from "../style/Miotto.module.css";
import cx from "classnames";

const Miotto: React.FC = () => {
  return (
    <div className={style.miotto}>
      <div className={style.miotto__inner}>
        <h2>
          Lorem ipsum
          <span className={cx(style.bold, style.italic)}> dolor </span>
          <span className={cx(style.bold)}>sit amet </span>
          consectetur adipisicing <span className={style.italic}>elit</span>.
        </h2>
      </div>
    </div>
  );
};

export default Miotto;
