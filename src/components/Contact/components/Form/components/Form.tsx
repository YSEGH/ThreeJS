import React, { useContext, FormEvent } from "react";
import { getFormData } from "../utils";
import styles from "../style/index.module.css";
import Col from "./Col";
import { FormContext } from "../context/context";
import { sendForm } from "../context/actions";

type Props = {};

const Form: React.FC<Props> = () => {
  const state: any = useContext(FormContext);

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      form: state.id,
      submissionData: getFormData(state.fields, formData),
    };
    sendForm(data, state.dispatch);
  };

  return (
    <form
      className={styles[state.customClass]}
      id={state.id}
      noValidate
      onSubmit={submitFormHandler}
    >
      {state.fields.map((field: any) => (
        <Col key={field.id} field={field} />
      ))}
      <div className={styles.form__submit}>
        <button form={state.id} type="submit" disabled={state.loading}>
          {state.loading ? "Loading" : state.submitButtonLabel}
        </button>
      </div>
    </form>
  );
};

export default Form;

/* import React, { useContext } from "react";
import { getFormData } from "../utils";
import styles from "../style/index.module.css";
import Col from "./Col";
import { FormContext } from "../context/context";
import { sendForm } from "../context/actions";

type Props = {};

const Form: React.FC<Props> = () => {
  const state = useContext(FormContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      form: state.id,
      submissionData: getFormData(state.fields, formData),
    };
    sendForm(data, state.dispatch);
  };

  return (
    <form
      className={styles[state.customClass]}
      id={state.id}
      noValidate
      onSubmit={submitFormHandler}
    >
      {state.fields.map((field) => (
        <Col key={field.id} field={field} />
      ))}
      <div className={styles.form__submit}>
        <button
          form={state.id}
          type="submit"
          disabled={state.loading}
        >
          {state.loading ? "Loading" : state.submitButtonLabel}
        </button>
      </div>
    </form>
  );
};

export default Form;
 */
