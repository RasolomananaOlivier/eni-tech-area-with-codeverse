import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyToken } from "../api/authApi";
import { setAuth } from "../redux/reducers/authSlice";
import { setUser } from "../redux/reducers/userSlice";
import token from "../utils/token";

export const useAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function verify() {
    try {
      const tokenValue = token.get();
      const res = await verifyToken(tokenValue);

      console.log("verification process", res);
      dispatch(setUser(res.data.user));
      dispatch(setAuth({ isLogged: true }));
      if (location.pathname === "/login") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (location.pathname !== "/login") {
        navigate("/login");
      } else {
        console.log("Login page and not logged");
        return;
      }
    }
  }

  useEffect(() => {
    verify();
  }, []);
};
