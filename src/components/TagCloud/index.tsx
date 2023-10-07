import { useEffect, useState } from "react";
import TagCloud, { Tag } from "./src/TagCloud";
import style from "./style/index.module.css";
import fullStar from "./assets/star_full.svg";
import emptyStar from "./assets/star_empty.svg";

const index = () => {
  /*   const tags = [
    "React",
    "Typescript",
    "HTML",
    "CSS",
    "PHP",
    "Symfony",
    "Drupal",
    "Wordpress",
    "Payload",
    "MongoDB",
    "MySQL",
    "Javascript",
    "VueJS",
    "Sass",
    "Strapi",
  ]; */

  const tags = [
    { id: 1, name: "React", rate: 5 },
    { id: 2, name: "Typescript", rate: 3.9 },
    { id: 3, name: "HTML", rate: 5 },
    { id: 4, name: "CSS", rate: 5 },
    { id: 5, name: "PHP", rate: 4.4 },
    { id: 6, name: "Symfony", rate: 4 },
    { id: 7, name: "Drupal", rate: 4.1 },
    { id: 8, name: "Wordpress", rate: 3.8 },
    { id: 9, name: "Payload", rate: 4.2 },
    { id: 10, name: "MongoDB", rate: 3.9 },
    { id: 11, name: "MySQL", rate: 4.2 },
    { id: 12, name: "Javascript", rate: 5 },
    { id: 13, name: "VueJS", rate: 4.1 },
    { id: 14, name: "Sass", rate: 4.4 },
    { id: 15, name: "Strapi", rate: 4 },
  ];

  const [tag, setTag] = useState<Tag | null>(null);

  const setTagHandler = (selectedTag: string) => {
    const currentTag = tags.find((tag) => tag.name === selectedTag);
    setTag(currentTag || null);
  };

  useEffect(() => {
    let app = new TagCloud("tag-cloud", tags, setTagHandler);
    app.init();
    return () => {};
  }, []);

  useEffect(() => {
    console.log(tag?.name);

    return () => {};
  }, [tag]);

  return (
    <div id="tag-cloud" style={{ height: "100vh", width: "100vw" }}>
      <div className={style.container__rate}>
        <h4>{tag?.name}</h4>
      </div>
    </div>
  );
};

export default index;
