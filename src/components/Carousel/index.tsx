import React from "react";
import Item from "./components/Item";
import style from "./style/index.module.css";
export type ItemType = {
  id: number;
  title: string;
  image: string;
  height: number;
};

const items = [
  { id: 1, title: "Lorem Ipsum", image: "/assets/p3.jpg", height: 80 },
  { id: 2, title: "Lorem Ipsum", image: "/assets/p5.jpg", height: 70 },
  { id: 3, title: "Lorem Ipsum", image: "/assets/p6.jpg", height: 75 },
  { id: 4, title: "Lorem Ipsum", image: "/assets/p7.jpg", height: 80 },
  { id: 5, title: "Lorem Ipsum", image: "/assets/p8.jpg", height: 85 },
  { id: 6, title: "Lorem Ipsum", image: "/assets/p9.jpg", height: 80 },
  { id: 7, title: "Lorem Ipsum", image: "/assets/p10.jpg", height: 85 },
  { id: 8, title: "Lorem Ipsum", image: "/assets/p11.jpg", height: 75 },
  { id: 9, title: "Lorem Ipsum", image: "/assets/p1.jpg", height: 80 },
  { id: 10, title: "Lorem Ipsum", image: "/assets/p4.jpg", height: 65 },
];

const index: React.FC = () => {
  return (
    <div className={style.carousel}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default index;
