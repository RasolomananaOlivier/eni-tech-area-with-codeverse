import { Box } from "@mui/material";
import React, { Fragment } from "react";

import AuthForm from "../../components/organisms/AuthForm/AuthForm.component";
import Footer from "../../components/organisms/Footer/Footer.component";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  useAuth();

  return (
    <Fragment>
      <Box className="auth-page" sx={{ pt: 5 }}>
        <AuthForm action={"Log in"} />
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Login;
