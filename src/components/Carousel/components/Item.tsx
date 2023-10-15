import React, { useRef } from "react";
import { ItemType } from "..";
import style from "../style/item.module.css";
import { gsap } from "gsap";
import SplitType from "split-type";

type Props = {
  item: ItemType;
};

const animateTextIn = (element: HTMLElement | null) => {
  if (!element) {
    return;
  }
  const ourText = new SplitType(element, { types: "chars" });
  const chars = ourText.chars;

  gsap.fromTo(
    chars,
    {
      y: 0,
      opacity: 0,
    },
    {
      y: -100,
      opacity: 1,
      delay: 0.25,
      stagger: 0.02,
      duration: 0.15,
      ease: "power4.out",
    }
  );
};

const animateTextOut = (element: HTMLElement | null) => {
  if (!element) {
    return;
  }
  const ourText = new SplitType(element, { types: "chars" });
  const chars = ourText.chars;

  gsap.fromTo(
    chars,
    {
      y: -100,
      opacity: 1,
    },
    {
      y: 0,
      opacity: 0,
      stagger: 0.05,
      duration: 0,
      ease: "power4.in",
    }
  );
};

const Item: React.FC<Props> = ({ item }) => {
  const refText = useRef(null);

  return (
    <div
      className={style.carousel__item}
      style={{ height: `${item.height}%` }}
      onMouseOver={() => animateTextIn(refText.current)}
      onMouseOut={() => animateTextOut(refText.current)}
    >
      <div className={style.title}>
        <h1 ref={refText}>Letter by letter</h1>
      </div>
      <img src={item.image} alt="" />
    </div>
  );
};

export default Item;
