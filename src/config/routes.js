import CreateEvents from "../components/molecules/CreateEvents/CreateEvents";
import HomePage from "../modules/HomePage/HomePage.component";
import Login from "../modules/Login/Login.component";

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
    title: "CreateEvents",
    path: "/Events/Create",
    element: <CreateEvents />,
  },
];

export default ROUTES;
