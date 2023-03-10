import HomePage from "../modules/HomePage/HomePage.component";
import Login from "../modules/Login/Login.component";
import ProfilePage from "../modules/ProfilePage/NewProfilePage/Profile.Page";

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
  {
    title: "profile",
    path: "/profile",
    element: <ProfilePage />,
  },
];

export default ROUTES;
