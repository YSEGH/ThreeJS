import { useEffect } from "react";
import WordCloud from "./src/WordCloud";

const index = () => {
  const words = [
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
  ];

  useEffect(() => {
    let app = new WordCloud(words);
    app.init("tag-container");
    return () => {};
  }, []);

  return (
    <div id="tag-container" style={{ height: "100vh", width: "100vw" }}></div>
  );
};

export default index;
