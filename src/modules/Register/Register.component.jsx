import React, { Fragment } from "react";

import Caption from "./Caption/Caption.component";
import AuthForm from "../../components/organisms/AuthForm/AuthForm.component";
import Footer from "../../components/organisms/Footer/Footer.component";

import "./Register.styles.scss";

const Register = () => {
  return (
    <Fragment>
      <div className="auth-page">
        <div className="register-content">
          <div className="register-grid">
            <Caption />
            <AuthForm action={"Sign up"} />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Register;
