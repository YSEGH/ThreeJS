import React from "react";
import { ItemType } from "..";
import style from "../style/item.module.css";

type Props = {
  item: ItemType;
};

const Item: React.FC<Props> = ({ item }) => {
  return (
    <div className={style.carousel__item} style={{ height: `${item.height}%` }}>
      <img src={item.image} alt="" />
    </div>
  );
};

export default Item;
