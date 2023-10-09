import React, { useEffect } from "react";
import { Tag } from "../TagCloud/src/TagCloud";
import style from "./style/rate.module.css";
import Star from "./components/Star";

type Props = {
  tag: Tag | null;
  reverse: boolean;
};

const MAX_RATE = 5;

const index: React.FC<Props> = ({ tag, reverse }) => {
  const getRateStar = () => {
    const stars = [];
    const delay = 0.1;
    // Calcul du nombre d'étoiles pleines
    const fullStars = Math.floor(tag!.rate);

    // Ajouter les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          rate={100}
          customStyle={{
            transitionDelay: reverse
              ? `${(MAX_RATE - i) * delay}s`
              : `${i * delay}s`,
          }}
        />
      );
    }

    // Ajouter l'étoile partielle si nécessaire
    if (tag!.rate > fullStars) {
      const remainder = (tag!.rate - fullStars) * 100;
      stars.push(
        <Star
          rate={remainder}
          customStyle={{
            transitionDelay: reverse
              ? `${(MAX_RATE - fullStars) * delay}s`
              : `${fullStars * delay}s`,
          }}
        />
      );
    }

    // Ajouter les étoiles vides si nécessaire
    const emptyStars = Math.floor(MAX_RATE - tag!.rate);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          rate={0}
          customStyle={{
            transitionDelay: reverse
              ? `${(MAX_RATE - (fullStars + 1 + i)) * delay}s`
              : `${(fullStars + i) * delay}s`,
          }}
        />
      );
    }

    return stars;
  };

  useEffect(() => {
    console.log(reverse);

    return () => {};
  }, [tag]);

  if (!tag) {
    return;
  }

  return (
    <div className={style.component__rate} style={{}} title={String(tag.rate)}>
      {getRateStar()}
    </div>
  );
};

export default index;
