import React from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";

import composeValidators from "../helpers/composeValidators ";
import required from "../helpers/required";
import matched from "../helpers/matched";
import lessThen from "../helpers/lessThen";

const inputWithError = ({ input, type, label, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label>
        {label}
        <input {...input} type={type} />
      </label>
      {touched && error && <p className="error">{error}</p>}
    </div>
  );
};

const RegForm = ({ submitWithRedirect }) => {
  const onSubmitForm = () => {
    // axios
    //   .post("/api/v1/signup", values)
    //   .then(res => submitWithRedirect())
    //   .catch(({ response }) => {
    //     const { errors } = response.data;
    //     setErrors(errors);
    //   });
  };

  return (
    <div className="signup-form">
      <Form onSubmit={onSubmitForm}>
        {({ handleSubmit, pristine, invalid }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field
                type="text"
                name="username"
                label="username"
                render={inputWithError}
                validate={composeValidators(required)}
              />
              <Field
                type="text"
                name="screename"
                label="Screename"
                render={inputWithError}
                validate={composeValidators(required)}
              />
              <Field
                type="text"
                name="email"
                label="Email"
                render={inputWithError}
                validate={composeValidators(required)}
              />
              <Field
                type="password"
                name="password"
                label="Password"
                render={inputWithError}
                validate={composeValidators(required, lessThen(5))}
              />
              <Field
                type="password"
                name="passwordConfirm"
                label="Password Confirm"
                render={inputWithError}
                validate={composeValidators(required, matched)}
              />

              <button type="submit" disabled={pristine || invalid}>
                Отправить
              </button>
            </form>
          );
        }}
      </Form>
    </div>
  );
};

export default RegForm;
