import React from "react";
import style from "./style/index.module.css";
import Item from "./components/Item";

const index: React.FC = () => {
  const items = [
    {
      id: 1,
      name: "Jordan BETTIN",
      job: "Lead Tech - Capgemini",
      image: "/assets/p3.jpg",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus vero, eius nam eaque pariatur. Porro esse ullam.",
    },
    {
      id: 2,
      name: "Guillaume CAROUX",
      job: "Lead Tech - Capgemini",
      image: "/assets/p5.jpg",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus vero, eius nam eaque pariatur. Porro esse ullam.",
    },
    {
      id: 3,
      name: "Pierre SAPIN",
      job: "Lead Tech - Capgemini",
      image: "/assets/p6.jpg",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus vero, eius nam eaque pariatur. Porro esse ullam.",
    },
    {
      id: 4,
      name: "Mohamed SEFRAOUI",
      job: "Lead Tech - Capgemini",
      image: "/assets/p7.jpg",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus vero, eius nam eaque pariatur. Porro esse ullam.",
    },
  ];

  return (
    <div className={style.testimony}>
      <div className={style.testimony__inner}>
        <div className={style.testimony__list}>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
