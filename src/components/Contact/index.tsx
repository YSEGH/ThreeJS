import React from "react";
import style from "./style/index.module.css";
import Form from "./components/Form";

const fields = [
  {
    blockName: "text",
    blockType: "text",
    id: "JIDSQ98",
    label: "Name",
    name: "name",
    required: true,
    width: 100,
  },
  {
    blockName: "text",
    blockType: "text",
    id: "JIDSQ95",
    label: "Address Email",
    name: "email",
    required: true,
    width: 100,
  },
  {
    blockName: "text",
    blockType: "textarea",
    id: "JIDSQ91",
    label: "Message",
    name: "message",
    required: true,
    width: 100,
  },
];

const form = {
  id: "IDSQ90",
  customClass: "form__contact",
  fields: fields,
  confirmationMessage: "any",
  submitButtonLabel: "Submit",
};

const index: React.FC = () => {
  return (
    <div className={style.contact}>
      <h2>Let's Keep In Touch</h2>
      <Form form={form} />
    </div>
  );
};

export default index;
