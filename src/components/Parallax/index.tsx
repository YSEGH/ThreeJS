import React from "react";
import style from "./style/index.module.css";
import { useParallax } from "react-scroll-parallax";

const index: React.FC = () => {
  const parallax: any = useParallax({
    speed: -10,
  });
  return (
    <div className={style.parallax}>
      <div className={style.parallax__inner} ref={parallax.ref}>
        <img src="/assets/me-photo.jpg" alt="" />
      </div>
    </div>
  );
};

export default index;
