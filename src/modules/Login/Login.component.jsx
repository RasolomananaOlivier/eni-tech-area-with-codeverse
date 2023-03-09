import React, { Fragment } from "react";

import AuthForm from "../../components/organisms/AuthForm/AuthForm.component";
import Footer from "../../components/organisms/Footer/Footer.component";

const Login = () => {
  // if (isAuthenticated) {
  //   return <Redirect to='/' />;
  // }

  return (
    <Fragment>
      <div className="auth-page">
        <div className="register-content">
          <div className="register-grid">
            <AuthForm action={"Log in"} />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Login;
