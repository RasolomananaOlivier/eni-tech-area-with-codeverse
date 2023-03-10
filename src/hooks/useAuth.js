import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { verifyToken } from "../api/authApi";
import { setAuth } from "../redux/reducers/authSlice";
import { setUser } from "../redux/reducers/userSlice";
import { selectAuth } from "../redux/selectors/authSelector";
import token from "../utils/token";

export const useAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    isError,
    error,
    isLoading,
    data: { data },
  } = useQuery({
    queryKey: ["verifyToken"],
    queryFn: verifyToken,
  });

  if (isError) {
    console.log(error);
    if (location.pathname !== "/login") {
      navigate("/login");
    } else {
      console.log("Login page and not logged");
      return;
    }
  }

  if (isLoading) {
  }

  dispatch(setUser(data.user));
  dispatch(setAuth({ isLogged: true }));
  navigate("/");
};
