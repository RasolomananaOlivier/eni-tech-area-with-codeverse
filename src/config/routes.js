import CreateChallengePage from "../components/CreateChallengePage/CreateChallengePage";
import HomePage from "../modules/HomePage/HomePage.component";
import Login from "../modules/Login/Login.component";
import ProfilePage from "../modules/ProfilePage/NewProfilePage/Profile.Page";
import PagesChalenges from "../modules/PagesChalenges";

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
  {
    title: "profile",
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    title: "Challenges",
    path: "/challenges",
    element: <PagesChalenges />,
  },
];

export default ROUTES;
