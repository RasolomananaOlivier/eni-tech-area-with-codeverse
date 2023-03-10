import CreateChallengePage from "../components/CreateChallengePage/CreateChallengePage";
import HomePage from "../modules/HomePage/HomePage.component";
import Login from "../modules/Login/Login.component";
import ProfilePage from "../modules/ProfilePage/NewProfilePage/Profile.Page";
<<<<<<< Updated upstream
=======
import PagesChalenges from "../modules/PagesChalenges";
import EventsPage from "../modules/EventsPage";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
  {
    title: "challenge",
    path: "/challenge",
    element: <PagesChalenges />,
  },
  {
    title: "event",
    path: "/Event",
    element: <EventsPage />,
  },
>>>>>>> Stashed changes
];

export default ROUTES;
