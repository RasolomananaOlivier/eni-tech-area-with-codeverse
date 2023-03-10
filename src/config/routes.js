import HomePage from "../modules/HomePage/HomePage.component";
import Login from "../modules/Login/Login.component";
import Profil from "../modules/ProfilePage/NewProfilePage";

const ROUTES = [
  {
    title: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    title: "Login",
    path: "/login",
    element: <Login />,
  },
];

export default ROUTES;
