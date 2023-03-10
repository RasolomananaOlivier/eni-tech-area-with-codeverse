import CreateChallengePage from "../components/CreateChallengePage/CreateChallengePage";
import HomePage from "../modules/HomePage/HomePage.component";
import Login from "../modules/Login/Login.component";
import ProfilePage from "../modules/ProfilePage/NewProfilePage/Profile.Page";
import PagesChalenges from "../modules/PagesChalenges";
import EventsPage from "../modules/EventsPage";

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
  {
    title: "challenge",
    path: "/challenges",
    element: <PagesChalenges />,
  },
  {
    title: "event",
    path: "/Event",
    element: <EventsPage />,
  },
];

export default ROUTES;
