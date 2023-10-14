import React from "react";
import style from "../style/SendMail.module.css";

const SendMail: React.FC = () => {
  const onClickHandler = () => {
    console.log("Send Mail");
  };

  return (
    <div className={style.sendmail}>
      <button onClick={onClickHandler}>Email me.</button>
    </div>
  );
};

export default SendMail;
