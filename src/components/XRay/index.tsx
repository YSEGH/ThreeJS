import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style/index.css";
import throttle from "lodash.throttle";
import bg_1 from "./assets/xray_bg--primary.svg";

type Props = {};

const Index: React.FC<Props> = () => {
  const hero = useRef(null);

  const onMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(hero.current, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.3,
      ease: "sine.out",
    });
  };

  /* Timeline */
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });
    tl.to(".translate_to_top", {
      y: 0,
      duration: 0.3,
      ease: "sine.out",
      stagger: 0.3,
    })
      .to(hero.current, {
        "--maskSize1": "20%",
        duration: 0.5,
        delay: 0.3,
        ease: "back.out(2)",
      })
      .to(hero.current, {
        "--maskSize2": "28%",
        "--maskSize3": "calc(28% + 0.1rem)",
        duration: 0.5,
        delay: 0.1,
        ease: "back.out(2)",
      })
      .then(() => {
        window.addEventListener("mousemove", throttle(onMouseMove, 30));
      });

    return () => {};
  }, []);

  return (
    <div className="wrapper">
      <div
        className="hero hero--primary"
        style={{
          backgroundImage: `url(${bg_1})`,
        }}
      >
        <div className="container__text">
          <h1 className="hero__heading">
            <span className="translate_to_top">I create</span>
          </h1>
          <h1 className="hero__heading">
            <span className="translate_to_top">websites</span>
          </h1>
        </div>
      </div>

      <div ref={hero} className="hero hero--secondary" aria-hidden="true">
        <div className="container__text">
          <h1 className="hero__heading">
            <span>And i</span>
          </h1>
          <h1 className="hero__heading">
            <span>
              love <span className="text--blue">it</span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
