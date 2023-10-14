import React from "react";
import style from "./style/index.module.css";

const index = () => {
  return (
    <div className={style.about}>
      <div className={style["about__inner"]}>
        <h2>Full Stack Web Developer</h2>
        <p>
          Pellentesque auctor neque nec urna. Nam pretium turpis et arcu.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Fusce id purus. Aenean commodo ligula eget
          dolor. Nulla consequat massa quis enim.
        </p>
        <div className={style.profil}>
          <img src="/assets/p1.jpg" alt="" />
          <div className={style.profil__content}>
            <h6>Youssef SEGHROUCHNI</h6>
            <p>The guy who codes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
