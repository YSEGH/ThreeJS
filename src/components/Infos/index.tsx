import React from "react";
import style from "./style/index.module.css";
import SendMail from "./components/SendMail";
import Job from "./components/Job";
import Place from "./components/Place";
import Miotto from "./components/Miotto";

const index: React.FC = () => {
  return (
    <div className={style.infos}>
      <SendMail />
      <Job />
      <Place />
      <Miotto />
    </div>
  );
};

export default index;
