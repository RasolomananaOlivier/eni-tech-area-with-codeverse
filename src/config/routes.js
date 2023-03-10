import CreateChallengePage from "../components/CreateChallengePage/CreateChallengePage";
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
    title: "Challenge",
    path: "/challenges/create",
    element: <CreateChallengePage />,
  },
];

export default ROUTES;
