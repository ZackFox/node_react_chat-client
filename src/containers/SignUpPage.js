import React from "react";
import RegForm from "../components/RegForm";

const SignUpPage = ({ history }) => {
  const handleSubmit = () => {
    history.push("/");
  };
  return <RegForm submitWithRedirect={handleSubmit} />;
};

export default SignUpPage;
